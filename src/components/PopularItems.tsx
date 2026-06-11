import { useApp } from '../AppContext'
import { products, categories } from '../types'
import ProductCard from './ProductCard'
import SectionHeader from './SectionHeader'

export default function PopularItems() {
  const { popularCategory, setPopularCategory, setPage } = useApp()
  const filtered = products
    .filter(p => p.rating >= 4.7 && (popularCategory === null || p.categoryId === popularCategory))
    .slice(0, 4)

  return (
    <section id="popular" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeader tag="Customer Favorites" title="Most Popular Items" description={popularCategory !== null ? `Filtered by ${categories.find(c => c.id === popularCategory)?.name}` : 'Our most loved dishes by customers'} />
        {filtered.length > 0 && (
          <div className="text-center mb-6">
            {popularCategory !== null && (
              <button onClick={() => setPopularCategory(null)} className="text-sm text-orange-500 bg-transparent border-none cursor-pointer hover:underline">
                <i className="fas fa-times mr-1" /> Clear filter
              </button>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(p => <div key={p.id} className="animate-on-scroll h-full"><ProductCard product={p} /></div>)}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No popular items in this category yet.</p>
            <button onClick={() => setPopularCategory(null)} className="mt-4 text-orange-500 font-semibold bg-transparent border-none cursor-pointer hover:underline">View all popular items</button>
          </div>
        )}
        <div className="text-center mt-12">
          <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage('menu') }} className="inline-flex items-center gap-2 px-9 py-4 bg-orange-500 text-white text-base font-semibold rounded-full no-underline transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5 border-none cursor-pointer">
            View All Menu <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  )
}
