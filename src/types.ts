export interface Product {
  id: number
  name: string
  desc: string
  price: number
  rating: number
  reviews: number
  img: string
  badge: string | null
  badgeColor: string
  categoryId: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Category {
  id: number
  icon: string
  name: string
  count: string
}

export interface Review {
  id: number
  rating: number
  text: string
  name: string
  role: string
  img: string
}

export type Page = 'home' | 'menu' | 'cart' | 'order' | 'favorites' | 'about'

export interface AppState {
  page: Page
  setPage: (p: Page) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  cartItems: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, qty: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  wishlist: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: number) => void
  showToast: (msg: string) => void
  activeSection: string
  scrolled: boolean
  headerRef: React.RefObject<HTMLElement | null>
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, target: string) => void
  showBackToTop: boolean
  toast: { message: string; visible: boolean }
  filterCategory: number | null
  setFilterCategory: (id: number | null) => void
  filterPriceMax: number
  setFilterPriceMax: (p: number) => void
  filterRating: number
  setFilterRating: (r: number) => void
  searchQuery: string
  setSearchQuery: (q: string) => void
  popularCategory: number | null
  setPopularCategory: (id: number | null) => void
}

export const categories: Category[] = [
  { id: 1, icon: '🍔', name: 'Burgers', count: '15 Items' },
  { id: 2, icon: '🍕', name: 'Pizza', count: '20 Items' },
  { id: 3, icon: '🍜', name: 'Noodles', count: '12 Items' },
  { id: 4, icon: '🍣', name: 'Sushi', count: '18 Items' },
  { id: 5, icon: '🍗', name: 'Chicken', count: '14 Items' },
  { id: 6, icon: '🥗', name: 'Salads', count: '10 Items' },
  { id: 7, icon: '🍰', name: 'Desserts', count: '16 Items' },
  { id: 8, icon: '🥤', name: 'Drinks', count: '22 Items' },
]

export const products: Product[] = [
  { id: 1, name: 'Classic Cheese Burger', desc: 'Beef patty, cheese, lettuce, tomato, special sauce', price: 12.99, rating: 4.9, reviews: 120, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: 'Bestseller', badgeColor: 'bg-orange-500', categoryId: 1 },
  { id: 2, name: 'Pepperoni Pizza', desc: 'Pepperoni, mozzarella, tomato sauce, herbs', price: 15.99, rating: 4.8, reviews: 95, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: 'Hot', badgeColor: 'bg-red-500', categoryId: 2 },
  { id: 3, name: 'Premium Sushi Set', desc: 'Salmon, tuna, shrimp, avocado, rice', price: 24.99, rating: 4.9, reviews: 78, img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: 'New', badgeColor: 'bg-green-600', categoryId: 4 },
  { id: 4, name: 'Garden Fresh Salad', desc: 'Mixed greens, cherry tomatoes, cucumber, feta', price: 9.99, rating: 4.7, reviews: 65, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: null, badgeColor: '', categoryId: 6 },
  { id: 5, name: 'Crispy Fried Chicken', desc: '6 pieces, coleslaw, fries, dipping sauce', price: 14.99, rating: 4.8, reviews: 142, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: 'Bestseller', badgeColor: 'bg-orange-500', categoryId: 5 },
  { id: 6, name: 'Creamy Pasta', desc: 'Fettuccine, cream sauce, parmesan, herbs', price: 13.99, rating: 4.7, reviews: 88, img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: null, badgeColor: '', categoryId: 3 },
  { id: 7, name: 'Chocolate Lava Cake', desc: 'Warm chocolate cake with molten center', price: 8.99, rating: 4.9, reviews: 156, img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: 'Hot', badgeColor: 'bg-red-500', categoryId: 7 },
  { id: 8, name: 'Berry Blast Smoothie', desc: 'Mixed berries, yogurt, honey, ice', price: 6.99, rating: 4.6, reviews: 72, img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: 'New', badgeColor: 'bg-green-600', categoryId: 8 },
  { id: 9, name: 'Double Bacon Burger', desc: 'Double beef, bacon, cheddar, caramelized onions', price: 16.99, rating: 4.8, reviews: 98, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: null, badgeColor: '', categoryId: 1 },
  { id: 10, name: 'Margherita Pizza', desc: 'Fresh mozzarella, basil, tomato sauce, olive oil', price: 13.99, rating: 4.7, reviews: 110, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: null, badgeColor: '', categoryId: 2 },
  { id: 11, name: 'Spicy Ramen', desc: 'Tonkotsu broth, chashu pork, soft egg, nori', price: 14.99, rating: 4.8, reviews: 134, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: 'Hot', badgeColor: 'bg-red-500', categoryId: 3 },
  { id: 12, name: 'California Roll', desc: 'Crab, avocado, cucumber, sesame seeds', price: 11.99, rating: 4.6, reviews: 89, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: null, badgeColor: '', categoryId: 4 },
  { id: 13, name: 'Grilled Chicken Wrap', desc: 'Grilled chicken, lettuce, tomato, ranch dressing', price: 11.49, rating: 4.5, reviews: 76, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: null, badgeColor: '', categoryId: 5 },
  { id: 14, name: 'Caesar Salad', desc: 'Romaine, parmesan, croutons, Caesar dressing', price: 8.99, rating: 4.4, reviews: 62, img: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: null, badgeColor: '', categoryId: 6 },
  { id: 15, name: 'Tiramisu', desc: 'Coffee-soaked ladyfingers, mascarpone, cocoa', price: 7.99, rating: 4.9, reviews: 201, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: 'Bestseller', badgeColor: 'bg-orange-500', categoryId: 7 },
  { id: 16, name: 'Fresh Orange Juice', desc: 'Freshly squeezed oranges, no added sugar', price: 4.99, rating: 4.3, reviews: 45, img: 'https://images.unsplash.com/photo-1622597467836-f3e66d5b2ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', badge: null, badgeColor: '', categoryId: 8 },
]

export const reviewsData: Review[] = [
  { id: 1, rating: 5, text: '"Best food delivery service! The burger was juicy and arrived hot. Will definitely order again!"', name: 'John Smith', role: 'Regular Customer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  { id: 2, rating: 5, text: '"The sushi was incredibly fresh and the delivery was super fast. Love this place!"', name: 'Sarah Johnson', role: 'Food Blogger', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
  { id: 3, rating: 4.5, text: '"Great variety of options and the pizza is absolutely delicious. Highly recommend!"', name: 'Emily Davis', role: 'Verified Buyer', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
]
