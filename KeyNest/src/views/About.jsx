import { useState } from 'react'
import '../styles/about.css'
import BannerComp from '../components/BannerComp'

function About() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const accordionData = [
    {
      title: 'Reliability',
      content:
        'The listings posted on KeyNest guarantee complete reliability. The photos match the accommodations, and all information is regularly verified by our teams.',
    },
    {
      title: 'Service',
      content:
        'Our teams are at your disposal to provide you with a perfect experience. Feel free to contact us if you have any questions.',
    },
    {
      title: 'Respect',
      content:
        'Kindness is one of KeyNest\'s core values. Any discriminatory behavior or disturbance to the neighborhood will result in exclusion from our platform.',
    },
    {
      title: 'Security',
      content:
        'Safety is Kasa\'s top priority. For both our hosts and travelers, each accommodation meets the safety criteria established by our services. We also organize domestic safety workshops for our hosts.',
    },
  ]

  return (
    <main className="about">
      <h1>KeyNest's values</h1>
      <BannerComp imageUrl={"/assets/cabin.jpg"}/>
      <article>
        Welcome to KeyNest, your go-to platform for finding unique and welcoming
        accommodations across Paris and its surroundings. Whether you're looking for
        a cozy studio near Montmartre, a family suite by Montparnasse, or a
        luxurious loft in La Défense, we have a wide range of options tailored to
        your needs.
      </article>
      <div className="about-container">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`accordion-about ${
              activeAccordion === index ? 'active' : ''
            }`}
          >
            <div
              className="accordion-about-header"
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
            <div className="accordion-about-body">{item.content}</div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default About