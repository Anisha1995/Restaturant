import React from 'react';
import  "./Menu.css";
import { Link } from "react-router-dom"


function Orderbutton() {
    return (
        <div class="footbutton">
               <Link to="/order">
               <button class="orderb">Order</button>
               </Link>
            
        </div>
       
        
    );
}

export default Orderbutton;
