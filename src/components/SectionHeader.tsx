export default function SectionHeader({ tag, title, description }: { tag?: string; title: string; description?: string }) {
  return (
    <div className="text-center mb-12">
      {tag && <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">{tag}</span>}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">{title}</h2>
      {description && <p className="text-base text-gray-500 max-w-lg mx-auto">{description}</p>}
    </div>
  )
}
