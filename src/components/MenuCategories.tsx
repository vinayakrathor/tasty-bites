import { categories, products } from '../types'
import { useApp } from '../AppContext'
import SectionHeader from './SectionHeader'
import CategoryCard from './CategoryCard'

export default function MenuCategories() {
  const { setPopularCategory } = useApp()
  const counts = products.reduce<Record<number, number>>((acc, p) => {
    acc[p.categoryId] = (acc[p.categoryId] || 0) + 1
    return acc
  }, {})

  const handleCategoryClick = (categoryId: number) => {
    setPopularCategory(categoryId)
    const popular = document.getElementById('popular')
    if (popular) {
      const headerHeight = 70
      window.scrollTo({ top: popular.getBoundingClientRect().top + window.scrollY - headerHeight, behavior: 'smooth' })
    }
  }

  return (
    <section id="menu" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeader tag="Our Menu" title="Browse Categories" description="Explore our wide variety of delicious cuisines" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(c => (
            <div key={c.name} className="animate-on-scroll h-full"><CategoryCard icon={c.icon} name={c.name} count={counts[c.id] || 0} onClick={() => handleCategoryClick(c.id)} /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
