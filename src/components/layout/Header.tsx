import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { cn } from '../../lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'The Pretty Vault', path: '/vault' },
    { name: 'Quick Slay', path: '/quick-slay' },
    { name: 'Made for You', path: '/made-for-you' },
    { name: 'Find Your Pr3tty Fit', path: '/fit-guide' },
    { name: 'Pr3tty Reviews', path: '/reviews' },
    { name: 'Pr3tty Points Club', path: '/points-club' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-serif italic tracking-widest text-gray-900 hover:opacity-80 transition-opacity">
            Pr3ss3d & Pr3tty
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium hover:text-hotpink transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart */}
          <div className="flex items-center">
            <Link to="/wishlist" className="p-2">
              <Heart className="w-6 h-6 hover:text-hotpink transition-colors" />
            </Link>
            <Link to="/cart" className="relative p-2">
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-hotpink text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
              Pr3ss3d & Pr3tty
            </Link>
            <button
              className="p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium py-2 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Link to="/shipping" className="text-sm text-gray-500">Shipping Policy</Link>
              <Link to="/faq" className="text-sm text-gray-500">FAQ</Link>
              <Link to="/contact" className="text-sm text-gray-500">Contact</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
