import React from 'react';
import { khatra_gear } from '../../public/images';
import { Button } from '../components';
import { Link } from 'react-router-dom';
import { arrowRight } from '../assets/icons';
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';

const GearSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div id="equipment-section" className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-3/5">
        <img
          src={khatra_gear}
          alt="khatra gear"
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="w-full md:w-2/5 p-4 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold mb-2 font-playfair ">{t.gearTitle}</h2>
        <p className="mb-4 text-black font-semibold text-xl">
          {t.gearDesc}
        </p>
        <Link to="/contact">
          <Button label={t.gearButton} iconURL={arrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default GearSection;
