"use client";
import { useState } from "react";

export default function SubscribeModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
    setEmail(""); // Clear email field after submission
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center font-lateef bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl">Subscribe to Updates</h2>
        <form onSubmit={handleSubmit} className="space-y-3 mt-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded p-2 w-full"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded w-full"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="text-sm mt-2">{message}</p>}
        <button onClick={onClose} className="mt-3 text-gray-600 text-sm">
          Close
        </button>
      </div>
    </div>
  );
}
