import React, { useState } from "react";
import "./empstyle.css";

import { Link } from "react-router-dom";
import axios from 'axios';

function Attendance() {
  const [values, setValues] = useState({
    empid: "",
    date: "",
    shift: "",
  });

  const handleAddData = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
       
  const addAttendance = (e) => {
    e.preventDefault();
    const attendanceData = {
      empid: values.empid,
      date: values.date,
      shift: values.shift,
    };

    axios.post("http://localhost:9005/attendance/add-attendance", attendanceData)
      .then((response) => {
        console.log(response.data.data);
        alert("Successfully Recorded");
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessful Attempt");
      });
  };
      
  return (
    <div>
      <div className='headbar'>
      EMPLOYEE MANAGEMENT
    </div>
      <div className="form-container-emp">
        <form className="register-form1">
          <input
            className="form-field"
            type="text"
            placeholder="Please enter your Employee ID"
            name="empid"
            onChange={handleAddData}
            value={values.empid}
          />

          <input
            className="form-field"
            type="date"
            placeholder="Please enter date today"
            name="date"
            onChange={handleAddData}
            value={values.date}
          />

          <label className="lable-shift">
            <input
              className="form-checkbox"
              type="checkbox"
              name="shift"
              value="day"
              checked={values.shift === "day"}
              onChange={handleAddData}
            />
            Day Shift
          </label>

          <label className="lable-shift">
            <input
              className="form-checkbox"
              type="checkbox"
              name="shift"
              value="night"
              checked={values.shift === "night"}
              onChange={handleAddData}
            />
            Night Shift
          </label>

          <div className="btngroup">
            <button className="delete-inv" onClick={() => setValues({ empid: "", date: "", shift: "" })}>
              Reset
            </button>
            <button onClick={addAttendance} className="edit-inv" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Attendance;
