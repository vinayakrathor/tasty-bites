import { useApp } from '../AppContext'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#popular', label: 'Popular' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

const pageLinks = [
  { page: 'home' as const, label: 'Home' },
  { page: 'menu' as const, label: 'Menu' },
  { page: 'favorites' as const, label: 'Favorites' },
  { page: 'about' as const, label: 'About' },
  { page: 'cart' as const, label: 'Cart' },
  { page: 'order' as const, label: 'Order Now' },
]

export default function Header() {
  const { page, setPage, menuOpen, setMenuOpen, totalItems, scrolled, headerRef, activeSection, handleSmoothScroll } = useApp()

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <nav className="max-w-6xl mx-auto px-5 flex items-center justify-between py-4">
        <button onClick={() => { setMenuOpen(false); setPage('home') }} className="font-['Pacifico',cursive] text-3xl text-gray-800 bg-transparent border-none cursor-pointer">
          🍔 Tasty<span className="text-orange-500">Bites</span>
        </button>
        <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row fixed md:static top-[70px] left-0 right-0 bg-white md:bg-transparent p-5 md:p-0 gap-0 md:gap-8 shadow-md md:shadow-none list-none m-0`}>
          {page === 'home' ? (
            navLinks.map(link => (
              <li key={link.href} className="py-3 md:py-0 border-b md:border-b-0 border-gray-100">
                <a href={link.href} onClick={e => { handleSmoothScroll(e, link.href); setMenuOpen(false) }}
                  className={`relative text-sm font-medium no-underline py-1.5 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 ${activeSection === link.href.slice(1) ? 'text-orange-500 after:w-full' : 'text-gray-800 after:w-0 hover:after:w-full hover:text-orange-500'}`}>
                  {link.label}
                </a>
              </li>
            ))
          ) : (
            pageLinks.filter(l => l.page !== page).map(link => (
              <li key={link.page} className="py-3 md:py-0 border-b md:border-b-0 border-gray-100">
                <button onClick={() => { setMenuOpen(false); setPage(link.page) }}
                  className="relative text-sm font-medium no-underline py-1.5 text-gray-800 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer">
                  {link.label}
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="flex items-center gap-4 shrink-0">
          <button className="relative w-11 h-11 bg-gray-50 border-none rounded-full text-lg text-gray-800 cursor-pointer transition-colors duration-300 hover:bg-orange-500 hover:text-white" onClick={() => { setMenuOpen(false); setPage('cart') }}>
            <i className="fas fa-shopping-cart" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">{totalItems}</span>
          </button>
          <button onClick={() => { setMenuOpen(false); setPage('order') }} className="hidden md:inline-flex items-center gap-2 px-7 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full no-underline transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5 border-none cursor-pointer">Order Now</button>
          <button className="md:hidden text-2xl text-gray-800 bg-transparent border-none cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </nav>
    </header>
  )
}
