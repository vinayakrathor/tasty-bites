import { useApp } from '../AppContext'
import { categories } from '../types'

export default function FilterBar() {
  const { filterCategory, setFilterCategory, filterPriceMax, setFilterPriceMax, filterRating, setFilterRating, setSearchQuery } = useApp()

  const reset = () => {
    setFilterCategory(null)
    setFilterPriceMax(100)
    setFilterRating(0)
    setSearchQuery('')
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Category:</span>
          <select value={filterCategory ?? ''} onChange={e => setFilterCategory(e.target.value ? Number(e.target.value) : null)} className="text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-orange-500 bg-white">
            <option value="">All</option>
            {categories.map(c => <option key={c.id} value={c.id}>{c.icon} {c.name}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Max Price:</span>
          <select value={filterPriceMax} onChange={e => setFilterPriceMax(Number(e.target.value))} className="text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-orange-500 bg-white">
            <option value={100}>All</option>
            <option value={5}>Under $5</option>
            <option value={10}>Under $10</option>
            <option value={15}>Under $15</option>
            <option value={20}>Under $20</option>
            <option value={25}>Under $25</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">Min Rating:</span>
          <select value={filterRating} onChange={e => setFilterRating(Number(e.target.value))} className="text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-orange-500 bg-white">
            <option value={0}>Any</option>
            <option value={3}>3+ ★</option>
            <option value={4}>4+ ★</option>
            <option value={4.5}>4.5+ ★</option>
          </select>
        </div>
        <button onClick={reset} className="text-sm text-orange-500 bg-transparent border-none cursor-pointer hover:underline ml-auto">
          <i className="fas fa-undo mr-1" /> Reset
        </button>
      </div>
    </div>
  )
}
