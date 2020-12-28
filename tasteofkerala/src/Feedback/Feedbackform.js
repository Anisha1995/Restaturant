import React from 'react';
import "./Feedback.css"


function Feedbackform() {
    return (
        <div class="feedbg">
              <br></br>
               <br></br>
             	<div class="one">
                    <div class="formhead">
                    <p>HOW DO WE DO??</p>
                    <p>Please pick up a number to rate us...</p>
                    </div>
               
                 <label><b>Service</b></label>
				  <div class="checkboxes">

				    <label><input type="checkbox" id="x" /> <span>1</span></label>
				    <label><input type="checkbox" id="y" /> <span>2</span></label>
				    <label><input type="checkbox" id="z" /> <span>3</span></label>
				    <label><input type="checkbox" id="x" /> <span>4</span></label>
				    <label><input type="checkbox" id="y" /> <span>5</span></label>
			      </div>
                  <br></br>
				  <label><b>Food</b></label>
				   <div class="checkboxes">

			    <label><input type="checkbox" id="x" /> <span>1</span></label>
			    <label><input type="checkbox" id="y" /> <span>2</span></label>
			    <label><input type="checkbox" id="z" /> <span>3</span></label>
			    <label><input type="checkbox" id="x" /> <span>4</span></label>
			    <label><input type="checkbox" id="y" /> <span>5</span></label>
			   </div>
               <br></br>
				  <label><b>Cleaniness</b></label>
                <div class="checkboxes">

			    <label><input type="checkbox" id="x" /> <span>1</span></label>
			    <label><input type="checkbox" id="y" /> <span>2</span></label>
			    <label><input type="checkbox" id="z" /> <span>3</span></label>
			    <label><input type="checkbox" id="x" /> <span>4</span></label>
			    <label><input type="checkbox" id="y" /> <span>5</span></label>
			   </div>
               <br></br>
               <label><b>Comments or Suggestions</b></label>
                <div>
                     <textarea name="message" rows="5" cols="30"></textarea> 
                </div>
                <br></br>
                 <label><b>Name</b></label>
                <div>
                <input type="text" placeholder="Enter Name" name="name" required/>
                </div>
                <br></br>
               
                 <label><b>Email</b></label>
                <div>
                 <input type="text" placeholder="Enter email" name="email" required />  

                </div>
                <br></br>
                    
			   <button class="commentbtn" type="submit" >Submit</button> 
			      
			      
                 </div>
        </div>
    );
}

export default Feedbackform;
