export interface FieldRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  patternMessage?: string
  validate?: (value: string) => string | null
}

export interface ValidationErrors {
  [field: string]: string | null
}

export function validateField(value: string, rules: FieldRule): string | null {
  if (rules.required && !value.trim()) return 'This field is required'
  if (rules.minLength && value.trim().length < rules.minLength) return `Minimum ${rules.minLength} characters`
  if (rules.maxLength && value.trim().length > rules.maxLength) return `Maximum ${rules.maxLength} characters`
  if (rules.pattern && !rules.pattern.test(value.trim())) return rules.patternMessage || 'Invalid format'
  if (rules.validate) return rules.validate(value.trim())
  return null
}

export function validateForm<T extends Record<string, string>>(
  values: T,
  rules: Record<keyof T, FieldRule>
): ValidationErrors {
  const errors: ValidationErrors = {}
  for (const key of Object.keys(rules) as (keyof T)[]) {
    const error = validateField(values[key], rules[key])
    if (error) errors[key as string] = error
  }
  return errors
}

export function isFormValid(errors: ValidationErrors): boolean {
  return Object.values(errors).every(e => e === null || e === undefined)
}

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const phonePattern = /^[\d\s\-+()]{10,15}$/
export const zipPattern = /^\d{5}(-\d{4})?$/
