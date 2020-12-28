import React from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css"

function Navigation() {
    return (
        
        <div class="menubar">
            <div class="top">
            <h1>TASTE OF KERALA</h1>
           </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/reservation">Make a reservation</Link></li>
                <li><Link to="/payment">Payment</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li><Link to="/Signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>

        </div>
    );
}

export default Navigation;
