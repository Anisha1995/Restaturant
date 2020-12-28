import React from 'react';
import "./Order.css"
import { Link, useHistory } from "react-router-dom";

function HomeImage(props) {

    const history = useHistory();
    
    const onClick = () => {
        history.push("/payment")
    }

    return (

        <div class="orderbg">
            <div class="orderbutton">
                <Link to="/reservation">
                    <button class="orderbtn">Dine-In</button>
                </Link>
                <button class="orderbtn" onClick={onClick}>Take Away</button>
            </div>


        </div>
    );
}

export default HomeImage;
