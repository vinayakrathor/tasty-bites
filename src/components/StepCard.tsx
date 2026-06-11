import type { ReactNode } from 'react'

export default function StepCard({ index, icon, title, description }: { index: number; icon: ReactNode; title: string; description: string }) {
  return (
    <div className="text-center h-full flex flex-col">
      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl text-white relative">
        {icon}
        <span className="absolute -top-1 -right-1 w-6 h-6 bg-gray-800 text-white text-xs font-bold rounded-full flex items-center justify-center">{index}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mt-auto">{description}</p>
    </div>
  )
}
