export default function SearchBar({ value, onChange, placeholder = 'Search...' }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="relative">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} className="w-full pl-11 pr-5 py-3 bg-white border border-gray-200 rounded-full text-sm outline-none focus:border-orange-500 transition-colors" />
        {value && <button onClick={() => onChange('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 bg-transparent border-none cursor-pointer hover:text-gray-600"><i className="fas fa-times" /></button>}
      </div>
    </div>
  )
}
