export function Shipping() {
  return (
    <div className="bg-blush min-h-screen pb-24">
      <div className="bg-white py-24 border-b border-gray-100 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Delivery Details</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Shipping Policy</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-12 md:p-16 shadow-sm border border-gray-100">
          <div className="prose prose-pink max-w-none text-gray-500 font-light leading-relaxed">
            <p className="mb-8 text-xl font-serif italic text-gray-900">
              Pr3ss3d & Pr3tty is currently a shipping-only business. Pickup is no longer available.
            </p>
            <p className="mb-8">
              Please review your order details and sizing carefully before placing your order. Accurate sizing is crucial for the best fit.
            </p>
            <p className="mb-8">
              Delivery times may vary depending on order volume, launch traffic, and custom request timing. You will receive shipping updates via email once your order has been processed and prepared for shipment.
            </p>
            <div className="pt-8 border-t border-gray-100 mt-12">
              <p className="text-xs uppercase tracking-widest font-medium text-gray-400 mb-2">Questions about your shipment?</p>
              <p>Contact us at: <a href="mailto:Pressedpretty4@gmail.com" className="text-hotpink hover:text-black transition-colors">Pressedpretty4@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
