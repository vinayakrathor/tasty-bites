import { useApp } from '../AppContext'

const highlights = ['Fresh Ingredients Daily', 'Expert Chefs', 'Hygienic Kitchen', 'Fast & Safe Delivery']

export default function About() {
  const { setPage } = useApp()

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Restaurant" className="w-4/5 rounded-2xl shadow-xl" />
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chef Cooking" className="absolute -bottom-8 right-0 w-1/2 rounded-xl shadow-xl border-4 border-white" />
          <div className="absolute top-8 right-12 bg-orange-500 text-white p-6 rounded-xl text-center">
            <span className="block text-4xl font-bold">15+</span>
            <span className="text-xs">Years Experience</span>
          </div>
        </div>
        <div>
          <span className="block text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">About Us</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-5">We Serve Happiness on a Plate</h2>
          <p className="text-gray-500 mb-4">Welcome to Tasty Bites, where every meal is crafted with love and passion. Since 2009, we've been serving the most delicious food in town, made from the freshest ingredients sourced locally.</p>
          <p className="text-gray-500 mb-4">Our expert chefs combine traditional recipes with modern techniques to create dishes that delight your taste buds and warm your heart.</p>
          <ul className="my-6 list-none">
            {highlights.map(item => (
              <li key={item} className="flex items-center gap-2.5 mb-3 font-medium"><i className="fas fa-check-circle text-orange-500" /> {item}</li>
            ))}
          </ul>
          <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage('menu') }} className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5">
            <i className="fas fa-utensils" /> Explore Menu
          </button>
        </div>
      </div>
    </section>
  )
}
