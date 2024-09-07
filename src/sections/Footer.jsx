import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../../public/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            {t.footerDesc}
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        {/* <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
            <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
      <div>
        <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
          {t.footerLinks.categories[0].name}
        </h4>
        <ul>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href="/products?category=All">{t.footerLinks.categories[0].name}</a>
          </li>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href="/products?category=cup">{t.footerLinks.categories[1].name}</a>
          </li>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href="/products?category=topping">{t.footerLinks.categories[2].name}</a>
          </li>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href="/products?category=cacao">{t.footerLinks.categories[3].name}</a>
          </li>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href="/products?category=supplies">{t.footerLinks.categories[4].name}</a>
          </li>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href="/products?category=coffee">{t.footerLinks.categories[5].name}</a>
          </li>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href="/products?category=honey">{t.footerLinks.categories[6].name}</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
          {t.footerLinks.Aide[0].name}
        </h4>
        <ul>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href={t.footerLinks.Aide[0].link}>{t.footerLinks.Aide[0].name}</a>
          </li>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href={t.footerLinks.Aide[1].link}>{t.footerLinks.Aide[1].name}</a>
          </li>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href={t.footerLinks.Aide[2].link}>{t.footerLinks.Aide[2].name}</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
          {t.contactUs}
        </h4>
        <ul>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href={t.footerLinks.contact[0].link}>{t.footerLinks.contact[0].name}</a>
          </li>
          <li className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
            <a href={t.footerLinks.contact[1].link}>{t.footerLinks.contact[1].name}</a>
          </li>
        </ul>
      </div>
    </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>{t.footerRights}</p>
        </div>
        <p className='font-montserrat cursor-pointer'>{t.footerTerms}</p>
      </div>
    </footer>
  );
};

export default Footer;
