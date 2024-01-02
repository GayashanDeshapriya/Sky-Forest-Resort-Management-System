import React from "react";
import './customerstyle.css';

import Button from '@mui/material/Button';
import { Container, Grid } from '@mui/material';
import { FaAllergies, FaSearch } from "react-icons/fa";


function CustomerViewReport() {
     


    return (

        <div>
        <div className="empReport">
             
                        <div class="search_box-emp">
                           <input type="search"  placeholder="Search Customer Id" className="inputReportSearch-emp" />
                            
                        </div>
                <div className="buttonPosition-emp">
                   <button type="button" className="ReportButton-emp">
                        <span className="button-text-emp">View Customer Details</span>
                        <span className="button-icon-emp">
                            <ion-icon name="arrow-forward"></ion-icon>
                        </span>
                   </button>

                   <button type="button" className="ReportButton-emp">
                   <span className="button-text-emp">View Feedback Details</span>
                   <span className="button-icon-emp">
                       <ion-icon name="arrow-forward"></ion-icon>
                   </span>
              </button>
                </div>            
         </div>
         </div>
                    
               
             
    )
}
export default CustomerViewReport