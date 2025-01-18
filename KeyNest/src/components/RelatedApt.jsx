import React from 'react'
import { Link } from 'react-router-dom'

function RelatedApt({relatedApartments}) {
  return (
    <div className="related-container">
    {relatedApartments.map((item) => (
      <Link key={item.id} to={`/apartment/${item.id}`} data-discover="true">
        <article className="card">
          <h3>{item.title}</h3>
          <img className="card-img" src={item.cover} alt={item.title} />
        </article>
      </Link>
    ))}
  </div>
  )
}

export default RelatedApt