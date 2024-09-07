import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from '../constants/translations';

const Products = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <h1>{t.ourProducts}</h1>
      <p>{t.productVariety}</p>
    </div>
  );
};

export default Products;
