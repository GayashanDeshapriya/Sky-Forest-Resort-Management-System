import React, { useEffect, useState } from "react";
import "./customerstyle.css";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";


function ManageCustomer() {
  
  const navigate = useNavigate();

  const [ID, setID] = useState('');
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  
  
  const [showNotification, setNotification] = useState("");


  const {id} = useParams();

  const getSelectedCustomer = () => {
    axios.get(`http://localhost:9005/customer/get/`+id)
      .then((response) => {
        console.log(response);
      setID(response.data.ID);
      setname(response.data.name);
      setaddress(response.data.address);
      setEmail(response.data.Email);
      setphone(response.data.phone);
    
      
  
      })
  }

  useEffect(() => {
    getSelectedCustomer();
  }, []);

  const updateCustomerDetails = (e) => {
    e.preventDefault();

    let updateData = {
      ID: ID,
      name: name,
      address: address,
      Email: Email,
      phone:phone,
      
    }

    axios.put(`http://localhost:9005/customer/update/`+id,updateData)
      .then((response) => {
        console.log("updated successfully");
        navigate.push("/CustomerDetailTable");
        setNotification("Customer Updated!!!");
      })
      .catch((error) => {
        console.log(error);
        setNotification("Error in Updating customer!");
      })
  }

  return (
    <div className="Invmain">
         <h2 class="title-inv">Edit Customer Details</h2>
      <div class="form-container-inv">        
    
       <form class="Item-form-inv">
         
        <label className='lbl-inv'> Id</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Id"
            name="ID"
            onChange={(e) => setID(e.target.value)}
            value={ID}
          />

           <label className='lbl-inv'>Name</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
         

        <label className='lbl-inv'> Address </label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Address"
            name="address"
            onChange={(e) => setaddress(e.target.value)}
            value={address}
          />
    
       <label className='lbl-inv'>E mail</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Email"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />

    <label className='lbl-inv'>Contact Number</label>
              <input
                class="form-field-inv"
                type="text"
                placeholder="Phone"
                name="phone"
                onChange={(e) => setphone(e.target.value)}
                value={phone}
              />

  
        
        

  {/* Reset Button */}
          <div className="btngroup-inv">
            <button className="btn btn-danger" onclick="document.getElementById('myInput').value = ''">
              Reset
              </button>
    {/* Submit Button */}
              <button class="btn btn-success" onClick={updateCustomerDetails}>
                    Submit
             </button>
              
          </div>
          {showNotification && <div className="notification" style={{fontSize: "20px"}}>Customer Updated!!</div>}
        </form>
      </div>
    </div>
  );
}


export default ManageCustomer;