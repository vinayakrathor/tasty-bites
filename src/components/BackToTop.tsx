import { useApp } from '../AppContext'

export default function BackToTop() {
  const { showBackToTop } = useApp()

  return (
    <button className={`fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white border-none rounded-full text-lg cursor-pointer shadow-md z-50 transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 ${showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <i className="fas fa-arrow-up" />
    </button>
  )
}
