import React, { useEffect, useState } from 'react';
import './customerstyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Link } from 'react-router-dom';


function CustomerDetailTable() {
  const navigate = useNavigate();

  const [Customer, setCustomer] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getCustomer = async () => {
    try {
      const response = await axios.get("http://localhost:9005/customer/");
      setCustomer(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCustomer();
  }, []);

  const onDeleteHandle = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9005/customer/delete/${id}`);
      console.log(response.data);
      getCustomer();
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateCustomer = (id) => {
    let path = `/CustomerManage/${id}`;
    navigate.push(path);
  }

  return (
    <div>
    
      <div className="tablealign-inv">
        <table className="table-Inv">
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>address</th>
              <th>E-mail</th>
              <th>phone</th>
             
            </tr>
          </thead>
          <tbody>
            {Customer && Customer.filter(val => {
              if(searchTerm === ''){
                return val;
              }
              else if(
                val.ID.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return val;
              }
              else{
                console.log("No Value");
              }
            }).map((view) => (
              <tr key={view._id}>
                <td>{view.ID}</td>
                <td>{view.name}</td>
                <td>{view.address}</td>
                <td>{view.Email}</td>
                <td>{view.phone}</td>
              
                <td>
                  <Grid container>
                    <Grid item>
                      <button className='delete-inv' aria-label="delete" onClick={() => onDeleteHandle(view._id)} >
                        Delete
                      </button>
                    </Grid>
                    <Grid item>
                        <button  className='edit-inv'><Link to={`/ManageCustomer/${view._id}`}  aria-label="edit">
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

export default CustomerDetailTable;

