import React from 'react';
import MenuContent from '../Menu/MenuContent'
import DishImage from './DishImage';
import OurMenu from './OurMenu';
import MenuImage from './MenuImage';
import Yourcart from './Yourcart';
import Orderbutton from './Orderbutton';

function Menu() {
  return (
        <>
        <MenuContent></MenuContent>
        <DishImage></DishImage>
        <OurMenu></OurMenu>
        <MenuImage></MenuImage>
        <Yourcart></Yourcart>
        <Orderbutton></Orderbutton>
        </>
  );
}

export default Menu;
