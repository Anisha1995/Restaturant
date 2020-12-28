import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Order from '../Order/Order';
import Reservation from '../Reservation/Reservation';
import Payment from '../Payment/Payment';
import Feedback from '../Feedback/Feedback';
import Contact from '../Contact/Contact';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';


const history= createBrowserHistory();

function Master() {
  return (
    
    <Router history={history}>
        <Route path="/" ><Navigation /></Route>
        <Route exact path="/" ><Home /></Route>
        <Route path="/about" ><About /></Route>
        <Route path="/menu"><Menu /></Route>
        <Route path="/order"><Order/></Route>
        <Route path="/reservation"><Reservation/></Route>
        <Route path="/payment"><Payment /></Route>
        <Route path="/feedback"><Feedback /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/signup"><Signup /></Route>
        <Route path="/login"><Login /></Route>
    </Router>
  );
}

export default Master;
