import { useApp } from '../AppContext'
import ProductCard from './ProductCard'
import EmptyState from './EmptyState'

export default function FavoritesPage() {
  const { wishlist, setPage } = useApp()

  if (wishlist.length === 0) {
    return (
      <EmptyState
        icon="🤍"
        title="No favorites yet"
        description="Start exploring our menu and add items you love to your favorites!"
        actionLabel="Explore Menu"
        onAction={() => setPage('menu')}
      />
    )
  }

  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">Wishlist</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Your Favorites</h2>
          <p className="text-base text-gray-500">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  )
}
