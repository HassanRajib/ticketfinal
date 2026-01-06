"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; // <-- REPLACE THIS

export const initiatePayment = async ({
  eventId,
  quantity,
  cus_name,
  cus_email,
  cus_phone,
}: {
  eventId: string;
  quantity: number;
  cus_name: string;
  cus_email: string;
  cus_phone: string;
}) => {
  const res = await fetch(`${BACKEND_URL}api/create-payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventId,
      quantity,
      cus_name,
      cus_email,
      cus_phone,
    }),
  });

  const data = await res.json();

  if (!data.paymentUrl) {
    throw new Error("Payment initialization failed");
  }
  window.location.href = data.paymentUrl;
};

const serverUrl = BACKEND_URL;
if (
  !serverUrl ||
  serverUrl.includes(BACKEND_URL)
) {
  console.error(
    "VITE_BACKEND_URL is not set. Please update the constant in TicketForm.tsx."
  );
}

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    reemail: z.string().email("Invalid re-email"),
    phone: z.string().min(6, "Phone number is required"),
    date: z.string().date("Date must be DD/MM/YYYY"),
    quantity: z.coerce
      .number()
      .min(1, "Tickets must be at least 1")
      .max(5, "Tickets must be between 1 and 5"),
  })
  .refine((data) => data.email === data.reemail, {
    path: ["reemail"],
    message: "Emails do not match",
  });

// This type is now correct and consistent (ticketCount is number)
type TicketInputs = z.infer<typeof schema>;

interface TicketFormProps {
  eventId: string;
}

const TicketForm = ({ eventId }: TicketFormProps) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketInputs>({
    resolver: zodResolver(schema) as any,
  });

  const onSubmit = async (data: TicketInputs) => {
    setLoading(true);

    try {
      // Save ticket form data to localStorage for after payment
      localStorage.setItem(
        "ticketFormData",
        JSON.stringify({ ...data, eventId })
      );

      localStorage.setItem("paymentReturnUrl", window.location.pathname);

      // Call AamarPay payment initiation
      await initiatePayment({
        eventId,
        quantity: data.quantity, // assuming your form has quantity field
        cus_name: data.name,     // match your form fields
        cus_email: data.email,
        cus_phone: data.phone,
      });
      
      // After this line, user is redirected automatically
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white dark:bg-[#1a1a1a] shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-primary text-white dark:text-black text-center font-bold uppercase">
        Buy A Ticket
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6 space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-bold mb-1">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-bold mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Re-Email */}
        <div>
          <label htmlFor="reemail" className="block font-bold mb-1">
            Re-Email
          </label>
          <input
            id="reemail"
            type="email"
            {...register("reemail")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Repeat email"
          />
          {errors.reemail && (
            <p className="text-red-500 text-sm">{errors.reemail.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-bold mb-1">
            Phone
          </label>
          <input
            id="phone"
            {...register("phone")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Phone number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* DOB */}
        <div>
          <label htmlFor="date" className="block font-bold mb-1">
            Date of Birth
          </label>
          <input
            id="date"
            type="date"
            {...register("date")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        {/* Ticket Count */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium dark:text-gray-200 text-gray-700 mb-2">
            Number of Tickets
          </label>
          <input
            id="quantity"
            type="number"
            {...register("quantity", { valueAsNumber: true })}
            min={1}
            max={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Enter ticket count (1-5)"
          />
          {errors.quantity && (
            <p className="text-red-500 text-xs mt-1">
              {errors.quantity.message}
            </p>
          )}
        </div>
        {/* Terms */}
        <div>
          <label className="inline-flex items-start space-x-2">
            <input type="checkbox" required className="mt-1 h-4 w-4" />
            <span className="text-sm">
              I accept{" "}
              <Link to="/terms" className="font-bold ">
                terms
              </Link>
              ,{" "}
              <Link to="/privacy" className="font-bold ">
                privacy
              </Link>{" "}
              &{" "}
              <Link to="/refund" className="font-bold ">
                refund policy
              </Link>
              .
            </span>
          </label>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Redirecting to Payment..." : "Book Ticket"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
