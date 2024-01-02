import React from 'react';

import './safaristyle.css';
import img from "../../assets/add-driver-img.jpg";
import img1 from "../../assets/add-vehicle-img.jpg";
import img2 from "../../assets/driver-details-img.jpg";
import img3 from "../../assets/vehicle-details-img.jpg";
import img4 from "../../assets/generate-report-img.png";
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';



function SafariLandingpage() {
     

  return (
                   
   <div> 
      <div className='headbar'>
      SAFARI MANAGEMENT
    </div>    
    <Grid container>
         <div className="safari-landing-image "style={{ position: 'relative' }}>
            <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img} alt="" className='image01' />
                 </Grid>
               
                 <Grid item>
                       <Button  href="/AddDriver" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                        
                      }}>
                           Add Drivers
                       </Button>
                  </Grid>
               
             </Grid>
         </div>
 
          <div className="safari-landing-image " style={{ position: 'relative' }}>
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img1} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button  href="/AddVehicle" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                           Add Vehicles   
                       </Button>
                </Grid>
              </Grid>
         </div>
 
       <div className="safari-landing-image "style={{ position: 'relative' }}>
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img2} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button href="/DriverTable" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                           View Driver Details
                       </Button>
                </Grid>
              </Grid>
         </div>
 
         <div className="safari-landing-image "style={{ position: 'relative' }}>              
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img3} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button  href="/VehicleTable" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                             View Vehicle Details
                       </Button>
                </Grid>
              </Grid>
         </div>
       
        <div className = "safari-landing-image"style={{ position: 'relative' }}>
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img4} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button href="/SafariViewReport" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                               Generate Report
                       </Button>
                </Grid>
              </Grid>
         </div>
          
              </Grid>
           </div>
      
     )
             
          
 }
 
 export default  SafariLandingpage