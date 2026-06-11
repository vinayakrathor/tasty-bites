import { AppProvider, useApp } from './AppContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import MenuCategories from './components/MenuCategories'
import PopularItems from './components/PopularItems'
import SpecialOffer from './components/SpecialOffer'
import HowItWorks from './components/HowItWorks'
import Reviews from './components/Reviews'
import AppDownload from './components/AppDownload'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Toast from './components/Toast'
import CartPage from './components/CartPage'
import MenuPage from './components/MenuPage'
import OrderPage from './components/OrderPage'
import FavoritesPage from './components/FavoritesPage'
import AboutPage from './components/AboutPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <MenuCategories />
      <PopularItems />
      <SpecialOffer />
      <HowItWorks />
      <Reviews />
      <AppDownload />
      <Newsletter />
      <Contact />
    </>
  )
}

function AppContent() {
  const { page } = useApp()

  return (
    <div className="font-['Poppins',sans-serif] text-gray-800 bg-white">
      <Header />
      {page === 'home' && <HomePage />}
      {page === 'menu' && <MenuPage />}
      {page === 'cart' && <CartPage />}
      {page === 'order' && <OrderPage />}
      {page === 'favorites' && <FavoritesPage />}
      {page === 'about' && <AboutPage />}
      <Footer />
      <BackToTop />
      <Toast />
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
