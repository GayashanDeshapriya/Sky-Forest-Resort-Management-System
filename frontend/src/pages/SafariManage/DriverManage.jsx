import React, { useEffect, useState } from "react";
import "./safaristyle.css";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";


function DriverManage() {
  
  const navigate = useNavigate();

  const [driver_id, setdriver_id] = useState('');
  const [name, setname] = useState('');
  const [nic, setnic] = useState('');
  const [licence_no, setlicence_no] = useState('');
  const [contact_no, setcontact_no] = useState('');
  const [address, setaddress] = useState('');
  const [date, setdate] = useState('');
  
  const [showNotification, setNotification] = useState("");

  const {id} = useParams();

  const getSelectedDriver = () => {
    axios.get(`http://localhost:9005/Driver/driver/`+id)
      .then((response) => {
        console.log(response);
      setdriver_id(response.data.driver_id);
      setname(response.data.name);
      setnic(response.data.nic);
      setlicence_no(response.data.licence_no);
      setcontact_no(response.data.contact_no);
      setaddress(response.data.address);
      setdate(response.data.date);
     
  
      })
  }

  useEffect(() => {
    getSelectedDriver();
  }, []);

  const updateDriverDetails = (e) => {
    e.preventDefault();

    let updateData = {
      driver_id: driver_id,
      name: name,
      nic: nic,
      licence_no: licence_no,
      contact_no: contact_no,
      address: address,
      date: date,
      
    }

    axios.put(`http://localhost:9005/Driver/update/`+id,updateData)
      .then((response) => {
        console.log("updated successfully");
        navigate.push("/DriverTable");
        setNotification("Driver Updated!!!");
      })
      .catch((error) => {
        console.log(error);
        setNotification("Error in Updating driver!");
      })
  }
  return (
    <div className="safarimain">
      <div className='headbar'>
      SAFARI MANAGEMENT
    </div>
         <h2 class="title-inv">Edit Driver</h2>
      <div class="form-container-inv">        
    
       <form class="Item-form-inv">
         
        <label className='lbl-inv'>Driver Id</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="DriverId"
            name="driver_id"
            onChange={(e) => setdriver_id(e.target.value)}
            value={driver_id}
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
         

       <label className='lbl-inv'>NIC</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="NIC"
            name="nic"
            onChange={(e) => setnic(e.target.value)}
            value={nic}
          />

        <label className='lbl-inv'> Licence No </label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Licence No"
            name="licence_no"
            onChange={(e) => setlicence_no(e.target.value)}
            value={licence_no}
          />
    
       <label className='lbl-inv'>Contact No</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Contact No"
            name="contact_no"
            onChange={(e) => setcontact_no(e.target.value)}
            value={contact_no}
          />
          
          <label className='lbl-inv'>Address</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Address"
            name="address"
            onChange={(e) => setaddress(e.target.value)}
            value={address}
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
              <button class="form-field submit-inv" onClick={updateDriverDetails}>
                    Submit
             </button>
              
          </div>
          {showNotification && <div className="notification" style={{fontSize: "20px"}}>Driver Updated!!</div>}
        </form>
      </div>
    </div>
  );
}


export default DriverManage;