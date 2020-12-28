import React from 'react';
import "./home.css"

function HomeImage (props) {
    return (
        
        <div class="imagescroll">
            
            <img  src={props.abc} alt="menu" ></img>
        </div>
    );
}

export default HomeImage;
