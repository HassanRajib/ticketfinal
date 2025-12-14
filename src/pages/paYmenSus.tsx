import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => {
    const ticketData = localStorage.getItem("ticketFormData");

    if (ticketData) {
      fetch("https://backend-mytiketbd.variationbd.com/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: ticketData, // already JSON string from localStorage
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Ticket booked:", data);
          localStorage.removeItem("ticketFormData");
        })
        .catch((error) => {
          console.error("Error booking ticket:", error);
        });
    }
  }, []);

  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
      <p>Your ticket has been booked.</p>
    </div>
  );
}
