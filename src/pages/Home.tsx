import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/product/ProductCard';
import { products, featuredProductIds } from '../data/products';

export function Home() {
  const featuredProducts = featuredProductIds.map(
    id => products.find(p => p.id === id)!
  );

  return (
    <div className="bg-blush">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury press-on nails" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-serif italic tracking-wide mb-6 drop-shadow-lg"
          >
            Luxury nails, <br className="hidden md:block"/> ready when you are.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto drop-shadow-md"
          >
            Handmade press-on nail sets for girls who want polished, feminine, confidence-boosting looks without the salon appointment.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/vault">
              <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-none px-10 py-4 uppercase tracking-widest text-xs">Shop The Collection</Button>
            </Link>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-xs uppercase tracking-widest font-medium text-white/80"
          >
            90-Day Launch Special — All sets are $24.99
          </motion.p>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">The Brand</h2>
          <p className="text-2xl md:text-4xl font-serif leading-relaxed text-gray-900 mb-10">
            Pr3ss3d & Pr3tty creates handmade press-on nail sets for girls who want luxury, softness, bold energy, and everyday glam all in one place.
          </p>
          <Link to="/vault" className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-hotpink hover:border-hotpink transition-colors">
            Discover Our Story
          </Link>
        </div>
      </section>

      {/* Featured Launch Sets */}
      <section className="py-24 bg-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif italic mb-4">The Launch Edit</h2>
              <p className="text-gray-500 max-w-md text-sm uppercase tracking-widest">
                Curated favorites from our debut collection.
              </p>
            </div>
            <Link to="/vault" className="hidden md:block text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-hotpink hover:border-hotpink transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center md:hidden mt-12">
            <Link to="/vault" className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-hotpink hover:border-hotpink transition-colors">
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Vibe - Editorial Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-serif italic text-center mb-20">Shop by Vibe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Soft Pr3tty', desc: 'Clean, polished, easy-to-love looks.', img: 'https://images.unsplash.com/photo-1516975080661-422fc2bc929c?auto=format&fit=crop&q=80&w=800' },
              { name: 'Bold Pr3tty', desc: 'Bright, playful, attention-grabbing sets.', img: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800' },
              { name: 'Wild Pr3tty', desc: 'Fierce patterns, strong color, standout energy.', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800' },
            ].map((vibe) => (
              <Link to={`/vault?vibe=${vibe.name}`} key={vibe.name} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img src={vibe.img} alt={vibe.name} className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div className="text-center">
                  <h3 className="font-serif italic text-2xl mb-2 group-hover:text-hotpink transition-colors">{vibe.name}</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{vibe.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Slay Promo */}
      <section className="py-0 bg-white">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          <div className="flex-1 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=1000" 
              alt="Quick Slay Nails" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 flex items-center justify-center p-12 lg:p-24 bg-blush">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4">The Essentials</h2>
              <h3 className="text-4xl md:text-5xl font-serif italic mb-6">Need a Quick Slay?</h3>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Shop easy favorites for girls who want a polished set without overthinking it. These looks are simple, cute, wearable, and still very Pr3tty.
              </p>
              <Link to="/quick-slay">
                <Button variant="outline" className="rounded-none px-8 py-3 uppercase tracking-widest text-xs border-black text-black hover:bg-black hover:text-white transition-colors">Shop Quick Slay</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Size Guide & Custom Order */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="text-center p-12 bg-blush border border-gray-100">
              <h2 className="text-3xl font-serif italic mb-4">Find Your Pr3tty Fit</h2>
              <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                Not sure what size to order? Use our easy size guide to measure your nails at home before choosing your set.
              </p>
              <Link to="/fit-guide" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-hotpink hover:border-hotpink transition-colors">
                View Size Guide
              </Link>
            </div>
            <div className="text-center p-12 bg-blush/30 border border-blush/50">
              <h2 className="text-3xl font-serif italic mb-4">Made for You</h2>
              <p className="text-gray-700 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                Want something more personal? Send your inspiration, sizing, and ideas through our custom request form.
              </p>
              <Link to="/made-for-you" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-hotpink hover:border-hotpink transition-colors">
                Start Custom Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-32 bg-blush border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Pr3tty Points Club</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic mb-8">Get rewarded for staying Pr3tty</h3>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
            Join the Pr3tty Points Club and earn rewards when you shop, leave a review, and come back for more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif italic text-hotpink mb-4">01</span>
              <span className="text-sm uppercase tracking-widest">Shop</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif italic text-hotpink mb-4">02</span>
              <span className="text-sm uppercase tracking-widest">Review</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-serif italic text-hotpink mb-4">03</span>
              <span className="text-sm uppercase tracking-widest">Reward</span>
            </div>
          </div>
          <Link to="/points-club">
            <Button variant="primary" className="rounded-none px-10 py-4 uppercase tracking-widest text-xs bg-black text-white hover:bg-gray-900">Discover Rewards</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
