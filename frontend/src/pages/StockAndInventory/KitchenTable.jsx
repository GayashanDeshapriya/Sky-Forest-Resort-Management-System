import React, { useEffect, useState } from 'react';
import "./Invstyle.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid'; // Grid version 1
import { Link } from 'react-router-dom';


function KitchenTable() {
  const navigate = useNavigate();

  const [Kitchen, setKitchenStock] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getKitchenStock = async () => {
    try {
      const response = await axios.get("http://localhost:9005/KitchenStock/");
      setKitchenStock(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getKitchenStock();
  }, []);

  const onDeleteHandle = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9005/KitchenStock/delete/${id}`);
      console.log(response.data);
      getKitchenStock();
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateKitchenNavigate = (id) => {
    let path = `/KitchenStockManage/${id}`;
    navigate.push(path);
  }

  return (
    <div>
      <div className='headbar'>
      INVENTORY MANAGEMENT
    </div>
      <div className="search-bar">
        <h4>Search Stock Item</h4>
        <input type="text" placeholder="Item ID" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="tablealign-inv">
        <table className="table-Inv">
          <thead>
            <tr>
            <th>Date</th>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Item Description</th>
              <th>Item Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {Kitchen && Kitchen.filter(val => {
              if(searchTerm === ''){
                return val;
              }
              else if(
                val.itemId.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return val;
              }
              else{
                console.log("No Value");
              }
            }).map((view) => (
              <tr key={view._id}>
                <td>{view.Date}</td>
                <td>{view.itemId}</td>
                <td>{view.itemName}</td>
                <td>{view.itemPrice}</td>
                <td>{view.itemDescription}</td>
                <td>{view.itemCategory}</td>
                <td>
                  <Grid container>
                    <Grid item>
                      <button className='delete-inv' aria-label="delete" onClick={() => onDeleteHandle(view._id)} >
                        Delete
                      </button>
                    </Grid>
                    <Grid item>
                        <button  className='edit-inv'><Link to={`/KitchenStockManage/${view._id}`}  aria-label="edit">
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


export default KitchenTable;

