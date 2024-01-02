import React, { useState } from "react";
import "./safaristyle.css";
import axios from 'axios';

 

function AddVehicle() {
   
        const [values, setValues] = useState({
          vehicle_id: "",
          registration_no:"",
          category: "",
          fuel_type:"",
          description:"",
          date:""
          
        });

        const [showNotification, setNotification] = useState("");
      
        const handleAddData = (e) => {
          const { name, value } = e.target
          setValues({ ...values, [name]: value});
        }             
       
        const addVehicle = (e) => {
          e.preventDefault();
          let VehicleData = {
            vehicle_id: values.vehicle_id,
            registration_no: values.registration_no,
            category: values.category,
            fuel_type: values.fuel_type,
            description: values.description,
            date: values.date,

            }
      
          console.log(VehicleData);
      
          axios.post("http://localhost:9005/Vehicle/add", VehicleData)
            .then((response) => {
              console.log(response.data.data);
              alert("Successfully added vehicle")
            })
            .catch((error) => {
              console.log(error);
              alert("Error adding vehicle")
            })
        }
      
        return (
          <div className="safarimain">
            <div className='headbar'>
      SAFARI MANAGEMENT
    </div>
            <h2 class="title-inv">Add Vehicle</h2>
            <div className="form-container-inv">
              <form className="Item-form-inv">
                <label className='lbl-inv'>Vehicle ID</label>
                <input
                  className="form-field-inv"
                  type="text"
                  placeholder="Vehicle ID"
                  name="vehicle_id"
                  onChange={handleAddData}
                  value={values.vehicle_id}
                  required
                />
      
                <label className='lbl-inv'>Registration No</label>
                <input
                  className="form-field-inv"
                  type="text"
                  placeholder="Registration No"
                  name="registration_no"
                  onChange={handleAddData}
                  value={values.registration_no}
                  required
                />
      
                <label className='lbl-inv'> Category </label>
                <input
                  className="form-field-inv"
                  type="text"
                  placeholder="Category"
                  name="category"
                  onChange={handleAddData}
                  value={values.category}
                  required
                />
      
                <label className='lbl-inv'>Fuel Type</label>
                <input
                  className="form-field-inv"
                  type="text"
                  placeholder="Fuel Type"
                  name="fuel_type"
                  onChange={handleAddData}
                  value={values.fuel_type}
                  required
                />
      
                <label className='lbl-inv'>Description</label>
                <input
                  className="form-field-inv"
                  type="text"
                  name="description"
                  onChange={handleAddData}
                  value={values.description}
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
                  <button className="form-field cancel-inv" onClick={() => setValues({
                    vehicle_id: "",
                    registration_no: "",
                    category: "",
                    fuel_type: "",
                    description: "",
                    date: "",
                  })}>
                    Clear
                  </button>
                  <button className="form-field submit-inv" onClick={addVehicle} type="submit">
                    Submit
                  </button>
                </div>
                {showNotification && <div className="notification" style={{fontSize: "20px"}}>Vehicle added successfully!</div>}
              </form>
            </div>
          </div>
        );
      }
      
      
      
      
export default AddVehicle

    