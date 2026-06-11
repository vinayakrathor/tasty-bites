import type { ReactNode } from 'react'

export default function ContactInfoCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 text-lg shrink-0">{icon}</div>
      <div>
        <h4 className="text-sm font-semibold text-gray-800">{label}</h4>
        <p className="text-sm text-gray-500">{value}</p>
      </div>
    </div>
  )
}
