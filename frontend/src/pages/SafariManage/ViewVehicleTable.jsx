import React, { useEffect, useState } from 'react';
import "./safaristyle.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Link } from 'react-router-dom';


function VehicleTable() {
  const navigate = useNavigate();

  const [Vehicle, setVehicle] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getVehicle = async () => {
    try {
      const response = await axios.get("http://localhost:9005/Vehicle/");
      setVehicle(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVehicle();
  }, []);

  const onDeleteHandle = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9005/Driver/delete/${id}`);
      console.log(response.data);
      getVehicle();
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
        <h4>Search Vehicle</h4>
        <input type="text" placeholder="Vehicle ID" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="tablealign-inv">
        <table className="table-Inv">
          <thead>
            <tr>
              <th>Vehicle ID</th>
              <th>Registration No</th>
              <th>Category</th>
              <th>Fuel Type</th>
              <th>Description</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {Vehicle && Vehicle.filter(val => {
              if(searchTerm === ''){
                return val;
              }
              else if(
                val.vehicle_id.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return val;
              }
              else{
                console.log("No Value");
              }
            }).map((view) => (
              <tr key={view._id}>
                <td>{view.vehicle_id}</td>
                <td>{view.registration_no}</td>
                <td>{view.category}</td>
                <td>{view.fuel_type}</td>
                <td>{view.description}</td>
                <td>{view.date}</td>
                <td>
                  <Grid container>
                    <Grid item>
                      <button className='delete-inv' aria-label="delete" onClick={() => onDeleteHandle(view._id)} >
                        Delete
                      </button>
                    </Grid>
                    <Grid item>
                        <button  className='edit-inv'><Link to={`/VehicleManage/${view._id}`}  aria-label="edit">
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



export default VehicleTable;