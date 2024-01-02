import React from 'react';

import './empstyle.css';
import img from "../../assets/addemp.png";
import img1 from "../../assets/manageEmployee.png";
import img2 from "../../assets/leavemanagement.png";
import img3 from "../../assets/attendance.png";
import img4 from "../../assets/viewreport1.png";
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';
import RoomMain from './Dashbord';



function RoomLanding() {
     

  return (
                   
   <div> 
      <div className='headbar'>
      ROOM MANAGEMENT
    </div>    
    <Grid container>
         <div className="emp-landing-image "style={{ position: 'relative' }}>
            <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img} alt="" className='image01' />
                 </Grid>
               
                 <Grid item>
                       <Button  href="/AllRoom" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                        
                      }}>
                           View Room Packeges
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
                       <Button  href="/AddRoom" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                           Add Room Packeges   
                       </Button>
                </Grid>
              </Grid>
         </div>
 
       <div className="emp-landing-image "style={{ position: 'relative' }}>
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img2} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button href="/AllRoom" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                           Manage Room Packeges
                       </Button>
                </Grid>
              </Grid>
         </div>
 
         <div className="emp-landing-image "style={{ position: 'relative' }}>              
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img3} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button  href="/RoomReport" alignItems="center" variant="outlined"
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
 
 export default  RoomLanding