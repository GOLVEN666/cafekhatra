import React from 'react';
import { useLanguage } from '../LanguageContext'; // Adjust the path as necessary
import { translations } from '../../constants/translations'; // Adjust the path as necessary
import ShopNowButton from '../ShopNowButton/ShopNowButton';
import './BgVid.css';
import { bgvid } from '../../../public/images'; // Adjust the path as necessary

const BgVid = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Accessibility and SEO Improvement: Use aria-label for the video */}
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
        src={bgvid}
        autoPlay
        muted
        loop
        aria-label="Background video showing coffee-related visuals"
      />
      <div className="relative z-10 text-center text-white p-4">
        {/* Main Heading with SEO optimization */}
        <h1 className="text-4xl md:text-8xl mb-6 font-playfair font-bold">{t.welcomeKhatra}</h1>
        <ShopNowButton text={t.shopNow} />
        <div className="mt-6">
          <p className="text-sm">{t.learnMore}</p>
          {/* Improve SVG for SEO with title and description */}
          <svg
            className="w-6 h-6 mx-auto mt-2 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <title>{t.scrollDown}</title>
            <desc>{t.scrollDownDesc}</desc>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BgVid;
