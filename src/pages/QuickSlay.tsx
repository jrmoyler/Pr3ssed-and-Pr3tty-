import { ProductCard } from '../components/product/ProductCard';
import { products } from '../data/products';

export function QuickSlay() {
  const quickSlayProducts = products.filter(p => p.collection === 'Quick Slay');

  return (
    <div className="bg-blush min-h-screen pb-24">
      <div className="bg-white py-24 border-b border-gray-100 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">The Essentials</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-8">Quick Slay</h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
            Easy favorites for girls who want a polished set fast. These designs are cute, simple, wearable, and still make a statement.
          </p>
          <p className="text-xs uppercase tracking-widest font-medium text-hotpink">
            All sets are currently $24.99 during our launch special.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {quickSlayProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
