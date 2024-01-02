import React from 'react';

import './customerstyle.css';
import img from "../../assets/addcus.png";
import img1 from "../../assets/managecus.jpeg";
import img2 from "../../assets/viewcustomerReport.jpg";
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';



function CustomerLandingpage() {
     

  return (
                   
   <div>  
      <div className='headbar'>
      CUSTOMER MANAGEMENT
    </div>    
    <Grid container>
         <div className="emp-landing-image "style={{ position: 'relative' }}>
            <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img} alt="" className='image01' />
                 </Grid>
               
                 <Grid item>
                       <Button  href="/AddCustomer" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                        
                      }}>
                           Add Customer
                       </Button>
                  </Grid>
               
             </Grid>
         </div>
 
          <div className="emp-landing-image " style={{ position: 'relative' }}>
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img1} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button  href="/ViewCustomerTable" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                           Manage Customer    
                       </Button>
                </Grid>
              </Grid>
         </div>

         <div className="emp-landing-image" style={{ position: 'relative' }}>
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img1} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button  href="/AddFeadback" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                           Customer Feadback    
                       </Button>
                </Grid>
              </Grid>
         </div>
 
       
 
         <div className="emp-landing-image "style={{ position: 'relative' }}>              
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img1} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button  href="/CustomerReport" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                             View Report
                       </Button>
                </Grid>
              </Grid>
         </div>
       
        
          
              </Grid>
           </div>
      
     )
             
          
 }
 
 export default  CustomerLandingpage