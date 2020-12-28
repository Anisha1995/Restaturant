import React from 'react';
import "./home.css"

function Table (props) {
    return (
        <div class='blue-column'>

         <table id="specialdish" >
            <tr>
				 <th>Special</th> 
			</tr>
            <tr>
			    <td>BREAKFAST</td>
                <td>Appam Puttu (Rice and Wheat),Idiyappam,Kappa Udachath,Chappathi, Porotta</td>
			</tr>
            <tr>
			    <td>VEG CURRY</td>
                <td>Egg Roast, Veg Kuruma, Green Peas Curry</td>
			</tr>
            <tr>
                <td>NON-VEG CURRY</td>
                <td>Tender Naadan Chicken Fry, Fish Head Curry</td>
            </tr>
        
			<tr>
                <td>EVENING SNACKS</td>
                <td>Tea,Samosa</td> 
		    </tr>
        </table>
        
		<h1>Our Hours</h1>
				    <div class="our-hour">
				    	<p><strong>MONDAY - FRIDAY : 7 AM TO 11 PM</strong></p>
				    	<p><strong>SATURDAY  : 9 AM TO 2 PM</strong></p>
				    	<p><strong>SUNDAY : 9 AM TO 12 PM</strong></p>
					</div>				
        </div>
    );
}

export default Table ;
