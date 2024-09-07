import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { translations } from '../constants/translations';

const ProductCard = ({ props }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    amount: '1',
    adresse: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setFormData({ ...formData, amount: value });
    }
  };

  const incrementAmount = () => {
    setFormData({ ...formData, amount: parseInt(formData.amount || 0) + 1 });
  };

  const decrementAmount = () => {
    if (formData.amount > 0) {
      setFormData({ ...formData, amount: formData.amount - 1 });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = 'https://formspree.io/f/mwpebavz';

    const data = {
      productName: props.name,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      amount: formData.amount,
      adresse: formData.adresse
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        amount: '',
        adresse: ''
      });

      document.getElementById('popup-form').classList.add('hidden');
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border shadow-md">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl justify-center" href="#">
        <img className="object-contain" src={props.image} loading="lazy" alt={t.productImageAlt} />
        {props.discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-[#A56D3C] px-2 text-center text-sm font-medium text-white">
            {props.discount}
          </span>
        )}
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-[#6F4E37]"></h5>
        </a>
        <div className="mt-2 mb-2 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-[#3C2F2F]">{props.name}</span>
          </p>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-[#F5C469]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="mr-2 ml-3 rounded bg-[#F9D77E] px-2.5 py-0.5 text-xs font-semibold text-[#3C2F2F]">
              {props.rating}
            </span>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-[#6F4E37] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3C2F2F] focus:outline-none focus:ring-4 focus:ring-[#A56D3C]"
          onClick={() => document.getElementById('popup-form').classList.remove('hidden')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {t.buyButton}
        </a>
      </div>

      <div
        id="popup-form"
        className="hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div className="relative mx-auto w-full max-w-[550px] bg-white p-4">
          <button
            onClick={() => document.getElementById('popup-form').classList.add('hidden')}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {t.fullNameLabel}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={t.fullNamePlaceholder}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {t.phoneNumberLabel}
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder={t.phonePlaceholder}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleChange}
                value={formData.phone}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {t.emailLabel}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t.emailPlaceholder}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="amount"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {t.amountLabel}
              </label>
              <div className="flex">
                <button
                  type="button"
                  className="w-10 bg-gray-200 text-gray-600 hover:bg-gray-300"
                  onClick={decrementAmount}
                >
                  -
                </button>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={formData.amount}
                  onChange={handleAmountChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md text-center"
                />
                <button
                  type="button"
                  className="w-10 bg-gray-200 text-gray-600 hover:bg-gray-300"
                  onClick={incrementAmount}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="adresse"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {t.addressLabel}
              </label>
              <input
                type="text"
                name="adresse"
                id="adresse"
                placeholder={t.addressPlaceholder}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                onChange={handleChange}
                value={formData.adresse}
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#6F4E37] hover:bg-[#3C2F2F] text-white font-bold py-2 px-4 rounded"
              >
                {t.submitButton}
              </button>
            </div>
          </form>
          {showSuccessMessage && (
            <div className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg" role="alert">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current mr-2" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t.successMessage}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
