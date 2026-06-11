import type { Review } from '../types'
import Rating from './Rating'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
      <div className="flex items-center gap-1 mb-4"><Rating value={review.rating} /></div>
      <p className="text-sm text-gray-600 leading-relaxed italic mb-6 flex-1">"{review.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700">{review.name.charAt(0)}</div>
        <div>
          <h4 className="font-semibold text-gray-800">{review.name}</h4>
          <span className="text-xs text-gray-500">{review.role}</span>
        </div>
      </div>
    </div>
  )
}
