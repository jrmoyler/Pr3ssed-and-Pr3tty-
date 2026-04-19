import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/Button';

export function Checkout() {
  const { items, subtotal, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="bg-blush min-h-screen py-32">
        <div className="max-w-3xl mx-auto px-4 text-center bg-white p-16 shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-serif italic mb-6">Order Confirmed</h1>
          <p className="text-gray-500 mb-10 font-light leading-relaxed">Thank you for shopping with Pr3ss3d & Pr3tty. You will receive a confirmation email shortly.</p>
          <Link to="/"><Button className="rounded-none px-10 py-4 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Return Home</Button></Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-blush min-h-screen py-32">
        <div className="max-w-3xl mx-auto px-4 text-center bg-white p-16 shadow-sm border border-gray-100">
          <h1 className="text-4xl font-serif italic mb-6">Your Cart is Empty</h1>
          <Link to="/vault"><Button className="rounded-none px-10 py-4 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Shop The Pretty Vault</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blush min-h-screen pb-24">
      <div className="bg-white py-24 border-b border-gray-100 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Secure Checkout</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic">Checkout</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form onSubmit={handleCheckout} className="space-y-12">
            <div className="bg-white p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif italic mb-8">Contact Information</h2>
              <div className="space-y-6">
                <input required type="email" placeholder="Email Address" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded-none border-gray-300 text-black focus:ring-black accent-black" />
                  Email me with news and offers
                </label>
              </div>
            </div>

            <div className="bg-white p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif italic mb-8">Shipping Address</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input required type="text" placeholder="First Name" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                  <input required type="text" placeholder="Last Name" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                </div>
                <input required type="text" placeholder="Address" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                <div className="grid grid-cols-3 gap-6">
                  <input required type="text" placeholder="City" className="col-span-1 w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                  <select required className="col-span-1 w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors text-gray-700">
                    <option value="">State</option>
                    <option value="CA">CA</option>
                    <option value="NY">NY</option>
                    <option value="TX">TX</option>
                  </select>
                  <input required type="text" placeholder="ZIP Code" className="col-span-1 w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                </div>
              </div>
            </div>

            <div className="bg-white p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif italic mb-8">Payment</h2>
              <div className="space-y-6">
                <input required type="text" placeholder="Card Number" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                <div className="grid grid-cols-2 gap-6">
                  <input required type="text" placeholder="MM/YY" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                  <input required type="text" placeholder="CVC" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-400" />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full rounded-none py-5 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : `Pay $${(subtotal + 5).toFixed(2)}`}
            </Button>
          </form>

          <div className="bg-white p-10 shadow-sm border border-gray-100 h-fit sticky top-24">
            <h2 className="text-2xl font-serif italic mb-8">Order Summary</h2>
            <div className="space-y-6 mb-8">
              {items.map(item => (
                <div key={`${item.product.id}-${item.size}`} className="flex items-center gap-6">
                  <div className="relative w-20 h-24 overflow-hidden bg-gray-50 border border-gray-100">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute top-0 right-0 w-6 h-6 bg-black text-white text-[10px] flex items-center justify-center z-10">{item.quantity}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif italic text-lg mb-1">{item.product.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Size: {item.size}</p>
                  </div>
                  <p className="font-medium text-sm">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-500">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-500">Shipping</span>
                <span className="font-medium">$5.00</span>
              </div>
              <div className="border-t border-gray-100 pt-6 flex justify-between text-xl">
                <span className="font-serif italic">Total</span>
                <span className="font-medium">${(subtotal + 5).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
