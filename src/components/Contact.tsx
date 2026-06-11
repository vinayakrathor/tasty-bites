import { useState } from 'react'
import { useApp } from '../AppContext'
import { validateForm, validateField, isFormValid, emailPattern, type ValidationErrors } from '../utils/validation'
import SectionHeader from './SectionHeader'
import ContactInfoCard from './ContactInfoCard'

const rules = {
  name: { required: true, minLength: 2, maxLength: 50 },
  email: { required: true, pattern: emailPattern, patternMessage: 'Enter a valid email address' },
  subject: { maxLength: 100 },
  message: { required: true, minLength: 10, maxLength: 1000 },
}

function Field({ error, children }: { error: string | null; children: React.ReactNode }) {
  return (
    <div>
      {children}
      {error && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><i className="fas fa-exclamation-circle" />{error}</p>}
    </div>
  )
}

const infoItems = [
  { icon: <i className="fas fa-map-marker-alt" />, label: 'Address', value: '123 Food Street, New York, NY 10001' },
  { icon: <i className="fas fa-phone" />, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: <i className="fas fa-envelope" />, label: 'Email', value: 'hello@tastybites.com' },
  { icon: <i className="fas fa-clock" />, label: 'Hours', value: 'Mon - Sun: 10AM - 11PM' },
]

export default function Contact() {
  const { showToast } = useApp()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<Set<string>>(new Set())
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = new Set(Object.keys(rules))
    setTouched(allTouched)
    const errs = validateForm(form, rules)
    setErrors(errs)
    if (!isFormValid(errs)) return
    setSent(true)
    showToast('Message sent successfully!')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTouched(new Set())
    setErrors({})
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
    `w-full px-5 py-4 border rounded-xl text-sm outline-none transition-colors duration-300 focus:border-orange-500 ${errors[field] && touched.has(field) ? 'border-red-400 bg-red-50' : 'border-gray-200'}`

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeader tag="Get In Touch" title="Contact Us" />
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div className="space-y-4">
            {infoItems.map(item => <ContactInfoCard key={item.label} icon={item.icon} label={item.label} value={item.value} />)}
          </div>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field error={touched.has('name') ? errors.name : null}>
                <input type="text" placeholder="Your Name *" value={form.name} onChange={e => update('name', e.target.value)} onBlur={() => blur('name')} className={inputClass('name')} />
              </Field>
              <Field error={touched.has('email') ? errors.email : null}>
                <input type="email" placeholder="Your Email *" value={form.email} onChange={e => update('email', e.target.value)} onBlur={() => blur('email')} className={inputClass('email')} />
              </Field>
            </div>
            <Field error={touched.has('subject') ? errors.subject : null}>
              <input type="text" placeholder="Subject" value={form.subject} onChange={e => update('subject', e.target.value)} onBlur={() => blur('subject')} className={inputClass('subject')} />
            </Field>
            <Field error={touched.has('message') ? errors.message : null}>
              <textarea placeholder="Your Message *" rows={5} value={form.message} onChange={e => update('message', e.target.value)} onBlur={() => blur('message')} className={`${inputClass('message')} resize-y`} />
            </Field>
            {sent && <p className="text-green-600 text-sm flex items-center gap-1"><i className="fas fa-check-circle" /> Message sent! We'll get back to you soon.</p>}
            <button type="submit" className="inline-flex items-center gap-2 px-9 py-4 bg-orange-500 text-white text-base font-semibold rounded-full border-none cursor-pointer transition-all duration-300 hover:bg-orange-600 hover:-translate-y-0.5 self-start">
              <i className="fas fa-paper-plane" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
