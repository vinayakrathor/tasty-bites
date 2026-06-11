export default function CartSummary({ totalItems, totalPrice, actionLabel, onAction, compact }: { totalItems: number; totalPrice: number; actionLabel?: string; onAction?: () => void; compact?: boolean }) {
  const tax = totalPrice * 0.08
  const grandTotal = totalPrice + tax

  return (
    <div className={`bg-white rounded-xl shadow-md p-6 h-fit ${compact ? '' : 'sticky top-28'}`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between"><span className="text-gray-500">Items ({totalItems})</span><span className="font-semibold">${totalPrice.toFixed(2)}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Delivery</span><span className="font-semibold text-green-600">Free</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Tax (8%)</span><span className="font-semibold">${tax.toFixed(2)}</span></div>
        <hr className="border-gray-200" />
        <div className="flex justify-between text-base"><span className="font-bold">Total</span><span className="font-bold text-orange-500">${grandTotal.toFixed(2)}</span></div>
      </div>
      {actionLabel && onAction && (
        <button onClick={onAction} className="w-full mt-6 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-orange-600">
          {actionLabel}
        </button>
      )}
    </div>
  )
}
