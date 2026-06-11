import { useState } from 'react'
import { useApp } from '../AppContext'
import { validateForm, validateField, isFormValid, emailPattern, phonePattern, zipPattern, type ValidationErrors } from '../utils/validation'

const rules = {
  name: { required: true, minLength: 2, maxLength: 50 },
  email: { required: true, pattern: emailPattern, patternMessage: 'Enter a valid email address' },
  phone: { required: true, pattern: phonePattern, patternMessage: 'Enter a valid phone number' },
  address: { required: true, minLength: 5, maxLength: 200 },
  city: { required: true, minLength: 2, maxLength: 50 },
  zip: { required: true, pattern: zipPattern, patternMessage: 'Enter a valid ZIP code (e.g. 12345)' },
  notes: {},
}

function Field({ error, children }: { error: string | null; children: React.ReactNode }) {
  return (
    <div>
      {children}
      {error && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{error}</p>}
    </div>
  )
}

export default function OrderPage() {
  const { cartItems, totalItems, totalPrice, clearCart, setPage } = useApp()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', zip: '', notes: '' })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<Set<string>>(new Set())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = new Set(Object.keys(rules))
    setTouched(allTouched)
    const errs = validateForm(form, rules)
    setErrors(errs)
    if (!isFormValid(errs)) {
      const first = document.querySelector<HTMLElement>('[data-field-error]')
      first?.focus()
      return
    }
    setSubmitted(true)
    clearCart()
  }

  const update = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (touched.has(field)) {
      const rule = rules[field as keyof typeof rules]
      if (rule) setErrors(prev => ({ ...prev, [field]: validateField(value, rule) }))
    }
  }

  const blur = (field: string) => {
    setTouched(prev => new Set(prev).add(field))
    const rule = rules[field as keyof typeof rules]
    if (rule) setErrors(prev => ({ ...prev, [field]: validateField(form[field as keyof typeof form], rule) }))
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 border rounded-xl text-sm outline-none transition-colors duration-300 focus:border-orange-500 ${errors[field] && touched.has(field) ? 'border-red-400 bg-red-50' : 'border-gray-200'}`

  if (submitted) {
    return (
      <section className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-lg mx-auto px-5 text-center">
          <div className="text-8xl mb-6">✅</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Placed!</h1>
          <p className="text-gray-500 mb-2">Thank you, {form.name || 'Guest'}! Your order is being prepared.</p>
          <p className="text-gray-500 mb-8">We'll send a confirmation to {form.email || 'your email'}.</p>
          <button onClick={() => setPage('home')} className="inline-flex items-center gap-2 px-9 py-4 bg-orange-500 text-white text-base font-semibold rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5">
            Back to Home
          </button>
        </div>
      </section>
    )
  }

  if (cartItems.length === 0) {
    return (
      <section className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-lg mx-auto px-5 text-center">
          <div className="text-8xl mb-8">🛒</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nothing to Order</h1>
          <p className="text-gray-500 mb-8">Add some items to your cart first.</p>
          <button onClick={() => { setPage('menu') }} className="inline-flex items-center gap-2 px-9 py-4 bg-orange-500 text-white text-base font-semibold rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5">
            Browse Menu
          </button>
        </div>
      </section>
    )
  }

  const tax = totalPrice * 0.08
  const grandTotal = totalPrice + tax

  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Checkout</h1>
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          <form onSubmit={handleSubmit} noValidate className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Delivery Details</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field error={touched.has('name') ? errors.name : null}>
                <input type="text" placeholder="Full Name" value={form.name} onChange={e => update('name', e.target.value)} onBlur={() => blur('name')} className={inputClass('name')} data-field-error />
              </Field>
              <Field error={touched.has('email') ? errors.email : null}>
                <input type="email" placeholder="Email Address" value={form.email} onChange={e => update('email', e.target.value)} onBlur={() => blur('email')} className={inputClass('email')} />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field error={touched.has('phone') ? errors.phone : null}>
                <input type="tel" placeholder="Phone Number" value={form.phone} onChange={e => update('phone', e.target.value)} onBlur={() => blur('phone')} className={inputClass('phone')} />
              </Field>
              <Field error={touched.has('city') ? errors.city : null}>
                <input type="text" placeholder="City" value={form.city} onChange={e => update('city', e.target.value)} onBlur={() => blur('city')} className={inputClass('city')} />
              </Field>
            </div>
            <div className="mb-4">
              <Field error={touched.has('address') ? errors.address : null}>
                <input type="text" placeholder="Street Address" value={form.address} onChange={e => update('address', e.target.value)} onBlur={() => blur('address')} className={inputClass('address')} />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field error={touched.has('zip') ? errors.zip : null}>
                <input type="text" placeholder="ZIP Code" value={form.zip} onChange={e => update('zip', e.target.value)} onBlur={() => blur('zip')} className={inputClass('zip')} />
              </Field>
            </div>
            <textarea placeholder="Order Notes (optional)" rows={3} value={form.notes} onChange={e => update('notes', e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-orange-500 transition-colors resize-y mb-6" />

            <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>
            <div className="flex items-center gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
              <input type="radio" id="cod" name="payment" defaultChecked className="accent-orange-500" />
              <label htmlFor="cod" className="text-sm font-medium cursor-pointer">Cash on Delivery</label>
            </div>

            <button type="submit" className="w-full py-4 bg-orange-500 text-white text-base font-semibold rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-orange-600">
              Place Order — ${grandTotal.toFixed(2)}
            </button>
          </form>

          <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-28">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary ({totalItems} items)</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex items-center gap-3">
                  <img src={item.product.img} alt={item.product.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.product.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-semibold shrink-0">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <hr className="border-gray-200 mb-3" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Subtotal</span><span className="font-semibold">${totalPrice.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Delivery</span><span className="font-semibold text-green-600">Free</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Tax (8%)</span><span className="font-semibold">${tax.toFixed(2)}</span></div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-base"><span className="font-bold">Total</span><span className="font-bold text-orange-500">${grandTotal.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
