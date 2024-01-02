import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function RoomMain1(){
    return(
        <div className="App">
        <div className="container">
        <br></br><br></br>
        <div className="title">
                   
                    <br></br>
                    <div class="container mt-4 d-flex justify-content-center align-items-center">
                        <div class="row">
                            <div class="col-md-6 d-flex justify-content-center">
                            <Link to={'/AllRoom'}><button class="btn btn-lg btn-primary">View Room Packeges</button></Link>
                            </div>
                        <div class="col-md-6 d-flex justify-content-center">
                            <Link to={'/AddRoom'}><button class="btn btn-lg btn-primary">Add Room Packeges</button></Link>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                            <div class="col-md-6 d-flex justify-content-center">
                            <Link to={'/AllRoom'}><button class="btn btn-lg btn-primary">Manage Room Packeges</button></Link>
                            </div>
                        <div class="col-md-6 d-flex justify-content-center">
                            <Link to={'/RoomReport'}><button class="btn btn-lg btn-primary">Generate Report</button></Link>
                        </div>
                    
            </div>
                        
</div></div></div></div>

    )

}