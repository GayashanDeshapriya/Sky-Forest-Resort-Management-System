import React from "react";
import "./empstyle.css";
//import logo from "../../assets/logo.png";
import Button from '@mui/material/Button';
import { Container, Grid } from '@mui/material';
import { FaAllergies, FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function useHandleButtonClick(path) {
    let navigate = useNavigate();
    function handleButtonClick() {
      navigate(path);
    }
    return handleButtonClick;
}

function EmpViewReport() {

    const handleAttendanceButtonClick = useHandleButtonClick('/AttendanceReport');
    const handleDetailsButtonClick = useHandleButtonClick('/EmpDetailReport');

    return (
        <div>
          <div className='headbar'>
      EMPLOYEE MANAGEMENT
    </div>
          <div className="empReport">
            
            
            <div className="buttonPosition-emp">
              <button type="button" className="ReportButton-emp" onClick={handleDetailsButtonClick}>
                <span className="button-text-emp">View All Employee Details</span>
              </button>
              <button type="button" className="ReportButton-emp" onClick={handleAttendanceButtonClick}>
                <span className="button-text-emp">View All Attendance Details</span>
              </button>
            </div>            
          </div>
        </div>
    )
}

export default EmpViewReport;

