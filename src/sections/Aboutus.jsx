import React from 'react';
import { Helmet } from 'react-helmet';
import { coffeebean } from '../assets/icons';
import TimelineComponent from './Timeline';
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';

const Aboutus = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const timelineData = [
    { date: t.timelineDate1, title: "2020", description: t.timelineDesc1 },
    { date: t.timelineDate2, title: "", description: t.timelineDesc2 },
    { date: t.timelineDate3, title: "", description: t.timelineDesc3 },
    { date: t.timelineDate4, title: "", description: t.timelineDesc4 },
    { date: t.timelineDate5, title: t.timelineTitle5, description: t.timelineDesc5 }
  ];

  const faqs = [
    { question: t.faqQuestion1, answer: t.faqAnswer1 },
    { question: t.faqQuestion2, answer: t.faqAnswer2 },
    { question: t.faqQuestion3, answer: t.faqAnswer3 },
    { question: t.faqQuestion4, answer: t.faqAnswer4 },
    { question: t.faqQuestion5, answer: t.faqAnswer5 },
    { question: t.faqQuestion6, answer: t.faqAnswer6 },
    { question: t.faqQuestion7, answer: t.faqAnswer7 },
    { question: t.faqQuestion8, answer: t.faqAnswer8 },
    { question: t.faqQuestion9, answer: t.faqAnswer9 }
  ];

  return (
    <div className="bg-gradient-to-r from-brown-500 via-black to-gold-500 min-h-screen py-10">
      <Helmet>
        <title>À Propos de Nous - Khatra Café</title>
        <meta
          name="description"
          content="Khatra Café est une entreprise dédiée à offrir des cafés premium et des accessoires de qualité. Découvrez notre histoire, nos valeurs, et notre engagement envers l'excellence."
        />
      </Helmet>

      <h1 className='text-4xl text-center font-playfair font-extrabold text-[#3C2F2F]'>{t.aboutUsTitle}</h1>
      <section className="text-center mb-10 px-4 md:px-8">
        <div className="bg-gradient-to-r from-brown-500 via-black to-gold-500 min-h-screen py-10">
          <TimelineComponent data={timelineData} />
        </div>
      </section>
      <section className="container mx-auto px-4 md:px-8">
        <div className="divider divider-neutral">
          <img src={coffeebean} alt="Coffee Bean" className="h-14 w-14" />
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-brown-800 text-gold-400 rounded-lg mb-4 shadow-lg">
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
            <div className="collapse-title text-xl font-bold text-black ">{faq.question}</div>
            <div className="collapse-content">
              <p className="text-lg text-brown-200">{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Aboutus;
