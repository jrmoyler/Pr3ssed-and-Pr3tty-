/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WishlistProvider } from './context/WishlistContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Vault } from './pages/Vault';
import { QuickSlay } from './pages/QuickSlay';
import { MadeForYou } from './pages/MadeForYou';
import { FitGuide } from './pages/FitGuide';
import { Reviews } from './pages/Reviews';
import { PointsClub } from './pages/PointsClub';
import { FAQ } from './pages/FAQ';
import { Shipping } from './pages/Shipping';
import { TrackOrder } from './pages/TrackOrder';
import { Contact } from './pages/Contact';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Wishlist } from './pages/Wishlist';

export default function App() {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vault" element={<Vault />} />
            <Route path="quick-slay" element={<QuickSlay />} />
            <Route path="made-for-you" element={<MadeForYou />} />
            <Route path="fit-guide" element={<FitGuide />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="points-club" element={<PointsClub />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="track-order" element={<TrackOrder />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  );
}
