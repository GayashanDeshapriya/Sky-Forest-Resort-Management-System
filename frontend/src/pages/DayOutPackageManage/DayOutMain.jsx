import React from 'react'
import './DayOut.css'
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';



const DayOutMain = () => {
  return (
    <div>
    <div className='headbar'>
      Pacakge Management
    </div>
    <img src={require('../../assets/AddDayOut.png')} alt="add Logo" className='add'/>
    <img src={require('../../assets/DayoutPackages.png')} alt="add Logo" className='edit'/>

    <Link to="/AddDayOutPackage">
    <Button variant="contained" className='button1'>Add Package</Button>
    </Link>
    <Link to="/ViewDayOutPackage">
    <Button variant="contained" className='button2'>Packages</Button>
    </Link>
    </div>
  )
}

export default DayOutMain