import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import CarouselComp from '../components/CarouselComp'

function Apartment() {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [apartment, setApartment] = useState(null)
  const [relatedApartments, setRelatedApartments] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  const TagsMap = () => {
    if (apartment?.tags) {
        return apartment.tags.map((tag, index) => (
            <div key={index} className="tag">
            {tag}
            </div>
        ))
        }
  }

  useEffect(() => {
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        const currentApartment = data.find((apt) => apt.id === id)
        if (!currentApartment) {
            // If no apartment is found, navigate to NotFound page
            navigate('/not-found')
            return
          }
        setApartment(currentApartment)
        setRelatedApartments(data.filter((apt) => apt.id !== id).slice(0, 3))
      })
  }, [id])

  if (!apartment) {
    return <div>Loading...</div>
  }


  const accordionData = [
    {
      title: 'Description',
      content: apartment.description,
    },
    {
      title: 'Equipment',
      content: (
        <ul>
          {apartment.equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <main>
    <CarouselComp pictures={apartment.pictures} />
      <article className="apartment">
        <h2>{apartment.title}</h2>
        <p>{apartment.location}</p>
        <div className="tags-container">
            <TagsMap />
        </div>
        <div className="stars-container">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={`/assets/star-${index < apartment.rating ? 'active' : 'inactive'}.svg`}
              alt={`${index < apartment.rating ? 'active' : 'inactive'} star`}
            />
          ))}
        </div>
        <div className="greater">
          <div className="greater-container">
            <span>{apartment.host.name}</span>
            <img src={apartment.host.picture} alt={apartment.host.name} />
          </div>
        </div>
      </article>
      <div className="apartment-accordion-container">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${
              activeAccordion === index ? 'active' : ''
            }`}
          >
            <div
              className="accordion-header"
              role="button"
              onClick={() =>
                setActiveAccordion(activeAccordion === index ? null : index)
              }
            >
              <h2>{item.title}</h2>
              <button>
                <img src="/assets/arrow.svg" alt="arrow" />
              </button>
            </div>
            <div className="accordion-body">{item.content}</div>
          </div>
        ))}
      </div>
      <hr style={{ marginTop: '1em' }} />
      <section className="related-section">
        <h2>You might also like</h2>
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
      </section>
    </main>
  )
}

export default Apartment
