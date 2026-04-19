import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AnnouncementBar } from './AnnouncementBar';
import { BrandLoader } from '../ui/BrandLoader';

const INITIAL_LOADER_MS = 1900;
const TRANSITION_LOADER_MS = 900;

export function Layout() {
  const location = useLocation();
  const initialLoadRef = useRef(true);
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      setLoaderVisible(false);
    }, initialLoadRef.current ? INITIAL_LOADER_MS : TRANSITION_LOADER_MS);

    initialLoadRef.current = false;

    return () => {
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  useEffect(() => {
    setLoaderVisible(true);
  }, [location.pathname]);

  return (
    <>
      <BrandLoader visible={loaderVisible} />
      <div className="min-h-screen flex flex-col transition-opacity duration-700" style={{ opacity: loaderVisible ? 0 : 1 }}>
        <AnnouncementBar />
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
