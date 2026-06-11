import { useApp } from '../AppContext'

const quickLinks = [
  { label: 'Home', page: 'home' as const },
  { label: 'About Us', page: 'home' as const, section: '#about' },
  { label: 'Menu', page: 'menu' as const },
  { label: 'Popular', page: 'home' as const, section: '#popular' },
  { label: 'Contact', page: 'home' as const, section: '#contact' },
]

const supportLinks = [
  { label: 'FAQ', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Help Center', href: '#' },
]

const socials = ['facebook-f', 'instagram', 'twitter', 'youtube']

export default function Footer() {
  const { page, setPage, handleSmoothScroll } = useApp()

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-12">
          <div>
            <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage('home') }} className="font-['Pacifico',cursive] text-3xl text-white no-underline block mb-4 bg-transparent border-none cursor-pointer">🍔 Tasty<span className="text-orange-500">Bites</span></button>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">Delicious food delivered fast to your doorstep. Order now and taste the difference!</p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white no-underline transition-colors duration-300 hover:bg-orange-500"><i className={`fab fa-${s}`} /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="list-none">
              {quickLinks.map(l => (
                <li key={l.label} className="mb-3">
                  {l.section ? (
                    page === 'home' ? (
                      <a href={l.section} onClick={e => handleSmoothScroll(e, l.section)} className="text-gray-400 text-sm no-underline transition-colors duration-300 hover:text-orange-500 cursor-pointer">{l.label}</a>
                    ) : (
                      <button onClick={() => { setPage('home'); setTimeout(() => { const t = document.querySelector(l.section!); if (t) t.scrollIntoView({ behavior: 'smooth' }) }, 50) }} className="text-gray-400 text-sm no-underline transition-colors duration-300 hover:text-orange-500 bg-transparent border-none cursor-pointer">{l.label}</button>
                    )
                  ) : (
                    <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setPage(l.page) }} className="text-gray-400 text-sm no-underline transition-colors duration-300 hover:text-orange-500 bg-transparent border-none cursor-pointer">{l.label}</button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-5">Support</h4>
            <ul className="list-none">
              {supportLinks.map(l => (
                <li key={l.label} className="mb-3">
                  <a href={l.href} className="text-gray-400 text-sm no-underline transition-colors duration-300 hover:text-orange-500">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact</h4>
            <p className="text-gray-400 text-sm mb-4"><i className="fas fa-map-marker-alt text-orange-500 w-5 mr-2" /> 123 Food Street, NY</p>
            <p className="text-gray-400 text-sm mb-4"><i className="fas fa-phone text-orange-500 w-5 mr-2" /> +1 (555) 123-4567</p>
            <p className="text-gray-400 text-sm mb-4"><i className="fas fa-envelope text-orange-500 w-5 mr-2" /> hello@tastybites.com</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">&copy; 2024 Tasty Bites. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
