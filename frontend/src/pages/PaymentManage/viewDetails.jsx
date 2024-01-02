import React, {useState} from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/managepay.jpg";
import img2 from "../../assets/reportpay.jpg";
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';

export default function Dashboard(){
    return (
        <div className="Invmain">
             <div className='headbar'>
          PAYMENT MANAGEMENT
        </div>
           
           <div>
       
     <Grid container>
    
                      <div className='landing_img_inv'style={{ position: 'relative' }}>
                          <Grid justify="row" alignItems="center" >
                            <Grid item>
                              <img src={img1} alt="" className='image01-inv' />
                            </Grid>
                            <Grid item>
                              <Button 
                                alignItems="center" 
                                href="/AllPayment" 
                                style={{
                                  backgroundColor: "#0094A8",
                                  color: "#fff",
                                  borderRadius: "15px",
                                  bottom: '10px',  // change this value to adjust the vertical position
                              left: '50%',
                              transform: 'translateX(-50%)',
                                }} 
                              >
                                MANAGE PAYMENT
                              </Button>
                            </Grid>
                          </Grid>
                        </div>
    
                        <div className='landing_img_inv' style={{ position: 'relative' }}>
                          <img src={img2} alt="" className='image01-inv' />
                          <Button className="btn btn-info"
                            href="/reportGen" 
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
                            GENERATE REPORT
                          </Button>
                        </div>
    
             
             
    
          </Grid>
        </div>
      </div>
    )

}