import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { Button } from '../components/ui/Button';
import { WishlistButton } from '../components/product/WishlistButton';

export function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="bg-blush min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif italic mb-12">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-xl mb-6">Your wishlist is empty.</p>
            <Link to="/vault">
              <Button className="rounded-none px-8 py-3 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-800">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <div key={product.id} className="bg-white p-4 shadow-sm border border-pink-100 flex flex-col">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-4">${product.price.toFixed(2)}</p>
                <div className="mt-auto flex justify-between items-center">
                  <Link to={`/product/${product.id}`}>
                      <Button variant="outline" className="rounded-none text-xs">View Product</Button>
                  </Link>
                  <WishlistButton product={product} className="static" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
