
import { useEffect, useState } from "react";

interface Event {
  _id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  imageUrl?: string;
}

const serverUrl = import.meta.env.VITE_BACKEND_URL;
const AdminPastEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${serverUrl}api/events/past`);
        const data = await res.json();

        // Filter past events based on event date
        const now = new Date();
        const pastEvents = data.filter((event: Event) => new Date(event.date) < now);

        setEvents(pastEvents);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Past Events</h2>
      {events.length === 0 ? (
        <p>No past events found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div key={event._id} className="border rounded p-4 bg-white shadow">
              {event.imageUrl && (
                <img
                  src={`${serverUrl}${event.imageUrl}`}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded mb-2"
                />
              )}
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <p>Location: {event.location}</p>
              <p>Price: ${event.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPastEvents;
