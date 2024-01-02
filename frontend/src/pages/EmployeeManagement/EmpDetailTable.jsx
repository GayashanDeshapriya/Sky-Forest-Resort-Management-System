import React, { useEffect, useState } from 'react';
import './empstyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Link } from 'react-router-dom';


function EmployeeDetailTable() {
  const navigate = useNavigate();

  const [Employee, setEmployee] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getEmployee = async () => {
    try {
      const response = await axios.get("http://localhost:9005/employee/");
      setEmployee(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEmployee();
  }, []);

  const onDeleteHandle = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9005/employee/delete/${id}`);
      console.log(response.data);
      getEmployee();
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateEmployee = (id) => {
    let path = `/ManageEmployee/${id}`;
    navigate.push(path);
  }

  return (
    <div>
      <div className='headbar'>
      EMPLOYEE MANAGEMENT
    </div>
      <div className="search-bar">
        <h4>Search</h4>
        <input type="text" placeholder="Employee ID" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="tablealign-inv">
        <table className="table-Inv">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>NIC</th>
              <th>Address</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>Job Type</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Employee && Employee.filter(val => {
              if(searchTerm === ''){
                return val;
              }
              else if(
                val.empid.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return val;
              }
              else{
                console.log("No Value");
              }
            }).map((view) => (
              <tr key={view._id}>
                <td>{view.empid}</td>
                <td>{view.empname}</td>
                <td>{view.NIC}</td>
                <td>{view.address}</td>
                <td>{view.email}</td>
                <td>{view.phone}</td>
                <td>{view.jobtype}</td>
                <td>{view.basicsalary}</td>
                <td>
                  <Grid container>
                    <Grid item>
                      <button className='delete-inv' aria-label="delete" onClick={() => onDeleteHandle(view._id)} >
                        Delete
                      </button>
                    </Grid>
                    <Grid item>
                        <button  className='edit-inv'><Link to={`/ManageEmployee/${view._id}`}  aria-label="edit">
                          Edit
                        </Link>
                        </button>
                      </Grid>
                  </Grid>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeDetailTable;

