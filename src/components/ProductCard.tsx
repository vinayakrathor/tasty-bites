import { useState } from 'react'
import { useApp } from '../AppContext'
import type { Product } from '../types'
import Rating from './Rating'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useApp()
  const [imgErr, setImgErr] = useState(false)
  const inWishlist = wishlist.some(w => w.id === product.id)

  const handleWishlist = () => {
    if (inWishlist) removeFromWishlist(product.id)
    else addToWishlist(product)
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full">
      <div className="relative h-48 shrink-0 overflow-hidden">
        {product.badge && <span className={`absolute top-4 left-4 z-10 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>{product.badge}</span>}
        {imgErr ? (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-4xl"><i className="fas fa-utensils" /></div>
        ) : (
          <img src={product.img} alt={product.name} onError={() => setImgErr(true)} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        )}
        <button onClick={handleWishlist} className={`absolute top-4 right-4 w-9 h-9 border-none rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md text-lg ${inWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-800 hover:bg-red-500 hover:text-white'}`}>
          {inWishlist ? '♥' : '♡'}
        </button>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <Rating value={product.rating} count={product.reviews} size="sm" />
        <h3 className="text-base font-semibold text-gray-800 mb-2 mt-2">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-4 line-clamp-2">{product.desc}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-orange-500">${product.price.toFixed(2)}</span>
          <button onClick={() => addToCart(product)} className="flex items-center gap-1 px-4 py-2.5 bg-gray-800 text-white border-none rounded-full text-xs font-semibold cursor-pointer transition-colors duration-300 hover:bg-orange-500">
            <i className="fas fa-plus" /> Add
          </button>
        </div>
      </div>
    </div>
  )
}
