import { cn } from '../../lib/utils';

type BrandLoaderProps = {
  visible: boolean;
};

export function BrandLoader({ visible }: BrandLoaderProps) {
  return (
    <div
      aria-hidden={!visible}
      className={cn(
        'pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center',
        'bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#fcf4f4_100%)] transition-opacity duration-700 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className="brand-loader-container">
        <div className="loader-wrapper">
          <div className="loader">
            <div className="orbit orbit-1">
              <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="75"></circle>
              </svg>
            </div>
            <div className="orbit orbit-2">
              <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="82"></circle>
              </svg>
            </div>
            <div className="orbit orbit-3">
              <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="68"></circle>
              </svg>
            </div>

            <div className="dust-layer">
              <div className="sparkle" style={{ top: '40px', left: '85px', width: '3px', height: '3px', animationDelay: '0s' }}></div>
              <div className="sparkle" style={{ top: '145px', left: '135px', width: '4px', height: '4px', animationDelay: '0.7s' }}></div>
              <div className="sparkle" style={{ top: '90px', left: '45px', width: '2px', height: '2px', animationDelay: '1.2s' }}></div>
              <div className="sparkle" style={{ top: '120px', left: '155px', width: '3px', height: '3px', animationDelay: '2.1s' }}></div>
              <div className="sparkle" style={{ top: '60px', left: '125px', width: '2.5px', height: '2.5px', animationDelay: '0.4s' }}></div>
              <div className="sparkle" style={{ top: '155px', left: '75px', width: '3.5px', height: '3.5px', animationDelay: '1.8s' }}></div>
              <div className="sparkle" style={{ top: '75px', left: '145px', width: '2px', height: '2px', animationDelay: '2.5s' }}></div>
            </div>

            <div className="bottle-wrapper">
              <svg viewBox="0 0 200 200">
                <rect x="90" y="55" width="20" height="35" rx="1.5" fill="#111111" />
                <rect x="93" y="90" width="14" height="6" fill="#111111" />
                <rect x="72" y="96" width="56" height="56" rx="8" fill="none" stroke="#111111" strokeWidth="2.5" />
                <path d="M 74.5, 115 L 125.5, 115 L 125.5, 144 Q 125.5, 149.5 120, 149.5 L 80, 149.5 Q 74.5, 149.5 74.5, 144 Z" fill="#F1B8C4" />
                <line x1="78" y1="106" x2="78" y2="136" stroke="#fcf4f4" strokeWidth="2" strokeLinecap="round" />
                <line x1="94" y1="62" x2="94" y2="82" stroke="#fcf4f4" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="logo-text-wrapper">
          <h1 className="brand-name">Pr3ssed and Pr3tty</h1>
          <div className="brand-subtext">NAILS</div>
        </div>
      </div>
    </div>
  );
}
