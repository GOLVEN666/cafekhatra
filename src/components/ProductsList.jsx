import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from '../../public/images/products.json';
import { useLanguage } from './LanguageContext';
import { translations } from '../constants/translations';

const ProductList = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [filter, setFilter] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      setFilter(category);
    } else {
      setFilter('All');
    }
  }, [location.search]);

  const filteredProducts = products.filter(product => {
    if (filter === 'All') return true;
    return product.category === filter;
  });

  return (
    <div>
      <Helmet>
        <title>Produits - Khatra Café</title>
        <meta
          name="description"
          content="Découvrez une large gamme de produits Khatra Café, y compris des cafés, des tasses, des accessoires, du cacao, du miel, et bien plus encore."
        />
      </Helmet>

      <div className="flex justify-center overflow-x-auto space-x-4 my-4">
        <button onClick={() => setFilter('All')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">{t.all}</button>
        <button onClick={() => setFilter('cup')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">{t.cups}</button>
        <button onClick={() => setFilter('topping')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">{t.toppings}</button>
        <button onClick={() => setFilter('coffee')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">{t.coffee}</button>
        <button onClick={() => setFilter('supplies')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">{t.supplies}</button>
        <button onClick={() => setFilter('cacao')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">{t.cacao}</button>
        <button onClick={() => setFilter('honey')} className="btn btn-outline hover:text-amber-950 hover:bg-white hover:border-amber-950 flex-shrink-0 border-[#D4A373] bg-[#F3E5D5] text-black text-xl">{t.honey}</button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} props={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
