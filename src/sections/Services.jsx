import { services } from "../constants";
import { ServiceCard } from "../components";
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';
import { facebook, instagram, coffee_cup, support, truckFast, twitter } from "../assets/icons";

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {/*
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
      */}
      <ServiceCard imgURL={truckFast} label={t.services[0].label} subtext={t.services[0].subtext}  />
      <ServiceCard imgURL={coffee_cup} label={t.services[1].label} subtext={t.services[1].subtext}  />
      <ServiceCard imgURL={support} label={t.services[2].label} subtext={t.services[2].subtext}  />
    </section>
  );
};

export default Services;