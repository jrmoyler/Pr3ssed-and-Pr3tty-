import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function PointsClub() {
  return (
    <div className="bg-blush min-h-screen pb-24">
      {/* Hero Section */}
      <div className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">The Rewards</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Pr3tty Points Club</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            The more Pr3tty you get, the more perks you unlock. Shop, review, and come back for rewards you can use on future orders.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="bg-white p-12 md:p-16 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-serif italic mb-12">How to Earn</h2>
            <div className="space-y-10">
              <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                <div>
                  <p className="text-sm uppercase tracking-widest font-medium mb-1">Shop</p>
                  <p className="text-gray-500 text-sm">For every $1 spent</p>
                </div>
                <div className="text-2xl font-serif italic text-hotpink">1 pt</div>
              </div>
              <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                <div>
                  <p className="text-sm uppercase tracking-widest font-medium mb-1">Welcome</p>
                  <p className="text-gray-500 text-sm">Bonus for your first order</p>
                </div>
                <div className="text-2xl font-serif italic text-hotpink">50 pts</div>
              </div>
              <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                <div>
                  <p className="text-sm uppercase tracking-widest font-medium mb-1">Review</p>
                  <p className="text-gray-500 text-sm">For a photo review</p>
                </div>
                <div className="text-2xl font-serif italic text-hotpink">25 pts</div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-sm uppercase tracking-widest text-gray-400">Plus, earn bonus points when you refer a friend.</p>
            </div>
          </div>

          <div className="bg-blush/30 p-12 md:p-16 border border-blush/50">
            <h2 className="text-3xl font-serif italic mb-12">The Rewards</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 text-center shadow-sm">
                <h3 className="text-sm uppercase tracking-widest font-medium mb-2">50 Points</h3>
                <p className="text-4xl font-serif italic text-hotpink mb-2">$5 Off</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Your next order</p>
              </div>
              <div className="bg-white p-8 text-center shadow-sm">
                <h3 className="text-sm uppercase tracking-widest font-medium mb-2">100 Points</h3>
                <p className="text-4xl font-serif italic text-hotpink mb-2">$10 Off</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">Your next order</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 text-center border border-gray-100 mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest font-medium mb-4">Launch Bonus</h2>
          <p className="text-gray-600 font-light leading-relaxed">
            During our first 90 days, all sets are $24.99 and launch shoppers can unlock extra rewards through the Pr3tty Points Club.
          </p>
        </div>

        <div className="text-center">
          <Link to="/vault">
            <Button className="rounded-none px-12 py-4 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Start Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
