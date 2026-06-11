export function renderStars(rating: number) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars.push(<i key={i} className="fas fa-star text-yellow-400" />)
    else if (i - rating < 1) stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-400" />)
    else stars.push(<i key={i} className="far fa-star text-yellow-400" />)
  }
  return stars
}
