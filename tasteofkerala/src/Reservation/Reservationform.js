import React from 'react';
import "./Reservation.css"

function Reservationform (props) {
    return (
        <div class='reservation'>
                  <div class="makereservation">

                            <div id="resev">
                                <h2>MAKE YOUR RESERVATION</h2>
                                <div id="frm">
                                
                                <label for="name"><b>Name</b></label>
                                <input type="text" placeholder="Enter your name" id="name" name="name" required/>
    
                                <label><b>Email</b></label>
                                <input type="text" placeholder="abc@abc.com" id="email" name="email" required />                    
                                
                                <label><b>People</b></label>
                                <br></br>
                                <input type="number" placeholder="Enter number of People" id="people" name="people" required/>
                                <br></br>
                                <label><b>Number</b></label>
                                <input type="text" placeholder="Enter your phone number" id="number" name="number" required />
                               
                                <label><b>Date</b></label>
                                <br></br>
                                <input type="date" name="date" id="date" required />

                                <label><b>Jazz Perfomance</b></label>
                                <br></br>
                                <label class="radcontainer">Yes
                                <input type="radio" checked="checked" name="jazz_perfomance" id="jazz_perfomance" />
                                    <span class="checkmark"></span>
                                </label>
                            
                               <label class="radcontainer">No
                                <input type="radio" name="jazz_perfomance" id="jazz_perfomance" />
                                <span class="checkmark"></span>
                                </label>
                                <div>
                                    <button class="btn">BOOK</button>
                                    
                                </div>
                                </div>
                               
    
                            </div>
                       
                    </div>

        
                    <div class="opentime">
                            <div id="resev">
                                <h2>OPEN TIME</h2>
                                 <div id="frm">
                                    <p><strong>MONDAY - FRIDAY</strong></p>
                                    <p><strong> 7 AM TO 11 PM</strong></p>
                                    <p><strong>SATURDAY</strong></p>
                                    <p><strong> 9 AM TO 2 PM</strong></p>
                                    <br></br>
                                    <p><strong>SUNDAY</strong></p>
                                    <p><strong> 9 AM TO 12 PM</strong></p>
                                    <br></br>
                                </div>
                                
                            </div>

                    </div>

                    </div>
    );
}

export default Reservationform ;
