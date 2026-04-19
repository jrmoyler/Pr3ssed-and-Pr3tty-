import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';

interface WishlistButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  className?: string;
}

export function WishlistButton({ product, className = '' }: WishlistButtonProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isAdded = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAdded) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`p-2 transition-colors ${isAdded ? 'text-hotpink' : 'text-gray-400 hover:text-hotpink'} ${className}`}
      aria-label={isAdded ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart fill={isAdded ? 'currentColor' : 'none'} size={20} />
    </button>
  );
}
