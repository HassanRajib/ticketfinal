import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod'; // Using Zod for validation
import { zodResolver } from '@hookform/resolvers/zod';

const serverUrl = import.meta.env.VITE_BACKEND_URL;

// 1. Define the validation schema for your form
const eventFormSchema = z.object({
  title: z.string().min(3, 'Title is required'),
  date: z.string().min(1, 'Event date is required'),
  lastPurchaseDate: z.string().min(1, 'Last purchase date is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  location: z.string().min(1, 'Location is required'),
  totalTickets: z.number().min(1, 'Must have at least 1 ticket'),
  price: z.number().min(0, 'Price cannot be negative'),
  image: z.instanceof(FileList).optional(),
});

// 2. Infer the TypeScript type from the schema
type EventFormData = z.infer<typeof eventFormSchema>;

const EventForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the 'id' from the URL
  const isEditing = Boolean(id); // True if we are editing (e.g., /events/edit/123)

  // State for the image preview
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);

  const {
    register,
    handleSubmit,
    reset, // To populate the form when editing
    watch, // To watch the image field for preview
    formState: { errors },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
  });

  // Watch the image field to update the preview
  const imageFile = watch('image');
  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      const newPreviewUrl = URL.createObjectURL(file);
      setPreviewImage(newPreviewUrl);
      
      // Cleanup: revoke the object URL when component unmounts
      return () => URL.revokeObjectURL(newPreviewUrl);
    }
  }, [imageFile]);

  // Fetch event data if we are in "edit" mode
  useEffect(() => {
    if (isEditing) {
      axios.get(`${serverUrl}api/events/${id}`)
        .then(response => {
          const event = response.data;
          
          // Format dates for the <input type="date">
          const eventDate = new Date(event.date).toISOString().split('T')[0];
          const lastPurchase = new Date(event.lastPurchaseDate).toISOString().split('T')[0];
          
          // 3. Use reset() to populate the form with fetched data
          reset({
            title: event.title,
            date: eventDate,
            lastPurchaseDate: lastPurchase,
            description: event.description,
            location: event.location,
            totalTickets: event.totalTickets,
            price: event.price,
            // Note: 'image' field is not set here as file inputs can't be pre-filled
          });
          
          // Set the preview image from the existing event URL
          if (event.image) {
            setPreviewImage(event.image); 
          }
        })
        .catch(err => console.error("Failed to fetch event", err));
    }
  }, [id, isEditing, reset]);

  // 4. This function runs when the form is submitted
  const onSubmit: SubmitHandler<EventFormData> = async (data) => {
    // We must use FormData because you are uploading an image
    const formData = new FormData();
    
    // Append all data fields to FormData
    formData.append('title', data.title);
    formData.append('date', data.date);
    formData.append('lastPurchaseDate', data.lastPurchaseDate);
    formData.append('description', data.description);
    formData.append('location', data.location);
    formData.append('totalTickets', String(data.totalTickets));
    formData.append('price', String(data.price));
    
    // Only append the image if a new one was selected
    if (data.image && data.image.length > 0) {
      formData.append('image', data.image[0]);
    }

    try {
      if (isEditing) {
        // Update existing event
        await axios.put(`${serverUrl}api/events/${id}`, formData);
      } else {
        // Create new event
        await axios.post(`${serverUrl}api/events`, formData);
      }
      navigate('/admin/events'); // Go back to the list on success
    } catch (error) {
      console.error('Failed to save event:', error);
    }
  };

  return (
    // 5. This is your page layout, NOT a modal
    <div className="p-6"> 
      <h1 className="text-2xl font-bold mb-6 text-black">
        {isEditing ? 'Update Event' : 'Add New Event'}
      </h1>
      
      {/* This is your form JSX, placed directly onto the page.
        - onSubmit is now handled by react-hook-form.
        - 'type' is replaced with 'isEditing'.
        - 'onClose' is replaced with 'navigate'.
      */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6 border border-gray-200">
        <form
          onSubmit={handleSubmit(onSubmit)} // Use RHF's handleSubmit
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          encType="multipart/form-data"
        >
          {/* Title */}
          <div>
            <label className="text-sm text-black">Title</label>
            <input
              {...register("title")}
              className="w-full border px-3 py-2 rounded text-black border-blue-950"
            />
            {errors.title && (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Event Date */}
          <div>
            <label className="text-sm text-black">Event Date</label>
            <input
              type="date"
              {...register("date")}
              className="w-full border px-3 py-2 rounded text-black border-blue-950"
            />
            {errors.date && (
              <p className="text-xs text-red-500">{errors.date.message}</p>
            )}
          </div>

          {/* Last Purchase Date */}
          <div>
            <label className="text-sm text-black">Last Purchase Date</label>
            <input
              type="date"
              {...register("lastPurchaseDate")}
              className="w-full border px-3 py-2 rounded text-black border-blue-950"
            />
            {errors.lastPurchaseDate && (
              <p className="text-xs text-red-500">
                {errors.lastPurchaseDate.message}
              </p>
            )}
          </div>
          
          {/* Location */}
          <div>
            <label className="text-sm text-black">Event Location</label>
            <input
              {...register("location")}
              className="w-full border px-3 py-2 rounded text-black border-blue-950"
            />
            {errors.location && (
              <p className="text-xs text-red-500">{errors.location.message}</p>
            )}
          </div>
          
          {/* Total Tickets */}
          <div>
            <label className="text-sm text-black">Total Tickets</label>
            <input
              type="number"
              {...register("totalTickets")}
              className="w-full border px-3 py-2 rounded text-black border-blue-950"
            />
            {errors.totalTickets && (
              <p className="text-xs text-red-500">
                {errors.totalTickets.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="text-sm text-black">Price</label>
            <input
              type="number"
              {...register("price")}
              className="w-full border px-3 py-2 rounded text-black border-blue-950"
            />
            {errors.price && (
              <p className="text-xs text-red-500">{errors.price.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="text-sm text-black">Description</label>
            <textarea
              {...register("description")}
              className="w-full border px-3 py-2 rounded text-black border-blue-950"
              rows={3}
            />
             {errors.description && (
              <p className="text-xs text-red-500">{errors.description.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="text-sm text-black">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image")} // RHF handles the file
              className="w-full border px-3 py-2 rounded text-black border-blue-950"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-2 w-full h-40 object-cover rounded"
              />
            )}
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => navigate('/admin/events')} // Changed from onClose
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {isEditing ? "Update Event" : "Add Event"} {/* Changed from type */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;