import React from 'react';
import './Invstyle.css';
import logo from '../../assets/logo.jpg';
import addimage from '../../assets/inv_add_image.png';
import manageimage from '../../assets/inv_manage_image.png';
import reportimage from '../../assets/inv_report_image.png';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';


function InventoryRoomMain() {
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
              <Button alignItems="center" variant="outlined"  href="/inventoryAddRoom"
              style={{
                backgroundColor: "#0094A8", 
                color: "#fff", 
                borderRadius: "15px",
                position: 'absolute',
                bottom: '10px',  // change this value to adjust the vertical position
                left: '20%',
                transform: 'translateX(-50%)',
              }}>
                  Add a item for Room
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
              <Button alignItems="center" variant="outlined" href="/InventoryTable"
              style={{
                backgroundColor: "#0094A8", 
                color: "#fff", 
                borderRadius: "15px",
                position: 'absolute',
                bottom: '10px',  // change this value to adjust the vertical position
                left: '20%',
                transform: 'translateX(-50%)',
              }}>
                  Manage Item
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
              <Button href="/Inventoryreport" 
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

  export default InventoryRoomMain;