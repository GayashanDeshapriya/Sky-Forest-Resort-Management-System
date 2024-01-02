import React, { useState } from "react";
import "./safaristyle.css";
import axios from 'axios';


function AddDriver() {
  const [values, setValues] = useState({
    driver_id: "",
    name: "",
    nic: "",
    licence_no: "",
    contact_no: "",
    address: "",
    date: "",
    
  });

  const [showNotification, setNotification] = useState("");

  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  }             
 
  const addDriver = (e) => {
    e.preventDefault();
    let DriverData = {
      driver_id: values.driver_id,
      name: values.name,
      nic: values.nic,
      licence_no: values.licence_no,
      contact_no: values.contact_no,
      address: values.address,
      date: values.date,
      

    }

    console.log(DriverData);

    axios.post("http://localhost:9005/Driver/add", DriverData)
      .then((response) => {
        console.log(response.data.data);
        alert("Successfully added driver")
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding drivers")
      })
  }

  return (
    <div className="safarimain">
      <div className='headbar'>
      SAFARI MANAGEMENT
    </div>
      <h2 class="title-inv">Add Driver</h2>
      <div className="form-container-inv">
        <form className="Item-form-inv">
          <label className='lbl-inv'>Driver ID</label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Driver ID"
            name="driver_id"
            onChange={handleAddData}
            value={values.driver_id}
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

          <label className='lbl-inv'> NIC </label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="NIC"
            name="nic"
            onChange={handleAddData}
            value={values.nic}
            required
          />

          <label className='lbl-inv'>Licence No</label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Licence No"
            name="licence_no"
            onChange={handleAddData}
            value={values.licence_no}
            required
          />

          <label className='lbl-inv'>Contact No</label>
          <input
            className="form-field-inv"
            type="text"
            name="contact_no"
            onChange={handleAddData}
            value={values.contact_no}
            required
          />
          
          <label className='lbl-inv'>Address</label>
          <input
            className="form-field-inv"
            type="text"
            name="address"
            onChange={handleAddData}
            value={values.address}
            required
            
          />
          
          <label className='lbl-inv'>Date</label>
          <input
            className="form-field-inv"
            type="text"
            name="date"
            onChange={handleAddData}
            value={values.date}
            required
          />
          

          <div className="btngroup-inv">
            <button className="btn btn-danger" onClick={() => setValues({
              driver_id: "",
              name: "",
              nic: "",
              licence_no: "",
              contact_no: "",
              address: "",
              date: "",
            })}>
              Clear
            </button>
            <button className="btn btn-success" onClick={addDriver} type="submit">
              Submit
            </button>
          </div>
          {showNotification && <div className="notification" style={{fontSize: "20px"}}>Driver added successfully!</div>}
        </form>
      </div>
    </div>
  );
}



export default AddDriver;
