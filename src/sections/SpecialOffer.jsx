import { Link } from "react-router-dom";
import { arrowRight } from "../assets/icons";
import { banner } from "../../public/images";
import { Button } from "../components";
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';

const SpecialOffer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={banner}
          alt={t.specialOfferAlt}
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-playfair font-bold'>
          <span className='text-amber-900'>{t.specialOfferTitle}</span>
        </h2>
        <p className='mt-4 text-black font-semibold text-xl'>
          {t.specialOfferDesc1}
        </p>
        <p className='mt-6 text-black font-semibold text-xl'>
          {t.specialOfferDesc2}
        </p>

        <div className='mt-11 flex flex-wrap gap-4'>
          <Link to="/contact"><Button label={t.specialOfferButton} iconURL={arrowRight}/></Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
