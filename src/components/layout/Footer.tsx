import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-serif italic mb-6">Ready to find your next Pr3tty set?</h2>
            <p className="text-gray-400 mb-10 max-w-md font-light leading-relaxed">
              Shop the launch collection, find your fit, and get your next favorite set delivered right to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/vault">
                <Button className="rounded-none px-8 py-3 uppercase tracking-widest text-xs bg-white text-black hover:bg-gray-200">Shop Now</Button>
              </Link>
              <Link to="/fit-guide">
                <Button variant="outline" className="rounded-none px-8 py-3 uppercase tracking-widest text-xs border-white text-white hover:bg-white hover:text-black transition-colors">Find Your Pr3tty Fit</Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6 text-gray-400">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/vault" className="text-sm hover:text-hotpink transition-colors">The Pretty Vault</Link></li>
              <li><Link to="/quick-slay" className="text-sm hover:text-hotpink transition-colors">Quick Slay</Link></li>
              <li><Link to="/made-for-you" className="text-sm hover:text-hotpink transition-colors">Made for You</Link></li>
              <li><Link to="/points-club" className="text-sm hover:text-hotpink transition-colors">Pr3tty Points Club</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6 text-gray-400">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/fit-guide" className="text-sm hover:text-hotpink transition-colors">Size Guide</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-hotpink transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-hotpink transition-colors">Shipping Policy</Link></li>
              <li><Link to="/track-order" className="text-sm hover:text-hotpink transition-colors">Track Order</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-hotpink transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            © {new Date().getFullYear()} Pr3ss3d & Pr3tty. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-gray-500">
            <a href="mailto:Pressedpretty4@gmail.com" className="hover:text-white transition-colors">Pressedpretty4@gmail.com</a>
            <a href="https://tiktok.com/@press.and.pretty6" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
