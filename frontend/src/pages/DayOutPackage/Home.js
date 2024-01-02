import React from 'react'
import './home.css'
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
    <div className='headbar'>
      Pacakge Management
    </div>
    <img src={require('./images/add.png')} alt="add Logo" className='add'/>
    <img src={require('./images/packages.png')} alt="add Logo" className='edit'/>

    <Link to="/add">
    <Button variant="contained" className='button1'>Add Package</Button>
    </Link>
    <Link to="/products">
    <Button variant="contained" className='button2'>Packages</Button>
    </Link>
    </div>
  )
}

export default Home
