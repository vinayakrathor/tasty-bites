export default function CategoryCard({ icon, name, count, onClick }: { icon: string; name: string; count: number; onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-white border border-gray-100 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group h-full">
      <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-xs text-gray-500">{count} item{count !== 1 ? 's' : ''}</p>
    </div>
  )
}
