import { products } from "../constants";
import { PopularProductCard } from "../components";
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';

const PopularProducts = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-playfair font-bold'>
          {t.popularProductsTitle1} <span className='text-amber-900'> {t.popularProductsTitle2} </span>
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          {t.popularProductsDesc}
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
