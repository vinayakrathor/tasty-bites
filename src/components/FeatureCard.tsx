import type { ReactNode } from 'react'

export default function FeatureCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-orange-500">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mt-auto">{description}</p>
    </div>
  )
}
