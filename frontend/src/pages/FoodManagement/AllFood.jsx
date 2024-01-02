import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Food.css';

function AllFood() {
  const [food, setFood] = useState([]);
    
        function getFood () {
        axios.get("http://localhost:9005/food/").then((res) =>{
            console.log(res);
            setFood(res.data);
        }).catch((err)=>{
            alert(err.message);
        })

    }
    useEffect(() =>{
    getFood();

     },[])

     // Delete data
    function deletedata(i) {
    if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
      axios
        .delete("http://localhost:9005/food/delete/" + i._id)
        .then(() => {
        getFood ();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  return (
    <body>
    <table class="table">
      <thead>
        <tr>
          
          <th>Menu No</th>
          <th>Food 1</th>
          <th>Food 2</th>
          <th>Food 3</th>
          <th>Price</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {food.map(pay => (
          <tr key={pay._id}>
            <td>{pay.menuno}</td>
            <td>{pay.food1}</td>
            <td>{pay.food2}</td>
            <td>{pay.food3}</td>
            <td>{pay.price}</td>
            <td><Link to={`/EditFood/${pay._id}`}><button type='submit'className="btn4">Edit</button></Link></td>
            <td><button type="button" className="btn3 btn-outline-danger btn-sm" onClick={(()=>deletedata(pay))}>Remove</button></td>
          </tr>
        ))}
      </tbody>
    </table><br></br>
    <div class="d-flex justify-content-center">
    <Link to={'/AddFood'}><button type="button" className="btn5 btn-outline-primary btn-lg active">Add Foods</button></Link></div>
    </body>
  );
}

export default AllFood;
