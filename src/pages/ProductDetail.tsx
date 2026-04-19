import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/Button';
import { WishlistButton } from '../components/product/WishlistButton';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const addItem = useCartStore(state => state.addItem);
  
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');
  const [activeAccordion, setActiveAccordion] = useState<string | null>('details');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif italic mb-6">Product Not Found</h1>
        <Link to="/vault"><Button className="rounded-none px-10 py-4 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Back to Vault</Button></Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, size);
    navigate('/cart');
  };

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.vibe === product.vibe)
    .slice(0, 4);

  return (
    <div className="bg-blush min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden bg-white shadow-sm border border-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-widest font-medium text-gray-500 border-b border-gray-300 pb-1">{product.vibe}</span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-gray-500 border-b border-gray-300 pb-1">{product.collection}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif italic mb-4">{product.name}</h1>
              <p className="text-xl font-medium text-gray-900">${product.price}</p>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-md">{product.description}</p>

            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-xs uppercase tracking-widest font-medium text-gray-500">Size</label>
                <Link to="/fit-guide" className="text-[10px] uppercase tracking-widest text-hotpink hover:text-black transition-colors">Size Help</Link>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {['XS', 'S', 'M', 'L', 'Custom'].map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-3 text-xs uppercase tracking-widest transition-colors border ${
                      size === s ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-600 hover:border-black'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className="text-xs uppercase tracking-widest font-medium text-gray-500 block mb-4">Quantity</label>
              <div className="flex items-center border border-gray-200 w-32">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-gray-50 text-gray-500 transition-colors">-</button>
                <span className="flex-1 text-center font-medium text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-gray-50 text-gray-500 transition-colors">+</button>
              </div>
            </div>

            <Button size="lg" className="w-full mb-6 rounded-none py-5 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900" onClick={handleAddToCart}>Add to Cart</Button>
            <WishlistButton 
              product={{ id: product.id, name: product.name, price: product.price, image: product.image }} 
              className="w-full border border-black rounded-none py-5 mb-12 uppercase tracking-widest text-xs" 
            />
            
            <div className="bg-blush/30 p-4 text-center mb-12 border border-blush/50">
              <p className="text-[10px] uppercase tracking-widest font-medium text-hotpink">Earn Pr3tty Points with this order</p>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-200">
              {[
                { id: 'details', title: 'Product Details', content: 'Handmade press-on nails crafted with high-quality gel polish for a salon-perfect finish. Each set includes 10 nails in your selected size.' },
                { id: 'shipping', title: 'Shipping Info', content: 'All orders are shipping only. Please allow processing time for handmade sets. You will receive a tracking email once shipped.' },
                { id: 'sizing', title: 'Sizing Help', content: 'Use our Find Your Pr3tty Fit guide to measure your natural nails before ordering to ensure the perfect fit.' },
                { id: 'care', title: 'Care Instructions', content: 'Avoid soaking in water for long periods. Use cuticle oil daily. Can be reused if removed carefully with warm soapy water and oil.' }
              ].map(section => (
                <div key={section.id} className="border-b border-gray-200">
                  <button
                    className="w-full py-5 flex justify-between items-center text-xs uppercase tracking-widest font-medium text-gray-600 hover:text-black transition-colors"
                    onClick={() => setActiveAccordion(activeAccordion === section.id ? null : section.id)}
                  >
                    {section.title}
                    <span className="text-lg font-light">{activeAccordion === section.id ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === section.id && (
                    <div className="pb-6 text-gray-500 text-sm leading-relaxed">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-16 border-t border-gray-100">
            <h2 className="text-3xl font-serif italic mb-12 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden bg-white mb-4 shadow-sm border border-gray-100">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif italic text-lg mb-1 group-hover:text-hotpink transition-colors">{p.name}</h3>
                    <p className="text-xs font-medium text-gray-900">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
