import React from 'react';

import './empstyle.css';
import img from "../../assets/addemp.png";
import img1 from "../../assets/manageEmployee.png";
import img2 from "../../assets/leavemanagement.png";
import img3 from "../../assets/attendance.png";
import img4 from "../../assets/viewreport1.png";
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';



function EmployeeLandingpage() {
     

  return (
                   
   <div> 
      <div className='headbar'>
      EMPLOYEE MANAGEMENT
    </div>    
    <Grid container>
         <div className="emp-landing-image "style={{ position: 'relative' }}>
            <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img} alt="" className='image01' />
                 </Grid>
               
                 <Grid item>
                       <Button  href="/Employee" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                        
                      }}>
                           Add a Employee
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
                       <Button  href="/EmpDetailTable" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                           Manage Employee    
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
                       <Button href="/SalaryCal" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                           Calculate Salary
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
                       <Button  href="/Attendance" alignItems="center" variant="outlined"
                       style={{
                        backgroundColor: "#0094A8", 
                        color: "#fff", 
                        borderRadius: "15px",
                        position: 'absolute',
                        bottom: '10px',  // change this value to adjust the vertical position
                        left: '20%',
                        transform: 'translateX(-50%)',
                      }}>
                             Attendance
                       </Button>
                </Grid>
              </Grid>
         </div>
       
        <div className = "emp-landing-image"style={{ position: 'relative' }}>
              <Grid justify="row" alignItems="center" >
                 <Grid item>
                       <img src={img4} alt="" className='image01' />
                 </Grid>
             
                 <Grid item>
                       <Button href="/EmpViewReport" alignItems="center" variant="outlined"
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
 
 export default  EmployeeLandingpage