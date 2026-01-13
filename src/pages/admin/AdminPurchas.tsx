import { useEffect, useState } from "react";

interface Ticket {
  _id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  quantity: number;
  totalPrice: number;
  serial: string;
  createdAt: string;
  eventId: {
    title: string;
    date: string;
  };
}

const serverUrl = import.meta.env.VITE_BACKEND_URL;

const AdminPurchases = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<string>("All");

  const eventTitles = [
    "All",
    ...Array.from(new Set(tickets.map((ticket) => ticket.eventId?.title))),
  ];

  const filteredTickets =
    selectedEvent === "All"
      ? tickets
      : tickets.filter((ticket) => ticket.eventId?.title === selectedEvent);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch(`${serverUrl}api/tickets/admin`);
        const data = await res.json();
        setTickets(data);
      } catch (error) {
        console.error("Failed to load purchases", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Ticket Purchases</h2>
      <div className="mb-4">
        <label className="font-semibold mr-2">Filter by Event:</label>
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          {eventTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      {tickets.length === 0 ? (
        <p>No tickets purchased yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2">Serial</th>
                <th className="px-4 py-2">Event</th>
                <th className="px-4 py-2">Buyer</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">DOB</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total Price</th>
                <th className="px-4 py-2">Purchased At</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((ticket) => (
                <tr key={ticket._id} className="border-t text-black">
                  <td className="px-4 py-2">{ticket.serial}</td>
                  <td className="px-4 py-2">{ticket.eventId?.title}</td>
                  <td className="px-4 py-2">{ticket.name}</td>
                  <td className="px-4 py-2">{ticket.email}</td>
                  <td className="px-4 py-2">{ticket.phone}</td>
                  <td className="px-4 py-2">{ticket.dob}</td>
                  <td className="px-4 py-2">{ticket.quantity}</td>
                  <td className="px-4 py-2">${ticket.totalPrice}</td>
                  <td className="px-4 py-2">
                    {new Date(ticket.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPurchases;
