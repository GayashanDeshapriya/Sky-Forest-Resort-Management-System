import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Food.css';

export default function Dashboard(){
    return(
        <div className="App">
            <div className='headbar'>
        FOOD MANAGEMENT
      </div>
        <div className="container">
        <br></br><br></br>
        <div className="title">
                    <br></br>
                    <div class="container mt-3 d-flex justify-content-center align-items-center">
                        <div class="row">
                            <div class="col-md-6 d-flex justify-content-center">
                            <Link to={'/AllFood'}><button class="btn6 btn-lg btn-primary">Manage Food Menu</button></Link>
                            </div>
                        <div class="col-md-6 d-flex justify-content-center">
                            <Link to={'/FoodReport'}><button class="btn6 btn-lg btn-primary">View Reports</button></Link>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                            <div class="col-md-6 d-flex justify-content-center">
                            <Link to={'/inventoryKitchen'}><button class="btn6 btn-lg btn-primary">Check Kitchen Stock</button></Link>
                            </div>
                        
                    
            </div>
                        
</div></div></div></div>

    )

}