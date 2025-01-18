import React from 'react'
import { useState } from 'react'

function AboutAccordion({item, index}) {
  const [activeAccordion, setActiveAccordion] = useState(null)
  return (
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
  )
}

export default AboutAccordion