import { coffeebean } from "../assets/icons";
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';

const TimelineComponent = (props) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-2">
      {props.data.map((item, index) => (
        <li key={index}>
          {(index % 2 === 0) ? (
            <>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="timeline-start text-right mb-10">
              <time className="font-mono italic text-3xl text-amber-800 ">{item.date}</time>
              <div className="ml-2 md:ml-0"> 
                <div className="rounded-lg overflow-hidden"></div>
                <div className="text-lg font-black">{item.title}</div>
                <div className="divider divider-neutral">
                  <img src={coffeebean} alt="Coffee Bean" className="h-6 w-6" />
                </div>
                <p className="mt-2">{item.description}</p> 
              </div>
            </div>
            <hr />            
            </>
          
          ) : (
            <>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
                  
            <div className="timeline-end text-left mb-10">
              <time className="font-mono italic text-3xl text-amber-800">{item.date}</time>
              <div className="ml-2 md:ml-0"> 
                <div className="rounded-lg overflow-hidden"></div>
                <div className="text-lg font-black">{item.title}</div>
                <div className="divider divider-neutral">
                  <img src={coffeebean} alt="Coffee Bean" className="h-6 w-6" />
                </div>
                <p className="mt-2">{item.description}</p> 
              </div>
            </div>
            <hr />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TimelineComponent;
