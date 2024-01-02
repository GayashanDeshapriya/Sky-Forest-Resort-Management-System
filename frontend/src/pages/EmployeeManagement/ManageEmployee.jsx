import React, { useEffect, useState } from "react";
import "./empstyle.css";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";


function ManageEmployee() {
  
  const navigate = useNavigate();

  const [empid, setempid] = useState('');
  const [empname, setempname] = useState('');
  const [NIC, setNIC] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [jobtype, setjobtype] = useState('');
  const [basicsalary, setbasicsalary] = useState('');
  
  const [showNotification, setNotification] = useState("");


  const {id} = useParams();

  const getSelectedEmployee = () => {
    axios.get(`http://localhost:9005/employee/get/`+id)
      .then((response) => {
        console.log(response);
      setempid(response.data.empid);
      setempname(response.data.empname);
      setNIC(response.data.NIC);
      setaddress(response.data.address);
      setemail(response.data.email);
      setphone(response.data.phone);
      setjobtype(response.data.jobtype);
      setbasicsalary(response.data.basicsalary);

      
      
  
      })
  }

  useEffect(() => {
    getSelectedEmployee();
  }, []);

  const updateEmployeeDetails = (e) => {
    e.preventDefault();

    let updateData = {
      empid: empid,
      empname: empname,
      NIC: NIC,
      address: address,
      email: email,
      phone:phone,
      jobtype: jobtype,
      basicsalary: basicsalary
    }

    axios.put(`http://localhost:9005/employee/update/`+id,updateData)
      .then((response) => {
        console.log("updated successfully");
        
        setNotification("Employee Updated!!!");
        
      })
      .catch((error) => {
        console.log(error);
        setNotification("Error in Updating employee!");
      })
  }

  return (
    <div className="Invmain">
      <div className='headbar'>
      EMPLOYEE MANAGEMENT
    </div>
         <h2 class="title-inv">Edit Employee Details</h2>
      <div class="form-container-inv">        
    
       <form class="Item-form-inv">
         
        <label className='lbl-inv'>Employee Id</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemId"
            name="empid"
            onChange={(e) => setempid(e.target.value)}
            value={empid}
          />

           <label className='lbl-inv'>Employee Name</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemName"
            name="empname"
            onChange={(e) => setempname(e.target.value)}
            value={empname}
          />
         

       <label className='lbl-inv'>NIC</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemDescription"
            name="NIC"
            onChange={(e) => setNIC(e.target.value)}
            value={NIC}
          />

        <label className='lbl-inv'> Address </label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemQuantity"
            name="address"
            onChange={(e) => setaddress(e.target.value)}
            value={address}
          />
    
       <label className='lbl-inv'>E-mail</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemCategory"
            name="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />

    <label className='lbl-inv'>Contact Number</label>
              <input
                class="form-field-inv"
                type="text"
                placeholder="itemCategory"
                name="phone"
                onChange={(e) => setphone(e.target.value)}
                value={phone}
              />

    <label className='lbl-inv'>Job Title</label>
              <input
                class="form-field-inv"
                type="text"
                placeholder="itemCategory"
                name="jobtype"
                onChange={(e) => setjobtype(e.target.value)}
                value={jobtype}
              />
        
        <label className='lbl-inv'>Basic Salary</label>
              <input
                class="form-field-inv"
                type="text"
                placeholder="itemCategory"
                name="basicsalary"
                onChange={(e) => setbasicsalary(e.target.value)}
                value={basicsalary}
              />

  {/* Reset Button */}
          <div className="btngroup-inv">
            <button className="btn btn-danger" onclick="document.getElementById('myInput').value = ''">
              Reset
              </button>
    {/* Submit Button */}
    <button class="btn btn-success" onClick={updateEmployeeDetails}> 
    <a href="/EmpDetailTable">Submit</a> 
</button>

              
          </div>
          {showNotification && <div className="notification" style={{fontSize: "20px"}}></div>}
        </form>
      </div>
    </div>
  );
}


export default ManageEmployee;