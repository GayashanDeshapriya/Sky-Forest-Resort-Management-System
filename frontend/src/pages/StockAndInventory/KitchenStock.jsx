import React from 'react';
import './Invstyle.css';
import logo from '../../assets/logo.jpg';
import addimage from '../../assets/kitchenstock.png';
import manageimage from '../../assets/managestock.png';
import reportimage from '../../assets/stockreport.png';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';


function InventoryKitchen() {
    return (
      <div className="Invmain">
        <div className='headbar'>
      INVENTORY MANAGEMENT
    </div>
        <Grid container>

<div className='landing_img_inv'style={{ position: 'relative' }}>
   <Grid justify="row" alignItems="center" >
         <Grid item>
              <img src={addimage} alt="" className='image01-inv' />
         </Grid>
      
         <Grid item>
              <Button alignItems="center" variant="outlined"  href="/KitchenStockAdd"
              style={{
                backgroundColor: "#0094A8", 
                color: "#fff", 
                borderRadius: "15px",
                position: 'absolute',
                bottom: '10px',  // change this value to adjust the vertical position
                left: '20%',
                transform: 'translateX(-50%)',
              }}>
                  Add a Stock Item
              </Button>
         </Grid>
       </Grid>
      </div>
  
  <div className='landing_img_inv'style={{ position: 'relative' }}>
     <Grid justify="row" alignItems="center" >
        <Grid item>
              <img src={manageimage} alt="" className='image01-inv' />
        </Grid>
    
        <Grid item>
              <Button alignItems="center" variant="outlined" href="/KitchenTable"
              style={{
                backgroundColor: "#0094A8", 
                color: "#fff", 
                borderRadius: "15px",
                position: 'absolute',
                bottom: '10px',  // change this value to adjust the vertical position
                left: '20%',
                transform: 'translateX(-50%)',
              }}>
                  Manage Stock Item
              </Button>
       </Grid>
     </Grid>    
   </div>
     
   <div className='landing_img_inv'style={{ position: 'relative' }}>
     <Grid justify="row" alignItems="center" >
        <Grid item>
              <img src={reportimage} alt="" className='image01-inv' />
        </Grid>
    
        <Grid item>
              <Button href="/KitchenReport" 
              style={{
                backgroundColor: "#0094A8", 
                color: "#fff", 
                borderRadius: "15px",
                position: 'absolute',
                bottom: '10px',  // change this value to adjust the vertical position
                left: '20%',
                transform: 'translateX(-50%)',
              }}>
                  View Stock Report
              </Button>
       </Grid>
     </Grid>
    </div>          
  </Grid>
</div>
)
}

  export default InventoryKitchen;