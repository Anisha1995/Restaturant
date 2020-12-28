import React from 'react';
import "./Contact.css"


function Contactform() {
    return (
        <div class="contactbg">
                 <br></br>
               <br></br>
               
             	<div class="contactform">
                 <div class="formhead">
                    <p>Please take amount to complete the section below</p>
                    <p>We look forward from hearing from you</p>
                </div>
                 <label><b>Name</b></label>
                <div>
                <input type="text" placeholder="Enter Name" name="name" required/>
                </div>
                <br></br>
               
                 <label><b>Number</b></label>
                <div>
                 <input type="text" placeholder="Enter number" name="email" required />  

                </div>
                <br></br>
                <br></br>
               
                 <label><b>Email</b></label>
                <div>
                 <input type="text" placeholder="Enter email" name="email" required />  

                </div>
                <br></br>
                
               <label><b>Message</b></label>
                <div>
                     <textarea name="message" rows="5" cols="30"></textarea> 
                </div>
                <br></br> 
			   <button class="commentbtn" type="submit" >Send</button> 

                 </div>
        </div>

         );
        }

export default Contactform;
        