import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import Equipment from './components/Equipment'; 
import Navbar from './components/Nav';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Aboutus,
  SuperQuality,
} from "./sections";
import ProductList from './components/ProductsList';
import Contact from './components/Contact';
import MyForm from './components/FormTest';
import BgVid from './components/BgVid/BgVid';
import ScrollToTop from './components/ScrollToTop'; 
import GearSection from './sections/Gear';

const Home = () => (
  <main className='relative'>
    <Helmet>
      <title>Café Khatra</title>
      <meta
        name="description"
        content="Khatra Café propose des produits de café premium et des accessoires de qualité pour les amateurs de café. Découvrez nos mélanges populaires, nos équipements et nos offres spéciales."
      />
    </Helmet>

    <section className='top-0'>
      <BgVid />
    </section>
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffer />
    </section>
    <section className='padding'>
      <GearSection />
    </section>
    <section className='bg-pale-blue padding'>
      <CustomerReviews />
    </section>
  </main>
);


const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop /> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/test" element={<MyForm />} />
          <Route path="/equipment" element={<Equipment />} /> 
        </Routes>
        <section className=' bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>
      </Router>
    </LanguageProvider>
  );
};

export default App;
