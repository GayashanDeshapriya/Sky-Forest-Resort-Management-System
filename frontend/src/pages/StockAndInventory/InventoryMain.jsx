import React from 'react';
import './Invstyle.css';
import addimage from '../../assets/inventory.png';
import manageimage from '../../assets/kitchen.png';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';



function InventoryMain() {
  return (
    <div className="Invmain">
         <div className='headbar'>
      INVENTORY MANAGEMENT
    </div>
       
       <div>
   
 <Grid container>

                  <div className='landing_img_inv'style={{ position: 'relative' }}>
                      <Grid justify="row" alignItems="center" >
                        <Grid item>
                          <img src={addimage} alt="" className='image01-inv' />
                        </Grid>
                        <Grid item>
                          <Button 
                            alignItems="center" 
                            href="/inventoryRoom" 
                            style={{
                              backgroundColor: "#0094A8",
                              color: "#fff",
                              borderRadius: "15px",
                              bottom: '10px',  // change this value to adjust the vertical position
                          left: '50%',
                          transform: 'translateX(-50%)',
                            }} 
                          >
                            ROOM INVENTORY MANAGE
                          </Button>
                        </Grid>
                      </Grid>
                    </div>

                    <div className='landing_img_inv' style={{ position: 'relative' }}>
                      <img src={manageimage} alt="" className='image01-inv' />
                      <Button 
                        href="/inventoryKitchen" 
                        style={{
                          backgroundColor: "#0094A8", 
                          color: "#fff", 
                          borderRadius: "15px",
                          position: 'absolute',
                          bottom: '10px',  // change this value to adjust the vertical position
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        KITCHEN STOCK
                      </Button>
                    </div>

         
         

      </Grid>
    </div>
  </div>
)
}
export default InventoryMain;

