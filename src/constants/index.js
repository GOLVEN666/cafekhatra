import { facebook, instagram, coffee_cup, support, truckFast, twitter } from "../assets/icons";
import {  customer1, customer2, customer3, pro4, pro1, pro2, pro3 } from "../../public/images";

export const navLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about-us", label: "À Propos" },
    { href: "#products", label: "Produits" },
    { href: "#contact-us", label: "Contactez-Nous" },
];

export const shoes = [
    {
        thumbnail: pro1,
        bigShoe: pro1,
    },
    {
        thumbnail: pro2,
        bigShoe: pro2,
    },
    {
        thumbnail: pro3,
        bigShoe: pro3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Clients' },
    { value: '20+', label: 'Produits' },
    { value: '99%', label: 'Satisfaction' },
];

export const products = [
    {
        imgURL: pro1,
        rating: 4.9,
        name: "Pack de Café",
        price: "50 DH",
    },
    {
        imgURL: pro2,
        rating: 5,
        name: "Tasses Marquées",
        price: "100 DH",
    },
    {
        imgURL: pro3,
        rating: 4.5,
        name: "Sirop de Vanille",
        price: "50 DH",
    },
    {
        imgURL: pro4,
        rating: 5,
        name: "Ja Cacao",
        price: "99 DH",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Livraison Gratuite",
        subtext: "Profitez d'un shopping sans tracas avec notre service de livraison gratuite."
    },
    {
        imgURL: coffee_cup,
        label: "Haute Qualité",
        subtext: "Faites des achats en toute confiance avec nos options de haute qualité."
    },
    {
        imgURL: support,
        label: "Nous Aimons Vous Aider",
        subtext: "Notre équipe dévouée est là pour vous aider à chaque étape."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Hassan',
        rating: 4.5,
        feedback: "L'attention aux détails et la qualité du produit ont dépassé mes attentes. Hautement recommandé !"
    },
    {
        imgURL: customer2,
        customerName: 'Yassmine',
        rating: 5,
        feedback: "Le produit a non seulement répondu à mes attentes, mais les a dépassées. Je reviendrai certainement !"
    },
    {
        imgURL: customer3,
        customerName: 'Ranya',
        rating: 5,
        feedback: "J'aime le goût et l'effet. C'est probablement l'un des meilleurs mélanges de café, surtout pour les capsules."
    }
];

export const footerLinks = [
    {
        title: "Catégories",
        links: [
            { name: "Tout", link: "/products?category=All" },
            { name: "Tasses", link: "/products?category=cup" },
            { name: "Garnitures", link: "/products?category=topping" },
            { name: "Cacao", link: "/products?category=cacao" },
            { name: "Fournitures", link: "/products?category=supplies" },
            { name: "Café", link: "/products?category=coffee" },
            { name: "Miel", link: "/products?category=honey" },
        ],
    },
    {
        title: "Aide",
        links: [
            { name: "À Propos de Nous", link: "/aboutus" },
            { name: "FAQs", link: "/aboutus" },
            { name: "Devenir franchisé", link: "/contact" },
        ],
    },
    {
        title: "Entrer en Contact",
        links: [
            { name: "cafekhatra@khatracafe.com", link: "mailto:cafekhatra@khatracafe.com" },
            { name: "+212666666666", link: "tel:+212666666666" },
        ],
    },
];


export const socialMedia = [
    { src: facebook, alt: "logo facebook " },
    { src: twitter, alt: "logo twitter " },
    { src: instagram, alt: "logo instagram " },
];
