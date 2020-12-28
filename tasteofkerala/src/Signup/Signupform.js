import React from 'react';
import "./Signup.css"
import { Link } from "react-router-dom";

function Signupform() {
    return (
        <div class="Signupbg">
               <br></br>
               <br></br>
             	<div class="signupform">
                     
                 <div class="formhead1">
                 
                    <p>Sign up</p>
                    <p>Please fill in the form to create an account</p>
                </div>
                 <label><b>First Name</b></label>
                <div>
                <input type="text" placeholder="Enter First Name" name="name" required/>
                </div>
                <label><b>Last Name</b></label>
                <div>
                <input type="text" placeholder="Enter Last Name" name="name" required/>
                </div>
               <label><b>Number</b></label>
                <div>
                 <input type="text" placeholder="Enter number" name="email" required />  

                </div>
                <label><b>Address</b></label>
                <div>
                <textarea name="message" rows="5" cols="30"></textarea>   

                </div>
                <label><b>Zip Code</b></label>
                <div>
                 <input type="text" placeholder="Enter zipcode" name="email" required />  
                </div>
                <label><b>Username</b></label>
                <div>
                 <input type="text" placeholder="Enter username" name="email" required />  
                </div>
                <label><b>Email</b></label>
                <div>
                 <input type="text" placeholder="Enter email" name="email" required />  
                </div>
                <label><b>Password</b></label>
                <div>
                 <input type="password" placeholder="Enter password" name="email" required />  
                </div>
                <label><b> Repeat Password</b></label>
                <div>
                 <input type="password" placeholder="Enter  password" name="email" required />  
                </div>
                <Link to="/login"> 
                <button class="commentbtn"  >Sign Up</button> 
                </Link>
			

                 </div>
        </div>

         );
        }

export default Signupform;
        