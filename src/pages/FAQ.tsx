export function FAQ() {
  const faqs = [
    {
      q: "How much are the sets?",
      a: "All current launch sets are $24.99."
    },
    {
      q: "Do you offer pickup?",
      a: "No. Pr3ss3d & Pr3tty is currently shipping only."
    },
    {
      q: "How do I find my size?",
      a: "Use the Find Your Pr3tty Fit guide to measure each nail before ordering."
    },
    {
      q: "Can I order a custom set?",
      a: "Yes. Use the Made for You form to submit your inspiration and sizing."
    },
    {
      q: "What if I don't know my size?",
      a: "Use the size guide first, then enter your measurements when placing your order or submitting a custom request."
    },
    {
      q: "Do you offer rewards?",
      a: "Yes. Join the Pr3tty Points Club to earn rewards on purchases, reviews, and more."
    }
  ];

  return (
    <div className="bg-blush min-h-screen pb-24">
      <div className="bg-white py-24 border-b border-gray-100 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Need Help?</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">FAQ</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need to know about ordering, sizing, and shipping your Pr3ss3d & Pr3tty sets.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 shadow-sm border border-gray-100">
              <h3 className="font-serif italic text-2xl mb-4">{faq.q}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
