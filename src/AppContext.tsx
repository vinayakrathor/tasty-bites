import { createContext, useContext, useState, useRef, useCallback, useEffect, useMemo, type ReactNode } from 'react'
import type { AppState, CartItem, Product, Page } from './types'

const AppCtx = createContext<AppState | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false })
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [filterCategory, setFilterCategory] = useState<number | null>(null)
  const [filterPriceMax, setFilterPriceMax] = useState(100)
  const [filterRating, setFilterRating] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [popularCategory, setPopularCategory] = useState<number | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const headerRef = useRef<HTMLElement>(null)

  const totalItems = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])
  const totalPrice = useMemo(() => cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0), [cartItems])

  const showToast = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast({ message, visible: true })
    toastTimer.current = setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 3000)
  }, [])

  const addToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
    showToast(`${product.name} added to cart!`)
  }, [showToast])

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId))
    showToast('Item removed from cart')
  }, [showToast])

  const updateQuantity = useCallback((productId: number, qty: number) => {
    if (qty <= 0) {
      setCartItems(prev => prev.filter(item => item.product.id !== productId))
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setCartItems([])
    showToast('Cart cleared')
  }, [showToast])

  const addToWishlist = useCallback((product: Product) => {
    setWishlist(prev => {
      if (prev.some(p => p.id === product.id)) return prev
      showToast('Added to favorites!')
      return [...prev, product]
    })
  }, [showToast])

  const removeFromWishlist = useCallback((productId: number) => {
    setWishlist(prev => {
      showToast('Removed from favorites')
      return prev.filter(p => p.id !== productId)
    })
  }, [showToast])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    if (targetId === '#') return
    setMenuOpen(false)
    setPage('home')
    setTimeout(() => {
      const target = document.querySelector(targetId)
      if (target) {
        const headerHeight = headerRef.current?.offsetHeight || 70
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - headerHeight, behavior: 'smooth' })
      }
    }, 50)
  }

  useEffect(() => {
    if (page !== 'home') return
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 100)
      setShowBackToTop(scrollY > 500)
      const headerHeight = headerRef.current?.offsetHeight || 70
      const scrollPos = scrollY + headerHeight + 50
      document.querySelectorAll('section[id]').forEach(section => {
        const el = section as HTMLElement
        const top = el.offsetTop
        const height = el.offsetHeight
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(el.id)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  useEffect(() => {
    if (page !== 'home') return
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1'
          ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const els = document.querySelectorAll('.animate-on-scroll')
    els.forEach(el => {
      (el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(30px)'
      ;(el as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [page])

  return (
    <AppCtx.Provider value={{
      page, setPage, menuOpen, setMenuOpen,
      cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice,
      wishlist, addToWishlist, removeFromWishlist,
      showToast, activeSection, scrolled, headerRef, handleSmoothScroll,
      showBackToTop, toast,
      filterCategory, setFilterCategory,
      filterPriceMax, setFilterPriceMax,
      filterRating, setFilterRating,
      searchQuery, setSearchQuery,
      popularCategory, setPopularCategory,
    }}>
      {children}
    </AppCtx.Provider>
  )
}

export function useApp(): AppState {
  const ctx = useContext(AppCtx)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
