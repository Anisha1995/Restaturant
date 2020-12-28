import React from 'react';
import "./Login.css"
import { Link} from "react-router-dom"

function Loginform() {
    return (
    
            <div class="loginbg">
                <br></br>
                <div class="loginform">
                <div>
            <label><b>Username</b></label>
			<input type="text" placeholder="Enter Username" name="uname" required />
            </div>

            <div>
                 <label><b>Password</b></label>
			    <input type="password" placeholder="Enter Password" name="psw" required />
            </div>
                <div>
                <label>
			    <input type="checkbox"  name="remember" /> Remember me</label>  
                </div>
                <div>
                <Link to="/menu">
                    <button class="loginbutton" type="submit" >LOGIN</button>
                </Link>
             
                </div>
                </div>
            
            </div>
               
        
    );
}

export default Loginform;
