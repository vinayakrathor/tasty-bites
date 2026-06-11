export default function EmptyState({ icon, title, description, actionLabel, onAction }: { icon: string; title: string; description: string; actionLabel?: string; onAction?: () => void }) {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-lg mx-auto px-5 text-center">
        <div className="text-8xl mb-6">{icon}</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-500 mb-8">{description}</p>
        {actionLabel && onAction && (
          <button onClick={onAction} className="inline-flex items-center gap-2 px-9 py-4 bg-orange-500 text-white text-base font-semibold rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5">
            {actionLabel}
          </button>
        )}
      </div>
    </section>
  )
}
