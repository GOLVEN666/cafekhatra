import { useState } from "react";
import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { pro1 } from "../../public/images";
import { arrowRight } from "../assets/icons";
import { Link } from "react-router-dom";
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';

const Hero = () => {
  const [bigCoffeeImg, setBigCoffeeImg] = useState(pro1);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container mt-0 pt-0'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <h1 className='mt-2 font-playfair text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 mt-2'>
            <span className='text-amber-900 inline-block mt-3'>{t.khatra}</span> {t.coffee}	
          </span>
          <br />
        </h1>
        <p className='font-montserrat text-black text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          {t.heroDesc}
        </p>

        <Link to="/products"><Button label={t.heroButton} iconURL={arrowRight} /></Link>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
      <div>
        <p className='text-4xl font-palanquin font-bold text-amber-950'>{statistics[0].value}</p>
        <p className='leading-7 font-montserrat text-gray-700'>
          {t.statistics[0].label}
        </p>
      </div>
      <div>
        <p className='text-4xl font-palanquin font-bold text-amber-950'>{statistics[1].value}</p>
        <p className='leading-7 font-montserrat text-gray-700'>
          {t.statistics[1].label}
        </p>
      </div>
      <div>
        <p className='text-4xl font-palanquin font-bold text-amber-950'>{statistics[2].value}</p>
        <p className='leading-7 font-montserrat text-gray-700'>
          {t.statistics[2].label}
        </p>
      </div>
    </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigCoffeeImg}
          alt='coffee collection'
          width={610}
          height={502}
          className='object-contain relative z-100 rounded'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigCoffeeImg(shoe)}
                bigCoffeeImg={bigCoffeeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
