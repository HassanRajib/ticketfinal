"use client"

const tickets = [
    { id: 1, status: "Available" },
    { id: 2, status: "Available" },
    { id: 3, status: "Sold Out" },
    { id: 4, status: "Available" },
    { id: 5, status: "Sold Out" },
    { id: 6, status: "Available" },
  ];


  type TicketStatus = "Available" | "Sold Out";

  interface TicketProps {
    status: TicketStatus;
  }


const TickCar = ({status}: TicketProps) => {
    const isSoldOut = status === "Sold Out";
    return(
        <div
        className={`relative rounded-xl overflow-hidden border-2 ${
          isSoldOut ? "border-red-500" : "border-black dark:border-white"
        }`}
      >
        <img
          src="/dde82013-32bb-4957-a3ad-bde997ab860a.png" // replace with your image path
          alt={status}
          className="w-full h-40 object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`text-xl font-semibold ${
              isSoldOut ? "text-red-500" : "text-black dark:text-white"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    )
} 

const TicketCa = () => {
    
  return (
    <div className="bg-white dark:bg-[#0a0a0a] py-10 px-5 text-black dark:text-white">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Select Ticket Type</h2>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {tickets.map((ticket) => (
          <TickCar key={ticket.id} status={ticket.status as TicketStatus} />
        ))}
      </div>
    </div>
  )
}

export default TicketCa