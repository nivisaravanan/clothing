import React, { useState } from 'react';
import './App.css';
import Sidebar from './Page/Slidebar';
import ProductList from './Page/ProductList';
import ProductDetails from './Page/ProductDetails';

import blacksaree from './assets/img/blacksaree.jpg'
import sandlekurthi from './assets/img/sandlekurthi.jpg';
import blacktop from './assets/img/blacktop.jpg';
import bluewear from './assets/img/bluewear.jpg';
import pinkshirt from './assets/img/pinkshirt.jpg';
import bluemax from './assets/img/bluemax.jpg';
import bluepant from './assets/img/bluepant.jpg';
import pantblack from './assets/img/pantblack.jpg';
import bluejean from './assets/img/bluejean.jpg';
import shirtwhite from './assets/img/shirtwhite.jpg';
import Header from './Page/Header';
import Footer from './Page/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 1, name: 'Saree' },
    { id: 2, name: 'Tops' },
    { id: 3, name: 'Kurthi' },
    { id: 4, name: 'T-Shirt for Girls' },
    { id: 5, name: 'Western Wear' },
    { id: 6, name: 'Maxi' },
    { id: 7, name: 'Jeans' },
    { id: 8, name: 'Pants for Girls' },
    { id: 9, name: 'Shirts for Mens' },
    { id: 10, name: 'Pants for Mens' },


  ];

  const sarees = [
    {
      id: 1,
      name: 'Elegant Silk Saree',
      description: "Work Type: Woven Zari Design All Over Finish Type: Soft Comfortable To Wear / Occasion: Party , Festive ,Wedding Wear Best Gift For Your Loved Ones, Wash Care :Dry Clean",
      size: 'One size',
      price: 750,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image: blacksaree,
    },
    // Add more saree items here
  ];



  const Tops = [
    {
      id: 1,
      name: 'Tops',
      description: "COMFORT REDEFINED: Crafted from a premium Cotton Blend, our top provides unparalleled comfort all day. It's breathable, soft against your skin, and designed to keep you at ease, even in the sweltering heat.",
      size: 'Various sizes available',
      price: 250,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image: blacktop,
    },
    // Add more dress items here
  ];



  const Kurthi = [
    {
      id: 1,
      name: 'Kurthi',
      description: "Rangita's diverse and latest collection of kurti sets features straight kurtas, A-line kurtas, anarkali kurtas and flared kurtas. Crafted from quality fabrics like cotton, rayon, polyester and chanderi, these materials ensure both comfort and durability, making them suitable for all occasions like casual, work and festive wear.",
      size: 'Various sizes available',
      price: 550,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image: sandlekurthi,
    },
    // Add more shirt items here
  ];

  const Tshirt = [
    {
      id: 1,
      name: 'T-Shirt for Girls',
      description: "Style Tip : To embrace a cool and effortless style, pair our women's red sarcastic one (DL) graphic printed boyfriend t-shirt with distressed jeans.",
      size: 'Various sizes available',
      price: 300,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image: pinkshirt,
    },
    // Add more shirt items here
  ];

  const Westernwear = [
    {
      id: 1,
      name: 'Weastern Wear',
      description:"This is made up of Pure Cotton.",
      size: 'Various sizes available',
      price: 850,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image: bluewear,
    },
    // Add more shirt items here
  ];

  const Maxi = [
    {
      id: 1,
      name: 'Maxi',
      description: "Ankle length palazzo with an elasticated waist band and drawstring,Pairs perfectly with all your outfits for casual wear",
      size: 'Various sizes available',
      price: 350,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image: bluemax,
    },
    // Add more shirt items here
  ];

  const Jeans = [
    {
      id: 1,
      name: 'Jeans',
      description: "care instructin:Hand wash only",
      size: 'Various sizes available',
      price: 550,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image: bluejean,
    },
    // Add more shirt items here
  ];

  const Pantsgirls = [
    {
      id: 1,
      name: '  Pant for girls',
      description: "Fit Type: RegularFit, Style: Cigarette Pant/Pencil Pant/ Kurti Pant.",
      size: 'Various sizes available',
      price: 350,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image: bluepant,
    },
    // Add more shirt items here
  ];

  const Shirt = [
    {
      id: 1,
      name: 'Casual Plaid Shirt',
      description:"Premium cotton fabric for ultimate comfort and breathability,Versatile design effortlessly pairs with jeans, chinos, or dress pants",
      size: 'Various sizes available',
      price: 400,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image:shirtwhite ,
    },
    // Add more shirt items here
  ];

  const Pantsmens = [
    {
      id: 1,
      name: 'Casual Pants',
      description:"Relaxed fit jeans which are easy through hip and thigh and straight from knee to ankle",
      size: 'Various sizes available',
      price: 700,
      size: "XS,S,M,L,XL,XXL,XXXL",
      color: "black,white,purple",
      image: pantblack,
    },
    // Add more shirt items here
  ];

  const handleCategoryClick = categoryId => {
    setSelectedCategory(categoryId);
    setSelectedProduct(null); // Reset selected product when changing categories
  };

  const handleProductClick = (category, productId) => {
    setSelectedCategory(category);
    setSelectedProduct(productId);
  };

  let products = [];
  switch (selectedCategory) {
    case 1:
      products = sarees;
      break;
    case 2:
      products = Tops;
      break;
    case 3:
      products = Kurthi;
      break;
    case 4:
      products = Tshirt;
      break;
    case 5:
      products = Westernwear;
      break;
    case 6:
      products = Maxi;
      break;
    case 7:
      products = Jeans;
      break;

    case 8:
      products = Pantsgirls;
      break;
    case 9:
      products = Shirt;
      break;
    case 10:
      products =Pantsmens ;
      break;

    default:
      products = [];
  }

  return (
    <div className="app">
      <Header/>
      <Sidebar categories={categories} handleCategoryClick={handleCategoryClick} />
      {selectedProduct ? (
        <ProductDetails product={products.find(product => product.id === selectedProduct)} />
      ) : (
        <ProductList products={products} handleProductClick={handleProductClick} />
      )}
      <Footer/>
    </div>
  );
}

export default App;
