import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { translations } from '../constants/translations';

const PopularProductCard = ({ imgURL, rating, name }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const renderStars = () => {
    const starsArray = [];
    for (let i = 0; i < 5; i++) {
      starsArray.push(
        <svg
          key={i}
          aria-hidden="true"
          className={`h-5 w-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return starsArray;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card w-64 shadow-xl bg-[#F3E5D5] border mx-auto">
        <figure>
          <img src={imgURL} alt={name} className="w-full h-full object-cover" />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-1 mb-2">
            {renderStars()}
          </div>
          <h2 className="card-title text-xl font-semibold text-[#3C2F2F] mb-3">{name}</h2>
          
          <div className="card-actions flex justify-center">
            <button className="btn bg-[#6F4E37] text-white hover:bg-[#3C2F2F] py-2 px-8 rounded-md focus:outline-none focus:ring-4 focus:ring-[#A56D3C]">
              <Link to='/products'>{t.buyNow}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
