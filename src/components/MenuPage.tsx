import { useMemo } from 'react'
import { useApp } from '../AppContext'
import { products } from '../types'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'

export default function MenuPage() {
  const { filterCategory, filterPriceMax, filterRating, searchQuery, setFilterCategory, setFilterPriceMax, setFilterRating, setSearchQuery } = useApp()

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (filterCategory !== null && p.categoryId !== filterCategory) return false
      if (p.price > filterPriceMax) return false
      if (p.rating < filterRating) return false
      if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.desc.toLowerCase().includes(searchQuery.toLowerCase())) return false
      return true
    })
  }, [filterCategory, filterPriceMax, filterRating, searchQuery])

  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Our Full Menu</h1>
          <p className="text-gray-500">Browse and filter our delicious offerings</p>
        </div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search menu..." />
        <FilterBar />

        <p className="text-sm text-gray-500 mb-4">{filtered.length} item{filtered.length !== 1 ? 's' : ''} found</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">No items match your filters.</p>
            <button onClick={() => { setFilterCategory(null); setFilterPriceMax(100); setFilterRating(0); setSearchQuery('') }} className="mt-4 text-orange-500 font-semibold bg-transparent border-none cursor-pointer hover:underline">Reset Filters</button>
          </div>
        )}
      </div>
    </section>
  )
}
