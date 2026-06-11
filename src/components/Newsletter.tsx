import { useState } from 'react'
import { useApp } from '../AppContext'
import { validateField, emailPattern } from '../utils/validation'

export default function Newsletter() {
  const { showToast } = useApp()
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const err = validateField(email, { required: true, pattern: emailPattern, patternMessage: 'Enter a valid email address' })
    if (err) { setError(err); return }
    setError(null)
    setSubscribed(true)
    showToast('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-lg mx-auto px-5 text-center">
        <h2 className="text-3xl text-white font-bold mb-3">Subscribe for Updates</h2>
        <p className="text-white/80 mb-6">Get the latest offers and updates delivered to your inbox.</p>
        {subscribed ? (
          <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
            <i className="fas fa-check-circle" /> You're subscribed! Check your inbox.
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-2.5" onSubmit={handleSubmit} noValidate>
            <div className="flex-1">
              <input type="email" placeholder="Enter your email" value={email} onChange={e => { setEmail(e.target.value); if (error) setError(null) }} className={`w-full px-6 py-4 rounded-full text-sm outline-none ${error ? 'ring-2 ring-red-400' : 'border-none'}`} />
              {error && <p className="text-red-400 text-xs mt-1 text-left flex items-center gap-1"><i className="fas fa-exclamation-circle" />{error}</p>}
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full border-none cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-orange-600">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}
