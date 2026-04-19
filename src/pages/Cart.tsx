import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/Button';
import { Trash2 } from 'lucide-react';

export function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCartStore();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="bg-blush min-h-screen py-32">
        <div className="max-w-3xl mx-auto px-4 text-center bg-white p-16 shadow-sm border border-gray-100">
          <h1 className="text-4xl font-serif italic mb-6">Your Cart is Empty</h1>
          <p className="text-gray-500 mb-10 font-light leading-relaxed">Looks like you haven't added any Pr3tty sets yet.</p>
          <Link to="/vault"><Button className="rounded-none px-10 py-4 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Shop The Pretty Vault</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blush min-h-screen pb-24">
      <div className="bg-white py-24 border-b border-gray-100 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Your Order</h2>
          <h1 className="text-5xl md:text-7xl font-serif italic">Cart</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="flex gap-8 p-6 bg-white border border-gray-100 shadow-sm">
                <div className="w-32 h-40 overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif italic text-2xl">{item.product.name}</h3>
                      <button onClick={() => removeItem(item.product.id)} className="text-gray-400 hover:text-hotpink transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Size: {item.size}</p>
                    <p className="font-medium text-gray-900">${item.product.price}</p>
                  </div>
                  <div className="flex items-center border border-gray-200 w-28">
                    <button onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))} className="px-3 py-2 hover:bg-gray-50 text-gray-500 transition-colors">-</button>
                    <span className="flex-1 text-center font-medium text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-3 py-2 hover:bg-gray-50 text-gray-500 transition-colors">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-10 h-fit border border-gray-100 shadow-sm">
            <h2 className="font-serif italic text-3xl mb-8">Order Summary</h2>
            <div className="space-y-6 mb-8 text-sm">
              <div className="flex justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-500">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-500">Shipping</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Calculated at checkout</span>
              </div>
              <div className="border-t border-gray-100 pt-6 flex justify-between text-xl">
                <span className="font-serif italic">Total</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <Button size="lg" className="w-full mb-6 rounded-none py-5 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900" onClick={() => navigate('/checkout')}>Proceed to Checkout</Button>
            <p className="text-[10px] uppercase tracking-widest text-center text-gray-400">Shipping only. Pickup is not available.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
