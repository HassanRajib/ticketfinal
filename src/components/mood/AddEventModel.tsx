"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  date: z.string().min(1, { message: "Date is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  lastPurchaseDate: z
    .string()
    .min(1, { message: "Last purchase date is required" }),
  totalTickets: z.string().min(1, "Must be at least 1").optional(),
  price: z.string().min(0, "Price must be 0 or more").optional(),
  image: z.any().optional(),
});

export type EventInputs = z.infer<typeof schema>;

interface AddEventProps {
  onClose: () => void;
  onSuccess: () => void;
  data?: EventInputs & {
    _id: string;
    imageUrl?: string;
    location?: string;
    lastPurchaseDate?: string;
  };

  type: "create" | "update";
}

const AddEventModel = ({ onClose, onSuccess, data, type }: AddEventProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(
    data?.imageUrl || null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<EventInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
      location: "",
      lastPurchaseDate: "",
      totalTickets: undefined,
      price: undefined,
      image: undefined,
    },
  });

  useEffect(() => {
    if (type === "update" && data) {
      const { _id, imageUrl, ...formValues } = data;
      reset({
        ...formValues,
        // totalTickets: String(formValues.totalTickets),
        // price: String(formValues.price),
        lastPurchaseDate: formValues.lastPurchaseDate || "",
      });
      if (imageUrl) setPreviewImage(imageUrl);
    }
  }, [data, reset, type]);

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const url =
        type === "create"
          ? "https://backend-mytiketbd.variationbd.com/api/events"
          : `https://backend-mytiketbd.variationbd.com/api/events/${data?._id}`;

      const method = type === "create" ? "POST" : "PUT";

      const payload = new FormData();
      payload.append("title", formData.title);
      payload.append("description", formData.description || "");
      payload.append("date", formData.date);
      payload.append("location", formData.location);
      payload.append("lastPurchaseDate", formData.lastPurchaseDate);
      payload.append("totalTickets", (formData.totalTickets || 0).toString());
      payload.append("price", (formData.price || 0).toString());
      if (formData.image && formData.image[0]) {
        payload.append("image", formData.image[0]);
      }

      const response = await fetch(url, {
        method,
        body: payload,
      });

      if (response.ok) {
        onSuccess();
        onClose();
      } else {
        console.error(`${type} failed`);
      }
    } catch (error) {
      console.error("Error submitting event:", error);
    }
  });

  // Watch for image preview
  const selectedImage = watch("image");
  useEffect(() => {
    if (selectedImage && selectedImage[0]) {
      const file = selectedImage[0];
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      return () => {
        URL.revokeObjectURL(imageUrl);
      };
    }
  }, [selectedImage]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-black">
          {type === "create" ? "Add New Event" : "Edit Event"}
        </h2>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          encType="multipart/form-data"
        >
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

          <div className="md:col-span-2">
            <label className="text-sm text-black">Description</label>
            <textarea
              {...register("description")}
              className="w-full border px-3 py-2 rounded text-black border-blue-950"
              rows={3}
            />
          </div>

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

          <div className="md:col-span-2">
            <label className="text-sm text-black">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
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

          <div className="md:col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {type === "create" ? "Add Event" : "Update Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventModel;
