import FeatureCard from './FeatureCard'

const features = [
  { icon: <i className="fas fa-rocket" />, title: 'Fast Delivery', description: '30 minutes or free' },
  { icon: <i className="fas fa-leaf" />, title: 'Fresh Food', description: '100% fresh ingredients' },
  { icon: <i className="fas fa-star" />, title: 'Best Quality', description: 'Premium quality meals' },
  { icon: <i className="fas fa-gift" />, title: 'Daily Offers', description: 'Save up to 50%' },
]

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(f => (
          <div key={f.title} className="animate-on-scroll h-full">
            <FeatureCard icon={f.icon} title={f.title} description={f.description} />
          </div>
        ))}
      </div>
    </section>
  )
}
