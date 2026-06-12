import SectionHeader from './SectionHeader'
import FeatureCard from './FeatureCard'
import ReviewCard from './ReviewCard'
import { reviewsData } from '../types'
import type { Review } from '../types'

const milestones = [
  { year: '2019', event: 'Founded in a small kitchen with big dreams' },
  { year: '2020', event: 'Launched our first online ordering platform' },
  { year: '2021', event: 'Expanded to 5 locations across the city' },
  { year: '2022', event: 'Served our 100,000th happy customer' },
  { year: '2023', event: 'Introduced AI-powered personalized menu' },
  { year: '2024', event: 'Became the #1 rated food delivery service' },
]

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeader tag="About Us" title="Our Story" description="Discover how Tasty Bites went from a small dream to your favorite food delivery service." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600" alt="Our story" className="w-full rounded-2xl shadow-lg" />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">Tasty Bites was born in 2019 from a simple idea: great food should be accessible to everyone, anywhere. What started as a one-person operation in a tiny kitchen has grown into a network of hundreds of partner restaurants and delivery heroes.</p>
              <p className="text-gray-600 leading-relaxed mb-6">We believe that food brings people together. Every meal we deliver is a celebration of flavors, crafted with care and delivered with a smile. Our commitment to quality, speed, and customer satisfaction sets us apart.</p>
              <p className="text-gray-600 leading-relaxed">Today, we serve thousands of happy customers every day, and we're just getting started. Join us on our journey to make every bite a tasty one!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeader tag="Timeline" title="Our Journey" description="Key milestones that shaped Tasty Bites" />
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 pb-8 relative last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 bg-orange-500 rounded-full z-10 shrink-0" />
                  {i < milestones.length - 1 && <div className="w-0.5 bg-orange-200 flex-1 mt-1" />}
                </div>
                <div className="pb-4">
                  <span className="text-sm font-bold text-orange-500">{m.year}</span>
                  <p className="text-gray-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeader tag="Values" title="Why Choose Us" description="What makes Tasty Bites special" />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            <FeatureCard icon={<i className="fas fa-leaf" />} title="Fresh Ingredients" description="We source only the freshest ingredients from local farms and trusted suppliers." />
            <FeatureCard icon={<i className="fas fa-bolt" />} title="Fast Delivery" description="Our optimized delivery network ensures your food arrives hot and fresh every time." />
            <FeatureCard icon={<i className="fas fa-smile" />} title="Happy Service" description="Customer satisfaction is our top priority. We're here to make you smile." />
            <FeatureCard icon={<i className="fas fa-shield-alt" />} title="Quality Guarantee" description="Not happy with your order? We'll make it right, no questions asked." />
            <FeatureCard icon={<i className="fas fa-hand-holding-heart" />} title="Community Focused" description="We support local restaurants and give back to the communities we serve." />
            <FeatureCard icon={<i className="fas fa-mobile-alt" />} title="Easy Ordering" description="Order in seconds with our intuitive app and website interface." />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHeader tag="Testimonials" title="What Our Customers Say" description="Hear from the people who love Tasty Bites" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsData.map((r: Review, i: number) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>
      </section>
    </>
  )
}
