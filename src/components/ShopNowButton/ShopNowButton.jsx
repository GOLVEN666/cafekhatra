import React from 'react';
import { Link } from 'react-router-dom';
import './ShopNowButton.css';
import { useLanguage } from '../LanguageContext'; // Adjust the path as necessary
import { translations } from '../../constants/translations';

const ShopNowButton = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Link to="/products" className="btn bg-transparent hover:bg-transparent border-none">
      <b>
        <span>{t.achetez}</span>
        <div className="liquid"></div>
      </b>
    </Link>
  );
};

export default ShopNowButton;