import React from 'react';
import  "./Menu.css";


function DishImage()
{
    return (
        <div class="menuhead">
               <h2>Menu</h2>
               <div class="menuimage">
                   <table class="menutable">
                       <tr>
                           <td>

                           <div class="gallery1">
                            <img src="./Images/catagory dishes/drinks.jpg" alt="Cinque Terre" width="600px" height="400px" />
                            <div class="desc">Drinks</div>
                            </div>
                            
                               
                            
                           </td>
                           <td>

                           <div class="gallery1">
                            <img src="./Images/catagory dishes/snacks.png" alt="Cinque Terre" width="600px" height="400px" />
                            <div class="desc">Snacks</div>
                            </div>
                              
                             
                           </td>
                           <td>
                           <div class="gallery1">
                            <img src="./Images/catagory dishes/staters non.PNG" alt="Cinque Terre" width="600px" height="400px" />
                            <div class="desc">Non Veg Starters</div>
                            </div>
                             
                         
                           </td>
                           <td>
                           <div class="gallery1">
                            <img src="./Images/catagory dishes/staters.PNG" alt="Cinque Terre" width="600px" height="400px" />
                            <div class="desc">Veg Starters</div>
                            </div>
                               
                              
                           </td>
                        
                       </tr>
                   </table>
               </div>
        </div>
    
       
        
    );
}

export default DishImage;
