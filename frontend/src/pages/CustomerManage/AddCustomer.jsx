import React, { useState } from "react";
import "./customerstyle.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  const [values, setValues] = useState({
    ID: "",
    name: "",
    address: "",
    Email: "",
    phone: "",
  
    
  });
  const navigate = useNavigate();

  const [showNotification, setNotification] = useState("");

  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  }             
 
  const AddCustomer = (e) => {
    e.preventDefault();
    let CustomerData = {
      ID: values.ID,
      name: values.name,
      address: values.address,
      Email: values.Email,
      phone: values.phone,
      
      

    }
   

    console.log(CustomerData);

    axios.post("http://localhost:9005/customer/add-customer", CustomerData)
      .then((response) => {
        console.log(response.data.data);
        alert("Successfully added customer")
        navigate('/ViewCustomerTable');
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding customer")
      })

      
  }

  return (
    <div className="customermain">
      <h2 class="title-inv">Add Customer</h2>
      <div className="form-container-inv">
        <form className="Item-form-inv">
          <label className='lbl-inv'>Customer ID</label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Customer ID"
            name="ID"
            onChange={handleAddData}
            value={values.ID}
            required
          />

          <label className='lbl-inv'>Name</label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleAddData}
            value={values.name}
            required
          />

          <label className='lbl-inv'> Address </label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleAddData}
            value={values.address}
            required
          />

          <label className='lbl-inv'>Email</label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Email"
            name="Email"
            onChange={handleAddData}
            value={values.Email}
            required
          />

          <label className='lbl-inv'>Phone</label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={handleAddData}
            value={values.phone}
            required
          />
          
        
          

          <div className="btngroup-inv">
            <button className="btn btn-danger" onClick={() => setValues({
              ID: "",
              name: "",
              address: "",
              Email: "",
              phone: "",
              
            })}>
              Clear
            </button>
            <button className="btn btn-success" onClick={AddCustomer} type="submit">
              Submit
            </button>
          </div>
          {showNotification && <div className="notification" style={{fontSize: "20px"}}>Customer added successfully!</div>}
        </form>
      </div>
    </div>
  );
}



export default AddCustomer;
