export default function Rating({ value, count, size = 'sm' }: { value: number; count?: number; size?: 'xs' | 'sm' | 'base' }) {
  const sizeClass = { xs: 'text-xs', sm: 'text-sm', base: 'text-base' }[size]
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(value)) stars.push(<i key={i} className="fas fa-star" />)
    else if (i - value < 1) stars.push(<i key={i} className="fas fa-star-half-alt" />)
    else stars.push(<i key={i} className="far fa-star" />)
  }
  return (
    <div className={`flex items-center gap-1 text-yellow-400 ${sizeClass}`}>
      {stars}
      {count !== undefined && <span className="text-gray-500 ml-1">{value} ({count})</span>}
    </div>
  )
}
