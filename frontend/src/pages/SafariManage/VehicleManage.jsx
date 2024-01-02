import React, { useEffect, useState } from "react";
import "./safaristyle.css";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";


function VehicleManage() {
  
  const navigate = useNavigate();

  const [vehicle_id, setvehicle_id] = useState('');
  const [registration_no, setregistraton_no] = useState('');
  const [category, setcategory] = useState('');
  const [fuel_type, setfuel_type] = useState('');
  const [description, setdescription] = useState('');
  const [date, setdate] = useState('');
  
  
  const [showNotification, setNotification] = useState("");

  const {id} = useParams();

  const getSelectedVehicle = () => {
    axios.get(`http://localhost:9005/Vehicle/vehicle/`+id)
      .then((response) => {
        console.log(response);
      setvehicle_id(response.data.vehicle_id);
      setregistraton_no(response.data.registration_no);
      setcategory(response.data.category);
      setfuel_type(response.data.fuel_type);
      setdescription(response.data.description);
      setdate(response.data.date);
     
  
      })
  }

  useEffect(() => {
    getSelectedVehicle();
  }, []);

  const updateVehicleDetails = (e) => {
    e.preventDefault();

    let updateData = {
      vehicle_id: vehicle_id,
      registration_no: registration_no,
      category: category,
      fuel_type: fuel_type,
      description: description,
      date: date,
      
    }

    axios.put(`http://localhost:9005/Vehicle/update/`+id,updateData)
      .then((response) => {
        console.log("updated successfully");
        navigate.push("/Vehicle Table");
        setNotification("Vehicle Updated!!!");
      })
      .catch((error) => {
        console.log(error);
        setNotification("Error in Updating vehicle!");
      })
  }
  return (
    <div className="safarimain">
      <div className='headbar'>
      SAFARI MANAGEMENT
    </div>
         <h2 class="title-inv">Edit Vehicle</h2>
      <div class="form-container-inv">        
    
       <form class="Item-form-inv">
         
        <label className='lbl-inv'>Vehicle Id</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="VehicleId"
            name="vehicle_id"
            onChange={(e) => setvehicle_id(e.target.value)}
            value={vehicle_id}
          />

           <label className='lbl-inv'>Registration No</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Registration No"
            name="registration_no"
            onChange={(e) => setregistraton_no(e.target.value)}
            value={registration_no}
          />
         

       <label className='lbl-inv'>Category</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Category"
            name="category"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />

        <label className='lbl-inv'> Fuel Type </label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Fuel Type"
            name="fuel_type"
            onChange={(e) => setfuel_type(e.target.value)}
            value={fuel_type}
          />
    
       <label className='lbl-inv'>Description</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Description"
            name="description"
            onChange={(e) => setdescription(e.target.value)}
            value={description}
          />
          
          
          <label className='lbl-inv'>Date</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Date"
            name="date"
            onChange={(e) => setdate(e.target.value)}
            value={date}
          />
        

  {/* Reset Button */}
          <div className="btngroup-inv">
            <button className="form-field cancel-inv" onclick="document.getElementById('myInput').value = ''">
              Reset
              </button>
    {/* Submit Button */}
              <button class="form-field submit-inv" onClick={updateVehicleDetails}>
                    Submit
             </button>
              
          </div>
          {showNotification && <div className="notification" style={{fontSize: "20px"}}>Vehicle Updated!!</div>}
        </form>
      </div>
    </div>
  );
}


export default VehicleManage;