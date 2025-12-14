import { useParams } from 'react-router-dom'

import TicketForm from '@/components/single/TicketForm'
import { useEffect, useState } from 'react'
const serverUrl = import.meta.env.VITE_BACKEND_URL;

interface EventType {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
}


const SigEve = () => {

  const { id } = useParams();
  const [event, setEvent] = useState<EventType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`${serverUrl}api/events/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setEvent(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching event:', err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading event...</p>;
  if (!event) return <p className="text-center mt-10 text-red-500">Event not found</p>;

  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white mb-10">
      <div className="text-center py-10 px-5">
        <h2 className="text-3xl font-bold mt-4 uppercase">{event.title}</h2>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
        <div className="flex justify-center max-w-3xl mx-auto mt-6">
          <img
            src={`${serverUrl}${event.imageUrl}`}
            alt={event.title}
            className="w-fit rounded-2xl border-b-4 border-red-600 mb-3"
          />
        </div>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-justify normal-case">{event.description}</p>
      </div>

      {/* Ticket Form */}
      <TicketForm eventId={event._id} />
    </div>
  )
}

export default SigEve