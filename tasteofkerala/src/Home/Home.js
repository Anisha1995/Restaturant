import React from 'react';
import HomeImage from './HomeImage';
import "./home.css"
import Table from './Table';
import Imagegallery from './Imagegallery';

function Home() {
  return (
  
    <>
    <HomeImage abc="../Images/scroll-img2.jpg" />
    <Table/>
    <Imagegallery></Imagegallery>
    </>
  );
}

export default Home;
