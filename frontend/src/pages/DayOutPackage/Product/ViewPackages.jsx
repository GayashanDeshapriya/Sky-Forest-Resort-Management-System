import { Button } from '@mui/material';
import React from 'react';
import "./Item.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Item = (props) => {
  
  const history = useNavigate();
    const {_id,name,author,description,price,image} = props.book;
    const deleteHandler = async() => {
      await axios.delete (`http://localhost:5000/books/${_id}`)
      await (()=> window.confirm("Are you sure you want to delete this item?"))
      window.location.reload(true)
    //  .then(res=>res.data)
    //  .then(()=> window.confirm("Are you sure you want to delete this item?"))
    // //  .then(()=> history("/"))
    //  .then(()=> history("/products"))
    }
    return (
      <div>
      <div className="headbar">Packages</div>
      
    <div className="card">
        <img src={image} alt={name} />
        <h2>{author}</h2>
        <br></br>
        <h3>{name}</h3>
        <br></br>
        <p>{description}</p>
        <br></br>
        <h3>Rs.{price}</h3>
        <br></br>
        <br></br>
        <Button variant="contained" color="success" LinkComponent={Link} to={`/products/${_id}`} sx={{mt:"auto"}}>Update</Button>
        <Button variant="contained" color="error" onClick={() => {deleteHandler();
        history("/products")}} sx={{mt:'auto'}} 
        
        >Delete</Button>
    </div>
    
    </div>
  )
}

export default Item
