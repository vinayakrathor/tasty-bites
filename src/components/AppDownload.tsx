export default function AppDownload() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <span className="block text-sm font-semibold text-orange-500 uppercase tracking-widest mb-3">Download App</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-5">Get Our Mobile App</h2>
          <p className="text-gray-500 mb-5">Order food faster with our mobile app. Available on iOS and Android.</p>
          <ul className="mb-8 list-none">
            {['Easy ordering', 'Real-time tracking', 'Exclusive app discounts'].map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 mb-3"><i className="fas fa-check text-orange-500" /> {item}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-xl no-underline transition-colors duration-300 hover:bg-orange-500">
              <i className="fab fa-apple text-3xl" />
              <span><small className="block text-xs opacity-80">Download on</small><strong className="text-base">App Store</strong></span>
            </a>
            <a href="#" className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-xl no-underline transition-colors duration-300 hover:bg-orange-500">
              <i className="fab fa-google-play text-3xl" />
              <span><small className="block text-xs opacity-80">Get it on</small><strong className="text-base">Google Play</strong></span>
            </a>
          </div>
        </div>
        <div className="order-first md:order-last">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Mobile App" className="rounded-2xl shadow-xl w-full" />
        </div>
      </div>
    </section>
  )
}
