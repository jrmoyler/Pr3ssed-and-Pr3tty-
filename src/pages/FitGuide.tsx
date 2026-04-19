import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function FitGuide() {
  return (
    <div className="bg-blush min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">The Essentials</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Find Your Pr3tty Fit</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Use our sizing guide to measure each nail at home before ordering your set. Accurate sizing helps your nails fit better and look more polished.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-serif italic mb-10">How to Measure</h2>
            <ol className="space-y-10">
              <li className="flex gap-6">
                <div className="text-2xl font-serif italic text-hotpink shrink-0">01</div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-medium mb-2">Place tape over each nail</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Use clear tape and press it firmly across the widest part of your nail bed.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="text-2xl font-serif italic text-hotpink shrink-0">02</div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-medium mb-2">Mark each side</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Use a pen to mark the exact edges of your nail on the tape.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="text-2xl font-serif italic text-hotpink shrink-0">03</div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-medium mb-2">Measure the width</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Remove the tape, lay it flat, and measure the distance between the marks in millimeters (mm).</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="text-2xl font-serif italic text-hotpink shrink-0">04</div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-medium mb-2">Use your measurements</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Match your measurements to our preset sizes or enter them as custom sizes when ordering.</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="order-1 lg:order-2 relative aspect-[4/5] bg-white p-4 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1595868426023-e18e11a3e810?auto=format&fit=crop&q=80&w=1000" 
              alt="Nail sizing guide" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-black/10 m-4 pointer-events-none" />
          </div>
        </div>

        <div className="bg-white p-12 md:p-20 shadow-sm border border-gray-100 mb-24">
          <h2 className="text-3xl font-serif italic mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <h3 className="text-sm uppercase tracking-widest font-medium md:col-span-1">Between sizes?</h3>
              <p className="text-gray-500 text-sm leading-relaxed md:col-span-2">It's always better to size up! You can gently file the edges of a slightly larger nail to fit your natural nail bed perfectly.</p>
            </div>
            <div className="w-full h-px bg-gray-100"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <h3 className="text-sm uppercase tracking-widest font-medium md:col-span-1">Individual sizes?</h3>
              <p className="text-gray-500 text-sm leading-relaxed md:col-span-2">Yes, if you don't fit the preset sizes (XS, S, M, L), select "Custom" and provide the exact millimeter measurements for each finger.</p>
            </div>
            <div className="w-full h-px bg-gray-100"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <h3 className="text-sm uppercase tracking-widest font-medium md:col-span-1">Custom sets?</h3>
              <p className="text-gray-500 text-sm leading-relaxed md:col-span-2">Yes, accurate sizing is crucial for custom sets. Please use the Made for You form to submit your exact measurements.</p>
            </div>
            <div className="w-full h-px bg-gray-100"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <h3 className="text-sm uppercase tracking-widest font-medium md:col-span-1">Photo verification?</h3>
              <p className="text-gray-500 text-sm leading-relaxed md:col-span-2">Absolutely. If you're unsure, you can upload a photo of your tape measurements along with your custom request for extra verification.</p>
            </div>
          </div>
        </div>

        <div className="text-center flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/vault">
            <Button className="rounded-none px-10 py-4 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900 w-full sm:w-auto">Shop Sets</Button>
          </Link>
          <Link to="/made-for-you">
            <Button variant="outline" className="rounded-none px-10 py-4 uppercase tracking-widest text-xs border-black text-black hover:bg-black hover:text-white transition-colors w-full sm:w-auto">Start a Custom Order</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
