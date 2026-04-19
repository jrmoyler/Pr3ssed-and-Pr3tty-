import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { products, Vibe } from '../data/products';

const VIBES: Vibe[] = [
  'Soft Pr3tty', 'Bold Pr3tty', 'Wild Pr3tty', 
  'Shimmer Pr3tty', 'Floral Pr3tty', 'Statement Pr3tty'
];

export function Vault() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeVibe = searchParams.get('vibe');
  const [sortBy, setSortBy] = useState('featured');

  const vaultProducts = products.filter(p => p.collection === 'The Pretty Vault');
  
  let filteredProducts = activeVibe 
    ? vaultProducts.filter(p => p.vibe === activeVibe)
    : vaultProducts;

  // Simple sorting logic for demo
  if (sortBy === 'newest') {
    filteredProducts = [...filteredProducts].reverse();
  }

  return (
    <div className="bg-blush min-h-screen pb-24">
      <div className="bg-white py-24 border-b border-gray-100 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">The Collection</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">The Pretty Vault</h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
            A curated collection of standout Pr3ss3d & Pr3tty sets designed for girls who love glam, confidence, softness, shimmer, and statement style.
          </p>
          <p className="text-xs uppercase tracking-widest font-medium text-hotpink">
            All sets are currently $24.99 during our launch special.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSearchParams({})}
              className={`text-xs uppercase tracking-widest pb-1 border-b transition-colors ${
                !activeVibe ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'
              }`}
            >
              All
            </button>
            {VIBES.map(vibe => (
              <button
                key={vibe}
                onClick={() => setSearchParams({ vibe })}
                className={`text-xs uppercase tracking-widest pb-1 border-b transition-colors ${
                  activeVibe === vibe ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                {vibe}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-b border-gray-300 pb-1 text-xs uppercase tracking-widest text-gray-600 focus:outline-none focus:border-black cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="best-selling">Best Selling</option>
            <option value="soft-to-bold">Softest to Boldest</option>
            <option value="bold-to-soft">Boldest to Softest</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <p className="text-gray-400 text-sm uppercase tracking-widest">No sets found for this vibe.</p>
          </div>
        )}
      </div>
    </div>
  );
}
