import SectionHeader from './SectionHeader'
import StepCard from './StepCard'

const steps = [
  { icon: <i className="fas fa-utensils" />, title: 'Choose Your Food', description: 'Browse our menu and select your favorite dishes' },
  { icon: <i className="fas fa-credit-card" />, title: 'Easy Payment', description: 'Pay online securely with multiple options' },
  { icon: <i className="fas fa-bicycle" />, title: 'Fast Delivery', description: 'Get your food delivered hot and fresh' },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeader tag="Simple & Easy" title="How It Works" description="Order your food in 3 simple steps" />
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <div key={i} className="animate-on-scroll h-full"><StepCard index={i + 1} icon={s.icon} title={s.title} description={s.description} /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
