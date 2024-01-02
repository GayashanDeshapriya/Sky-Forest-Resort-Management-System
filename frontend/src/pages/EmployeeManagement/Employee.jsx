import React, { useState } from "react";
import './empstyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Employee() {
  const [values, setValues] = useState({
    empid: "",
    empname: "",
    NIC: "",
    address: "",
    email: "",
    phone: "",
    jobtype: "",
    basicsalary:"",
    
  });

  const navigate = useNavigate();


  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  }             
 
  const addEmployee = (e) => {
    e.preventDefault();
    let EmployeeData = {
      empid: values.empid,
      empname: values.empname,
      NIC: values.NIC,
      address: values.address,
      email: values.email,
      phone: values.phone,
      jobtype: values.jobtype,
      basicsalary: values.basicsalary
      

    }

    console.log(EmployeeData);

    axios.post("http://localhost:9005/employee/add-employee", EmployeeData)
      .then((response) => {
        console.log(response.data.data);
        alert("Successfully Recorded")
        navigate('/EmpDetailTable');
      })
      .catch((error) => {
        console.log(error);
        alert("UnSuccessful Attempt")
      })
  }

  return (
    <div>
      <div className='headbar'>
      EMPLOYEE MANAGEMENT
    </div>
    
      <div class="form-container-emp">
        <form class="register-form">

        <label className='lbl'>Employee ID:</label>
          <input type="text" 
            required
            class="form-field"
            placeholder="M1000"
            name="empid"
            onChange={handleAddData}
            value={values.empid}
          />

          <label className="lbl">Employee Name:</label>
          <input
            required
            className="form-field" // Changed 'class' to 'className'
            type="text"
            placeholder="Dewmini P.W.K"
            name="empname"
            onChange={handleAddData}
            value={values.empname}
            minLength={3} // add 'minLength' 
            maxLength={20} // add 'maxLength'
            title="Please enter a valid employee name between 3 and 20 characters." // Clarified title text
          />


          <label className='lbl'>NIC:</label>
          <input
            required
            class="form-field"
            type="text"
            placeholder="996745230V"
            name="NIC"
            onChange={handleAddData}
            value={values.NIC}
          />

           <label className='lbl'>Address:</label>
           <input
            class="form-field"
            type="text"
            placeholder="No1,Street,City,Country"
            name="address"
            onChange={handleAddData}
            value={values.address}
          />

          <label className='lbl'>E-mail Address :</label>
          <input
            class="form-field"
            type="text"
            placeholder="123@gmail.com"
            name="email"
            onChange={handleAddData}
            value={values.email}
          />

          <label className='lbl'>Primary Phone:</label>
          <input
            className="form-field"
            type="text"
            placeholder="(+94)702321050"
            name="phone"
            onChange={handleAddData}
            value={values.phone}
            
          />
 
         

          <label className='lbl'>Job Title:</label>
          <input
            className="form-field"
            type="text"
            placeholder="Manager"
            name="jobtype"
            onChange={handleAddData}
            value={values.type}
          />

           <label className='lbl'>Basic Salary:</label>
          <input
            className="form-field"
            type="text"
            placeholder="Rupees"
            name="basicsalary"
            onChange={handleAddData}
            value={values.hrRate}
          />

      <div className="btngroup">
            <button className="btn btn-danger" onclick="document.getElementById('myInput').value = ''">
              Reset
            </button>
            <button onClick={addEmployee}  class="btn btn-success" type = "submit"  >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
   
  );
}



export default Employee;
