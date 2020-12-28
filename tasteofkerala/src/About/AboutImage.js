import React from 'react';

function AboutImage(props) {
    return (
        <div class="aboutimage">
            
            <img  src={props.abc} alt="aboutresstaturant" ></img>
            <div class="aboutsection">
            <p>Taste of kerala is one of the top restaturant in Thunderbay,serving up an extensive menu of authentic south Indian cuisine for anyone and everyone to enjoy.</p>
           <p> Using only the freshest of ingredients personally picked out,and preparing tasty dishes with authentic recipies.</p>
            <p>You are sure to love Taste of Kerala's amazing food at reasonable prices.</p>
            <p>Come and enjoy your favourite south Indian dishes and more. No matter what time of day, or where you want to eat, Tate of Kerala packs the south Indian flavour! </p>
        </div>
        </div>
    );
}

export default AboutImage;
