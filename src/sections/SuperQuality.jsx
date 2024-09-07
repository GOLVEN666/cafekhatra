import { khatra_shop } from "../../public/images";
import { Button } from "../components";
import { Link } from "react-router-dom";
import { arrowRight } from "../assets/icons";
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';

const SuperQuality = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-playfair capitalize text-4xl lg:max-w-lg font-bold">
          {t.superQualityTitle1}
          <span className="text-amber-900"> {t.superQualityTitle2} </span>
          <span className="text-amber-900"> {t.superQualityTitle3} </span> {t.superQualityTitle4}
        </h2>
        <p className="mt-4 lg:max-w-lg text-black font-semibold text-xl">
          {t.superQualityDesc}
        </p>

        <div className="mt-11">
          <Link to="/products"><Button label={t.superQualityButton} iconURL={arrowRight} /></Link>
        </div>

      </div>
      <div className="divider divider-neutral"></div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={khatra_shop}
          alt={t.superQualityImgAlt}
          width={570}
          height={522}
          className='object-contain rounded-md'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
