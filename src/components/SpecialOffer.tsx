import { useApp } from '../AppContext'

export default function SpecialOffer() {
  const { setPage } = useApp()

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-white text-sm mb-4">🔥 Limited Time Offer</span>
          <h2 className="text-4xl text-white font-bold mb-4">Get 30% Off on Your First Order!</h2>
          <p className="text-lg text-white/90 mb-6">Use code <strong className="bg-white text-orange-500 px-3 py-1 rounded">WELCOME30</strong> at checkout</p>
          <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage('order') }} className="inline-flex items-center gap-2 px-9 py-4 bg-white text-orange-500 text-base font-semibold rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-gray-100">
            <i className="fas fa-shopping-bag" /> Order Now
          </button>
        </div>
        <div className="order-first md:order-last">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Special Offer" className="rounded-2xl shadow-xl w-full" />
        </div>
      </div>
    </section>
  )
}
