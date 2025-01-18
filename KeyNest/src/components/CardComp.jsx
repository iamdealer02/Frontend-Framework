import React from 'react'
import { Link } from 'react-router-dom'

function CardComp({id, title, cover}) {
  return (
    <Link key={id} to={`/apartment/${id}`}>
    <article className="card">
      <h3>{title}</h3>
      (
        <img 
          className="card-img" 
          src={cover} 
          alt="key house" 
        />
      )
    </article>
  </Link>
  )
}

export default CardComp