import React from 'react'

function BannerComp({imageUrl, title = ""}) {
  return (
    <section className="home-banner">
        <img src={imageUrl} alt="cabin key host" />
        <h2>{title}</h2>
  </section>
  )
}

export default BannerComp