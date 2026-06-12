import { useApp } from '../AppContext'
import QuantitySelector from './QuantitySelector'
import CartSummary from './CartSummary'
import EmptyState from './EmptyState'

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice, setPage } = useApp()

  if (cartItems.length === 0) {
    return (
      <EmptyState
        icon="🛒"
        title="Your Cart is Empty"
        description="Looks like you haven't added anything yet."
        actionLabel="Browse Menu"
        onAction={() => setPage('menu')}
      />
    )
  }

  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Your Cart ({totalItems} items)</h1>
          <button onClick={() => setPage('menu')} className="text-orange-500 text-sm font-semibold bg-transparent border-none cursor-pointer hover:underline">
            Continue Shopping
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-6 lg:gap-8">
          <div className="flex flex-col gap-4">
            {cartItems.map(item => (
              <div key={item.product.id} className="bg-white rounded-xl shadow-md p-4 flex gap-4">
                <img src={item.product.img} alt={item.product.name} className="w-24 h-24 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-semibold text-gray-800">{item.product.name}</h3>
                    <span className="text-lg font-bold text-orange-500 shrink-0 ml-2">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="text-yellow-400 text-xs mb-2">{'★'.repeat(Math.round(item.product.rating))}</div>
                  <div className="flex items-center justify-between">
                    <QuantitySelector
                      quantity={item.quantity}
                      onDecrease={() => updateQuantity(item.product.id, item.quantity - 1)}
                      onIncrease={() => updateQuantity(item.product.id, item.quantity + 1)}
                    />
                    <button className="text-xs text-red-500 bg-transparent border-none cursor-pointer hover:underline" onClick={() => removeFromCart(item.product.id)}>
                      <i className="fas fa-trash-alt mr-1" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <CartSummary
            totalItems={totalItems}
            totalPrice={totalPrice}
            actionLabel="Proceed to Checkout"
            onAction={() => setPage('order')}
          />
        </div>
      </div>
    </section>
  )
}
