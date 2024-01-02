import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function AllPayment() {
  const [payment, setpayment] = useState([]);
    
        function getPayment () {
        axios.get("http://localhost:9005/payment/").then((res) =>{
            console.log(res);
            setpayment(res.data);
        }).catch((err)=>{
            alert(err.message);
        })

    }
    useEffect(() =>{
    getPayment();

     },[])

     // Delete data
    function deletedata(i) {
    if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
      axios
        .delete("http://localhost:9005/payment/delete/" + i._id)
        .then(() => {
        getPayment ();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  return (
    <table class="table">
      <thead>
        <tr>
          
          <th>Amount</th>
          <th>packages </th>
          <th>price</th>
          
        </tr>
      </thead>
      <tbody>
        {payment.map(pay => (
          <tr key={pay._id}>
            
            <td>{pay.name}</td>
            <td>{pay.packages}</td>
            <td>{pay.price}</td>
            
            <td><Link to={`/EditPayment/${pay._id}`}><button className='btn btn-success' type='submit'>Edit</button></Link></td>
            <td><button type="button" class="btn btn-danger btn-lg" onClick={(()=>deletedata(pay))}>Remove</button></td>
          </tr>
        ))}
      </tbody>
      
    </table>
  );
}

export default AllPayment;
