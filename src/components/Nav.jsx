import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { headerLogo } from '../../public/images';
import { coffeebean } from '../assets/icons';
import { useLanguage } from './LanguageContext';
import { translations } from '../constants/translations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const t = translations[language];

  const getLanguageIcon = () => {
    return language === 'en' ? '🇲🇦' : '🇫🇷';
  };

  const toggleLanguageText = () => {
    return language === 'en' ? 'العربية' : 'Français';
  };

  return (
    <nav className={`sticky top-0 z-50 transition duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          <div className='flex flex-row text-amber-950 text-2xl'>
            <img src={headerLogo} alt="Logo" className="h-12" />
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-900 hover:text-amber-950 text-xl">
            {t.home}
          </Link>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="btn text-gray-900 hover:text-amber-950 text-xl">
              {t.products}
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-white/80 backdrop-blur-md border border-gray-200 rounded-box z-[1] w-52 p-2 shadow">
              <li><Link to="/products?category=All" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-xl">{t.all}</Link></li>
              <li><Link to="/products?category=cup" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-xl">{t.cups}</Link></li>
              <li><Link to="/products?category=topping" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-xl">{t.toppings}</Link></li>
              <li><Link to="/products?category=coffee" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-xl">{t.coffee}</Link></li>
              <li><Link to="/products?category=supplies" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-xl">{t.supplies}</Link></li>
              <li><Link to="/products?category=cacao" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-xl">{t.cacao}</Link></li>
              <li><Link to="/products?category=honey" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-xl">{t.honey}</Link></li>
            </ul>
          </div>
          <Link to="/contact" className="text-gray-900 hover:text-amber-950 text-xl">
            {t.contactUsss}
          </Link>
          <Link to="/equipment" className="text-gray-900 hover:text-amber-950 text-xl">
            {t.equipment}
          </Link>
          <Link to="/aboutus" className="text-gray-900 hover:text-amber-950 text-xl">
            {t.aboutUs}
          </Link>
          <button onClick={toggleLanguage} className="btn flex items-center text-gray-900 hover:text-amber-950 text-xl">
            {getLanguageIcon()} {toggleLanguageText()}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary bg-transparent hover:bg-transparent border-none">
            <img src={coffeebean} alt="coffee bean" className='h-12 w-12'/>
          </label>
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li><Link to="/" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-3xl">{t.home}</Link></li>
              <li><Link to="/contact" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-3xl">{t.contactUsss}</Link></li>
              <li>
                <Link to="/equipment" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-3xl">
                  {t.equipment}
                </Link>
              </li>
              <li><Link to="/aboutus" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-3xl">{t.aboutUs}</Link></li>
              <li className="dropdown dropdown-hover">
                <div tabIndex={0} className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-3xl">
                  {t.products}
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
                  <li><Link to="/products?category=All" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold">{t.all}</Link></li>
                  <li><Link to="/products?category=cup" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold">{t.cups}</Link></li>
                  <li><Link to="/products?category=topping" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold">{t.toppings}</Link></li>
                  <li><Link to="/products?category=coffee" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold">{t.coffee}</Link></li>
                  <li><Link to="/products?category=supplies" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold">{t.supplies}</Link></li>
                  <li><Link to="/products?category=cacao" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold">{t.cacao}</Link></li>
                  <li><Link to="/products?category=honey" className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold">{t.honey}</Link></li>
                </ul>
              </li>
              <li className="mt-auto">
                <button onClick={toggleLanguage} className="text-gray-900 hover:bg-amber-950 hover:text-white font-bold text-3xl">
                  {getLanguageIcon()} {toggleLanguageText()}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
