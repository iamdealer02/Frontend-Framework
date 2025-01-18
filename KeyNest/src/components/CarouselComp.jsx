import React from 'react'
import { useState } from 'react'

function CarouselComp({pictures}) {
      const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const handlePrevImage = () => {
        setCurrentImageIndex((prev) =>
          prev === 0 ? pictures.length - 1 : prev - 1
        )
      }
    
      const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
          prev === pictures.length - 1 ? 0 : prev + 1
        )
      }
  return (
    <div className="carousel">
    <div className="carousel-item">
    <img 
        key={currentImageIndex}
        src={pictures[currentImageIndex]} 
        alt={`image ${currentImageIndex + 1}`} 
        className='fade'
        />

    </div>
    <button className="back-arrow" onClick={handlePrevImage}>
      <img src="/assets/arrow_back.png" alt="back arrow" />
    </button>
    <button className="forward-arrow" onClick={handleNextImage}>
      <img src="/assets/arrow_forward.png" alt="forward arrow" />
    </button>
  </div>
  )
}

export default CarouselComp