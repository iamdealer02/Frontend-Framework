import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/about.css';
import BannerComp from '../components/BannerComp';
import data_en from '../../data/data.about.en.json';
import data_fr from '../../data/data.about.fr.json';
import data_sp from '../../data/data.about.sp.json';

function About() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [content, setContent] = useState(data_en);
  const { language: urlLanguage } = useParams();
  const reduxLanguage = useSelector((state) => state.language);

  useEffect(() => {
    const getContent = () => {
      const currentLanguage = urlLanguage || reduxLanguage || 'en';
      switch (currentLanguage) {
        case 'fr':
          return data_fr;
        case 'es':
          return data_sp;
        default:
          return data_en;
      }
    };

    setContent(getContent());
  }, [urlLanguage, reduxLanguage]);

  return (
    <main className="about">
      <h1>{content.title}</h1>
      <BannerComp imageUrl="/assets/cabin.jpg" />
      <article>{content.description}</article>
      <div className="about-container">
        {content.accordions && content.accordions.map((item, index) => (
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
  );
}

export default About;
