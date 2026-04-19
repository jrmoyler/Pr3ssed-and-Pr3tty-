import { Button } from '../components/ui/Button';

const REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    product: "Pr3tty Pressure",
    rating: 5,
    text: "Obsessed with this set! The quality is amazing and they look like I just walked out of the salon. The hot pink is so vibrant.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Jessica T.",
    product: "Champagne Glaze",
    rating: 5,
    text: "These are perfect for everyday wear. The shimmer is subtle but catches the light beautifully. Sizing was spot on using the guide.",
    image: "https://images.unsplash.com/photo-1516975080661-422fc2bc929c?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Amanda L.",
    product: "Danger Doll",
    rating: 5,
    text: "Wore these for my birthday and got so many compliments! They feel very secure and the red is the perfect shade.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    name: "Chloe R.",
    product: "Lilac Mood",
    rating: 5,
    text: "My new go-to set. The matte finish is so soft and pretty. Shipping was fast and the packaging was adorable.",
    image: "https://images.unsplash.com/photo-1595868426023-e18e11a3e810?auto=format&fit=crop&q=80&w=400"
  }
];

export function Reviews() {
  return (
    <div className="bg-blush min-h-screen pb-24">
      <div className="bg-white py-24 border-b border-gray-100 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">The Community</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Pr3tty Reviews</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Real girls. Real sets. Real Pr3tty moments. See what customers are saying and how they're wearing their favorite looks.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button className="rounded-none px-10 py-5 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Leave a Review</Button>
            <p className="text-[10px] uppercase tracking-widest font-medium text-hotpink">Leave a review and earn Pr3tty Points.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REVIEWS.map(review => (
            <div key={review.id} className="bg-white p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="aspect-square overflow-hidden mb-6 border border-gray-100">
                <img src={review.image} alt="Customer review" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex text-hotpink mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-6 font-light leading-relaxed flex-grow">"{review.text}"</p>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="font-serif italic text-lg mb-1">{review.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400">Purchased {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
