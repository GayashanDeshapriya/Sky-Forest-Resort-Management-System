import React, { useState } from "react";
import "./Invstyle.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function InventoryAddRoomItem() {
  const [values, setValues] = useState({
    itemId: "",
    itemName: "",
    itemDescription: "",
    itemQuantity: 0,
    itemCategory: "",
  });

  const navigate = useNavigate();

  const handleAddData = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const addInventory = (e) => {
    e.preventDefault();
    let inventoryData = {
      itemId: values.itemId,
      itemName: values.itemName,
      itemDescription: values.itemDescription,
      itemQuantity: values.itemQuantity,
      itemCategory: values.itemCategory,
    };

    console.log(inventoryData);

    axios.post("http://localhost:9005/RoomInventory/add-item", inventoryData)
    .then((response) => {
      console.log(response.data.data);
      alert("Successfully Recorded")
      navigate('/inventoryTable');
      })
      .catch((error) => {
        console.log(error);
        alert("UnSuccessful Attempt")
      })
  }

  return (
    <div className="Invmain">
      <div className='headbar'>
        INVENTORY MANAGEMENT
      </div>
      <h2 class="title-inv"></h2>
      <div className="form-container-inv">
        <form className="Item-form-inv" onSubmit={addInventory}>
          <label className='lbl-inv'>Item ID</label>
          <input type="text" 
            className="form-field-inv"
            placeholder="Item ID"
            name="itemId"
            onChange={handleAddData}
            value={values.itemId}
            minLength="4"
            maxLength="10"
            title="Please enter a valid item ID (4-10 digits)."
          />
  
          <label className='lbl-inv'>Item Name</label>
          <input 
            required 
            className="form-field-inv"
            type="text"
            placeholder="Item Name"
            name="itemName"
            onChange={handleAddData}
            value={values.itemName}
            minLength="2"
            maxLength="50"
            title="Please enter a valid item name (2-50 characters)."
          />
  
          <label className='lbl-inv'> Item Description </label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Item Description"
            name="itemDescription"
            onChange={handleAddData}
            value={values.itemDescription}
            required
            minLength="10"
            maxLength="200"
            title="Please enter a valid item description (10-200 characters)."
          />
  
          <label className='lbl-inv'>Item Quantity</label>
          <input
            className="form-field-inv"
            type="number"
            placeholder="Item Quantity"
            name="itemQuantity"
            onChange={handleAddData}
            value={values.itemQuantity}
            required
            min="1"
            max="1000"
            title="Please enter a valid item quantity (1-1000)."
          />
  
          <label className='lbl-inv'>Item Category</label>
          <select
            className="form-field-inv"
            name="itemCategory"
            onChange={handleAddData}
            value={values.itemCategory}
            required
          >
            <option value="" disabled hidden>Select item category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
           
            <option value="Other">Other</option>
          </select>
  
          <div className="btngroup-inv">
            <button className="btn btn-danger" onClick={() => setValues({
              itemId: 0,
              itemName: "",
              itemDescription: "",
              itemQuantity: 0,
              itemCategory: "",
            })}>
              Clear
            </button>
            <button className="btn btn-success" type="submit">
              Submit
            </button>


          </div>
        </form>
        {values.itemId === '' || values.itemName === '' || values.itemDescription === '' || values.itemQuantity === '' || values.itemCategory === '' ? (
          <div className="error-message-inv"></div>
        ) : null}
      </div>
    </div>
  );
  
}

export default InventoryAddRoomItem;
