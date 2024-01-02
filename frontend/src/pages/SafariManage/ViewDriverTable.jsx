import React, { useEffect, useState } from 'react';
import "./safaristyle.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Link } from 'react-router-dom';


function DriverTable() {
  const navigate = useNavigate();

  const [Driver, setDriver] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getDriver = async () => {
    try {
      const response = await axios.get("http://localhost:9005/Driver/");
      setDriver(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDriver();
  }, []);

  const onDeleteHandle = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9005/Driver/delete/${id}`);
      console.log(response.data);
      getDriver();
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateKitchenNavigate = (id) => {
    let path = `/SafariManage/${id}`;
    navigate.push(path);
  }

  return (
    <div>
      <div className='headbar'>
      SAFARI MANAGEMENT
    </div>
      <div className="search-bar">
        <h4>Search Driver</h4>
        <input type="text" placeholder="Driver ID" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="tablealign-inv">
        <table className="table-Inv">
          <thead>
            <tr>
              <th>Driver ID</th>
              <th>Name</th>
              <th>NIC</th>
              <th>Licence No</th>
              <th>Contact No</th>
              <th>Address</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {Driver && Driver.filter(val => {
              if(searchTerm === ''){
                return val;
              }
              else if(
                val.driver_id.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return val;
              }
              else{
                console.log("No Value");
              }
            }).map((view) => (
              <tr key={view._id}>
                <td>{view.driver_id}</td>
                <td>{view.name}</td>
                <td>{view.nic}</td>
                <td>{view.licence_no}</td>
                <td>{view.contact_no}</td>
                <td>{view.address}</td>
                <td>{view.date}</td>
                <td>
                  <Grid container>
                    <Grid item>
                      <button className='delete-inv' aria-label="delete" onClick={() => onDeleteHandle(view._id)} >
                        Delete
                      </button>
                    </Grid>
                    <Grid item>
                        <button  className='edit-inv'><Link to={`/DriverManage/${view._id}`}  aria-label="edit">
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



export default DriverTable;