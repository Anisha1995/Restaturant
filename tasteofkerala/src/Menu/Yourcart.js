import React from 'react';
import  "../Menu/Menu.css";


function Yourcart()
{
    return (
        <div >
            
            <div class="dummy">
           
            </div>
         
            <div class="cartbg">
                <br></br>
                <h1>Your cart</h1>
                <h1>Choose your dishes </h1>
                <form class="fo">
                    <tr>
                        <td>Drink</td>
                        <td>
                        <select id="drinks" name="drinks">
                            <option value=""> Select your drink</option>
                            <option value="none">None</option>
                            <option value="orange juice">Orange juice</option>
                            <option value="Lime Juice">Lime Juice</option>
                            <option value="Watermelon juice with mint and lime">Watermelon juice with mint and lime</option>
                        </select>
                        
                        </td>
                       
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>
                        <input type="number" id="dqty" name="dqty" />
                        </td>
                    </tr>
                    <tr>
                        <td>Snack</td>
                        <td>
                        <select id="snack" name="snack">
                        <option value="">Select your snack </option>
                        <option value="none">None</option>
                        <option value="Fresh Fries">Fresh Fries</option>
                        <option value="Burger">Burger</option>
                        <option value="Samosa">Samosa</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>
                        <input type="number" id="sqty" name="sqty" />
                        </td>
                    </tr>
                    <tr>
                        <td>Veg Starters</td>
                        <td>
                        <select id="vegstr" name="vegstr">
                            <option value="">Select your veg starters</option>
                            <option value="none">None</option>
                            <option value="Appam with stew">Appam with stew</option>
                            <option value="Chapathi with panner masala">Chapathi with panner masala</option>
                            <option value="Masala dosa">Masala dosa</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>
                        <input type="number" id="vqty" name="vqty" />
                        </td>
                    </tr>
                    <tr>
                        <td>Non Veg Starters</td>
                        <td>
                        <select id="nvegstr" name="nvegstr">
                            <option value="">Select your Non veg starters</option>
                            <option value="none">None</option>
                            <option value="Chicken biriyani">Chicken biriyani</option>
                            <option value="Fish Fry">Fish Fry</option>
                            <option value="chicken Fry">chicken Fry</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                       <td>Quantity</td>
                        <td>
                        <input type="number" id="nvqty" name="nvqty" />
                        </td>
                    </tr>
                   
                    
                </form>
               
            </div>
              
        </div>
    
       
        
    );
}

export default Yourcart;
