import React from 'react'
import { useState } from 'react'

function AccordionComp({item, index}) {
    const [activeAccordion, setActiveAccordion] = useState(null)
  return (

    <div
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
  )
}

export default AccordionComp