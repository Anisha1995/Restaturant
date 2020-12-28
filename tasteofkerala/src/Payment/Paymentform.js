import React from 'react';
import "./Payment.css"

function Paymentform() {
    return (
    
            <div class="paybg">
                <br></br>
                <div class="formpay">
                <label for="cname">Name on Card</label>
               <div>
              
               <input type="text" id="cardname" name="cardname" placeholder="John More Doe" />
               </div>
               <label for="ccnum">Credit card number</label>
               <div>
                 <input type="text" id="cardnumber" name="cardnumber" placeholder="1111-2222-3333-4444" /> 
               </div>
               <label for="expmonth">Exp Month</label>
               <div>
                    <input type="text" id="month" name="month" placeholder="September" />
               </div>
               <label for="expyear">Exp Year</label>
               <div>
                
                  <input type="text" id="year" name="year" placeholder="2018" />
               </div>
               <label for="cvv">CVV</label>
                <div>
               
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
                </div>
                <div>
                <button class="payment" type="submit" >Payment</button>
                </div>
                </div>
             
           
         </div>

          
    );
}

export default Paymentform;
