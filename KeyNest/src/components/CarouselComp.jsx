import React, {useState} from 'react'

function CarouselComp({pictures}) {
    const [isExpanded, setIsExpanded] = useState(false)
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
    <>
      
      <div className="carousel">
        <div className="carousel-item">
          <img
            key={currentImageIndex}
            src={pictures[currentImageIndex]}
            alt={`image ${currentImageIndex + 1}`}
            className="fade"
          />
          <div 
            className="eye-overlay"
            onClick={() => setIsExpanded(true)}
          >
            <img 
              src="/assets/eye.png" 
              alt="View full size" 
              width="24" 
              height="24" 
            />
          </div>
        </div>
        <button className="back-arrow" onClick={handlePrevImage}>
          <img src="/assets/arrow_back.png" alt="back arrow" />
        </button>
        <button className="forward-arrow" onClick={handleNextImage}>
          <img src="/assets/arrow_forward.png" alt="forward arrow" />
        </button>
      </div>

      {isExpanded && (
        <div className="expanded-image-modal">
          <div className="expanded-image-container">
            <button 
              className="close-button" 
              onClick={() => setIsExpanded(false)}
            >
              ×
            </button>
            <img
              src={pictures[currentImageIndex]}
              alt={`expanded image ${currentImageIndex + 1}`}
              className="expanded-image"
            />
          </div>
        </div>
      )}
    </>
  )
}
export default CarouselComp