import React, { useState } from 'react';
import { Button } from '../components/ui/Button';

export function MadeForYou() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="bg-blush min-h-screen py-32">
        <div className="max-w-3xl mx-auto px-4 text-center bg-white p-16 shadow-sm border border-gray-100">
          <h1 className="text-4xl font-serif italic mb-6">Request Received</h1>
          <p className="text-gray-500 mb-10 font-light leading-relaxed">
            Thank you for submitting your custom request. We will review your details and get back to you shortly to finalize your Pr3tty set.
          </p>
          <Button onClick={() => setSubmitted(false)} className="rounded-none px-10 py-4 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Submit Another Request</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blush min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-white py-24 border-b border-gray-100 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Custom Orders</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Made for You</h1>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Have something specific in mind? Send over your inspiration, sizing, and ideas, and let's create a custom Pr3ss3d & Pr3tty set just for you.
          </p>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Custom requests are reviewed in the order they are received.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-12 bg-white p-12 md:p-16 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Full Name</label>
              <input required type="text" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Email Address</label>
              <input required type="email" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Phone Number</label>
            <input type="tel" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Desired Vibe</label>
              <input type="text" placeholder="e.g., Soft, Bold, Shimmer..." className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Preferred Colors</label>
              <input type="text" className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Preferred Shape</label>
              <select className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors text-gray-700">
                <option>Almond</option>
                <option>Coffin</option>
                <option>Square</option>
                <option>Stiletto</option>
                <option>Oval</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Preferred Length</label>
              <select className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors text-gray-700">
                <option>Short</option>
                <option>Medium</option>
                <option>Long</option>
                <option>Extra Long</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Occasion</label>
            <input type="text" placeholder="Birthday, Vacation, Everyday..." className="w-full border-b border-gray-300 bg-transparent px-0 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-300" />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Extra Notes</label>
            <textarea rows={4} className="w-full border border-gray-300 bg-transparent p-4 focus:outline-none focus:border-black transition-colors mt-2"></textarea>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-medium mb-3 text-gray-500">Upload Inspiration Images</label>
            <input type="file" multiple accept="image/*" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-none file:border-0 file:text-xs file:uppercase file:tracking-widest file:font-medium file:bg-black file:text-white hover:file:bg-gray-900 transition-colors cursor-pointer mt-2" />
          </div>

          <div className="border-t border-gray-100 pt-12">
            <h3 className="text-2xl font-serif italic mb-8">Sizing Details</h3>
            
            <div className="mb-10">
              <label className="block text-xs uppercase tracking-widest font-medium mb-4 text-gray-500">Preset Size</label>
              <div className="flex flex-wrap gap-6">
                {['XS', 'S', 'M', 'L', 'Custom'].map(size => (
                  <label key={size} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="presetSize" value={size} className="text-black focus:ring-black accent-black" />
                    <span className="text-sm">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-blush p-8 border border-gray-100 mb-10">
              <p className="text-xs uppercase tracking-widest font-medium mb-6 text-gray-500">Individual Nail Measurements (in mm)</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                {['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'].map(finger => (
                  <div key={`left-${finger}`}>
                    <label className="block text-xs text-gray-400 mb-2">Left {finger}</label>
                    <input type="number" className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'].map(finger => (
                  <div key={`right-${finger}`}>
                    <label className="block text-xs text-gray-400 mb-2">Right {finger}</label>
                    <input type="number" className="w-full border-b border-gray-300 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <label className="flex items-start gap-4 cursor-pointer">
              <input required type="checkbox" className="mt-1 rounded-none border-gray-300 text-black focus:ring-black accent-black" />
              <span className="text-sm text-gray-600 leading-relaxed">I used the Pr3ss3d & Pr3tty size guide. <br/><span className="text-hotpink font-medium">Please make sure your measurements are accurate before submitting. All orders are shipping only.</span></span>
            </label>
          </div>

          <div className="pt-8">
            <Button type="submit" className="w-full rounded-none px-10 py-5 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Submit Custom Request</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
