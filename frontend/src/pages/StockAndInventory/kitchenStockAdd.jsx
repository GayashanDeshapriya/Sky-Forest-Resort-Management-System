import React, { useState } from "react";
import "./Invstyle.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function KitchenStockAdd() {
  const [values, setValues] = useState({
    Date:"",
    itemId: "",
    itemName: "",
    itemPrice: "",
    itemDescription:"",
    itemCategory: "",
  });

  const navigate = useNavigate();

  const handleAddData = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const addKitchenStock = (e) => {
    e.preventDefault();
    let KitchenData = {
      Date: values.Date,
      itemId: values.itemId,
      itemName: values.itemName,
      itemPrice: values.itemPrice,
      itemDescription: values.itemDescription,
      itemCategory: values.itemCategory,
    };

    console.log(KitchenData);

    axios.post("http://localhost:9005/KitchenStock/add-stock-item", KitchenData)
    .then((response) => {
      console.log(response.data.data);
      alert("Successfully Recorded")
      navigate('/KitchenTable');
      })
      .catch((error) => {
        console.log(error);
        alert("UnSuccessful Attempt")
      })
  };

  return (
    <div className="Invmain-2">
      <div className='headbar'>
      INVENTORY MANAGEMENT
    </div>
      
      <div className="form-container-inv">
        <form className="Item-form-inv">

        <label className='lbl-inv'>Date</label>
          <input type="date" required
            className="form-field-inv"
            placeholder="Date"
            name="Date"
            onChange={handleAddData}
            value={values.Date}
            
          />

          <label className='lbl-inv'>Item ID</label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Item ID"
            name="itemId"
            onChange={handleAddData}
            value={values.itemId}
            required
          />

          <label className='lbl-inv'>Item Name</label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Item Name"
            name="itemName"
            onChange={handleAddData}
            value={values.itemName}
            required
          />

        <label className='lbl-inv'>Item Price</label>
          <input
            className="form-field-inv"
            type="text"
            placeholder="Item Price"
            name="itemPrice"
            onChange={handleAddData}
            value={values.itemPrice}
            required
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
            <option value="Dry Goods">Dry Goods</option>
            <option value="Sea Foods">Sea Foods</option>
            <option value="Beverages">Beverages</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegitables">Vegitables</option>
          </select>
          

          <div className="btngroup-inv">
            <button className="form-field cancel-inv" onClick={() => setValues({
              Date:"",
              itemId: "",
              itemName: "",
              itemPrice: "",
              itemDescription: "",
             itemCategory: "",
            })}>
              Clear
            </button>
            <button className="form-field submit-inv" onClick={addKitchenStock} type="submit">
              Submit
            </button>
          </div>
          
        </form>

       
        
      </div>
    </div>
  );
}

export default KitchenStockAdd;
