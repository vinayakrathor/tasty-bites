import { reviewsData } from '../types'
import SectionHeader from './SectionHeader'
import ReviewCard from './ReviewCard'

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeader tag="Testimonials" title="What Customers Say" description="Real reviews from our happy customers" />
        <div className="grid md:grid-cols-3 gap-8">
          {reviewsData.map(r => (
            <div key={r.id} className="animate-on-scroll h-full"><ReviewCard review={r} /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
