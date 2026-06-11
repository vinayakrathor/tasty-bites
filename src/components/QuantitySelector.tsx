export default function QuantitySelector({ quantity, onDecrease, onIncrease }: { quantity: number; onDecrease: () => void; onIncrease: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <button className="w-8 h-8 bg-gray-100 rounded-full text-sm font-semibold border-none cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center" onClick={onDecrease}>−</button>
      <span className="w-8 text-center font-semibold text-sm">{quantity}</span>
      <button className="w-8 h-8 bg-gray-100 rounded-full text-sm font-semibold border-none cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center" onClick={onIncrease}>+</button>
    </div>
  )
}
