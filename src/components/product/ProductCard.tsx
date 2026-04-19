import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import { WishlistButton } from './WishlistButton';

export interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group block cursor-pointer">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-nude/20 mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-medium px-3 py-1.5 shadow-sm">
              {product.vibe}
            </span>
            {product.typeNote && (
              <span className="bg-black/90 text-white text-[10px] uppercase tracking-widest font-medium px-3 py-1.5 shadow-sm">
                {product.typeNote}
              </span>
            )}
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
      </Link>
      <div className="flex flex-col items-center text-center">
        <h3 className="font-serif text-xl tracking-wide mb-1 group-hover:text-hotpink transition-colors">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <span className="font-medium text-gray-900 mb-2">${product.price}</span>
        <div className="flex items-center gap-2">
            <p className="text-xs text-gray-500 uppercase tracking-widest line-clamp-1 max-w-[80%]">{product.description}</p>
            <WishlistButton product={{ id: product.id, name: product.name, price: product.price, image: product.image }} />
        </div>
      </div>
    </div>
  );
}
