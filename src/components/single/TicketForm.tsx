"use client";

// --- FIX 1: Remove the failing import ---
// import { loadStripe } from 'https://esm.run/@stripe/stripe-js';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";

// --- FIX 2: Replace 'import.meta.env' ---
// The 'import.meta' warnings are because that's a Vite-specific
// feature. In this environment, we must provide the keys directly.
// PLEASE REPLACE THESE WITH YOUR ACTUAL KEYS/URLS
const VITE_STRIPE_PUBLIC_KEY =
  "pk_test_51RunomQ8f6UYmLsn5IUwX8r5WaBQzrzJ8LbampeQiw1YrmS7PMdzqwnGBL6uTzxOmioGia51qTosxM8imSA1m7EJ00sLvw26wB"; // <-- REPLACE THIS
const VITE_BACKEND_URL = "https://backend-mytiketbd.variationbd.com/"; // <-- REPLACE THIS

// --- FIX 3: Manually load Stripe.js ---
// This function replicates the behavior of `loadStripe` by dynamically
// adding the Stripe.js script tag to the document.
// We also add a global type for window.Stripe.
declare global {
  interface Window {
    Stripe: any;
  }
}

const getStripe = (publicKey: string) => {
  return new Promise((resolve, reject) => {
    // Check if Stripe is already loaded
    if (window.Stripe) {
      resolve(window.Stripe(publicKey));
      return;
    }

    // Check if script is already loading
    if (document.querySelector("script[src='https://js.stripe.com/v3/']")) {
      // If so, wait for it to load
      const script = document.querySelector(
        "script[src='https://js.stripe.com/v3/']"
      )!;
      script.addEventListener("load", () => {
        if (window.Stripe) {
          resolve(window.Stripe(publicKey));
        } else {
          reject(new Error("Stripe.js not loaded after waiting."));
        }
      });
      script.addEventListener("error", () => {
        reject(new Error("Failed to load Stripe.js while waiting."));
      });
      return;
    }

    // If not, create and append the script
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.async = true;
    script.onload = () => {
      if (window.Stripe) {
        resolve(window.Stripe(publicKey));
      } else {
        reject(new Error("Stripe.js not loaded"));
      }
    };
    script.onerror = () => {
      reject(new Error("Failed to load Stripe.js"));
    };
    document.head.appendChild(script);
  });
};
// --- End of FIX 3 ---

// Ensure Stripe public key is provided or throw an error
const stripePublicKey = VITE_STRIPE_PUBLIC_KEY;
if (
  !stripePublicKey ||
  stripePublicKey.includes(
    "pk_test_51RunomQ8f6UYmLsn5IUwX8r5WaBQzrzJ8LbampeQiw1YrmS7PMdzqwnGBL6uTzxOmioGia51qTosxM8imSA1m7EJ00sLvw26wB"
  )
) {
  console.error(
    "VITE_STRIPE_PUBLIC_KEY is not set. Please update the constant in TicketForm.tsx."
  );
  // We won't throw an error to keep the component renderable,
  // but Stripe will fail.
}
// Use our new function instead of the imported one
const stripePromise = getStripe(stripePublicKey);

// Ensure backend URL is provided
const serverUrl = VITE_BACKEND_URL;
if (
  !serverUrl ||
  serverUrl.includes("https://backend-mytiketbd.variationbd.com/")
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
    date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Date must be DD/MM/YYYY"),
    ticketCount: z.coerce
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
    resolver: zodResolver(schema) as any, // This will no longer error
  });

  const onSubmit = async (data: TicketInputs) => {
    setLoading(true);

    // Save ticket form data to localStorage for after payment
    localStorage.setItem(
      "ticketFormData",
      JSON.stringify({ ...data, eventId })
    );

    try {
      // Check if keys are still placeholders
      if (
        !stripePublicKey ||
        stripePublicKey.includes(
          "pk_test_51RunomQ8f6UYmLsn5IUwX8r5WaBQzrzJ8LbampeQiw1YrmS7PMdzqwnGBL6uTzxOmioGia51qTosxM8imSA1m7EJ00sLvw26wB"
        ) ||
        !serverUrl ||
        serverUrl.includes("your-backend-url.com")
      ) {
        console.error(
          "Stripe or Server URL is not configured. Aborting payment."
        );
        setLoading(false);
        // Here you would show a user-facing error message
        return;
      }

      const stripe: any = await stripePromise;
      if (!stripe) {
        console.error("Stripe.js failed to load.");
        setLoading(false);
        return;
      }

      const response = await fetch(`${serverUrl}/api/create-checkout-session`, {
        // Fixed missing slash
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity: data.ticketCount, // This is now correctly a number
          eventId,
          successUrl: `${window.location.origin}/payment-success`,
          cancelUrl: `${window.location.origin}/payment-cancel`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const session = await response.json();

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) {
        console.error("Stripe redirectToCheckout error:", error);
      }
    } catch (err) {
      console.error("Error creating Stripe checkout session", err);
      // TODO: Show an error message to the user
      setLoading(false); // Make sure to re-enable button on error
    } finally {
      // setLoading(false); // Commented out, as user redirects on success
      // Let's re-enable it if an error happens *before* redirect
    }
  };

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
          <label
            htmlFor="ticketCount"
            className="block text-sm font-medium dark:text-gray-200 text-gray-700 mb-2"
          >
            Number of Tickets
          </label>
          <input
            id="ticketCount"
            type="number"
            {...register("ticketCount", { valueAsNumber: true })}
            min={1}
            max={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Enter ticket count (1-5)"
          />
          {errors.ticketCount && (
            <p className="text-red-500 text-xs mt-1">
              {errors.ticketCount.message}
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
