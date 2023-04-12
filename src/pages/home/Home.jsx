import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './home.css';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import Property from '../../components/propertyList/Property';
import FeaturedProperties from '../../components/featured Properties/FeaturedProperties';
import Email from '../../components/email list/Email';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <Property/>
        <div className="hotelTitle">Homes guests love</div>
        <FeaturedProperties/>
        <Email/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
