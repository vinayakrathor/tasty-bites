import { useApp } from '../AppContext'

const stats = [
  { num: '500+', text: 'Menu Items' },
  { num: '20K+', text: 'Happy Customers' },
  { num: '4.9', text: 'Star Rating' },
]

export default function Hero() {
  const { setPage } = useApp()

  return (
    <section id="home" className="pt-36 pb-20 bg-gradient-to-br from-orange-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block bg-white px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-md">🔥 #1 Food Delivery</span>
          <h1 className="text-5xl font-bold leading-tight text-gray-800 mb-5">
            Delicious Food
            <span className="text-orange-500 block">Delivered Fast</span>
          </h1>
          <p className="text-base text-gray-500 mb-8 max-w-md">Order your favorite meals from the best restaurants in town. Fresh ingredients, fast delivery, and amazing taste guaranteed!</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage('menu') }} className="inline-flex items-center gap-2 px-9 py-4 bg-orange-500 text-white text-base font-semibold rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5">
              <i className="fas fa-utensils" /> View Menu
            </button>
            <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage('order') }} className="inline-flex items-center gap-2 px-9 py-4 text-base font-semibold rounded-full border-2 border-gray-800 text-gray-800 bg-transparent cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:text-white">
              <i className="fas fa-fire" /> Order Now
            </button>
          </div>
          <div className="flex gap-10">
            {stats.map(s => (
              <div key={s.text} className="text-center">
                <span className="block text-3xl font-bold text-orange-500">{s.num}</span>
                <span className="text-sm text-gray-500">{s.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-first md:order-last">
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Delicious Burger" className="w-full max-w-[500px] rounded-full shadow-xl mx-auto" />
          <div className="absolute top-12 left-1/2 -translate-x-1/2 md:left-[-30px] md:translate-x-0 bg-white p-4 rounded-xl shadow-md flex items-center gap-3 animate-bounce">
            <span className="text-2xl">🎉</span>
            <div>
              <strong className="block text-orange-500 text-base">20% OFF</strong>
              <span className="text-xs text-gray-500">First Order</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
