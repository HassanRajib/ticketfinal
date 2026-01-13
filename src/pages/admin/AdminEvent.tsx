import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const serverUrl = import.meta.env.VITE_BACKEND_URL;

interface EventItem {
  _id: string;
  title: string;
  date: string;
  totalTickets: string;
  price: string;
  image?: string;
  location: string;
  lastPurchaseDate: string;
}

const AdminEvent = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const navigate = useNavigate(); // Initialize the navigate function

  // handleEdit is no longer needed here, navigation will handle it.

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Are you sure?");
    if (!confirm) return;
    try {
      await axios.delete(`${serverUrl}api/events/${id}`);
      fetchEvents(); // Refresh list after delete
    } catch (error) {
      console.error("failed to delete", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${serverUrl}api/events`);
      setEvents(response.data);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Events</h1>
        <button
          onClick={() => navigate("/admin/events/new")} // Navigate to the new event form
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Event
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-black">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Tickets</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id} className="border-t text-sm">
                <td className="px-4 py-3 text-black">{event.title}</td>
                <td className="px-4 py-3 text-black">
                  {new Date(event.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-black">{event.totalTickets}</td>
                <td className="px-4 py-3 text-black">{event.price}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => navigate(`/admin/events/edit/${event._id}`)} // Navigate to the edit form
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* The modal component is now removed from this file */}
    </div>
  );
};

export default AdminEvent;
