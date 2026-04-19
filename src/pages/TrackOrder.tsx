import { useState } from 'react';
import React from 'react';
import { Button } from '../components/ui/Button';

export function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order tracking lookup
    if (orderId.trim()) {
      setStatus('Your order is currently processing at our facility.');
    } else {
      setStatus('Please enter a valid order ID.');
    }
  };

  return (
    <div className="bg-blush min-h-screen py-32">
      <div className="max-w-xl mx-auto px-4 bg-white p-12 shadow-sm border border-pink-100">
        <h1 className="text-3xl font-serif italic mb-8">Track Your Order</h1>
        <p className="text-gray-600 mb-8">Enter your order ID below to see the status of your shipment.</p>
        <form onSubmit={handleTrack} className="space-y-4">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Order ID (e.g., PP-12345)"
            className="w-full p-4 border border-gray-200 focus:outline-none focus:border-black"
            required
          />
          <Button type="submit" className="w-full rounded-none py-4 bg-black text-white hover:bg-gray-900">
            Track Order
          </Button>
        </form>
        {status && (
          <div className="mt-8 p-4 bg-pink-50 border border-pink-100 text-sm italic">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
