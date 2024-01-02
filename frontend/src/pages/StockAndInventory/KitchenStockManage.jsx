import React, { useEffect, useState } from "react";
import "./Invstyle.css";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";


function KitchenStockManage() {
  
  const navigate = useNavigate();


  const [Date, setDate] = useState('');
  const [itemId, setitemId] = useState('');
  const [itemName, setitemName] = useState('');
  const [itemPrice, setitemPrice] = useState('');
  const [itemDescription, setitemDescription] = useState('');
  const [itemCategory, setitemCategory] = useState('');
  
  const [showNotification, setNotification] = useState("");

  const {id} = useParams();

  const getSelectedInventory = () => {
    axios.get(`http://localhost:9005/KitchenStock/get/`+id)
      .then((response) => {
        console.log(response);

      setDate(response.data.Date);
      setitemId(response.data.itemId);
      setitemName(response.data.itemName);
      setitemPrice(response.data.itemPrice);
      setitemDescription(response.data.itemDescription);
      setitemCategory(response.data.itemCategory);
     
  
      })
  }

  useEffect(() => {
    getSelectedInventory();
  }, []);

  const updateInventoryDetails = (e) => {
    e.preventDefault();

    let updateData = {

      Date: Date,
      itemId: itemId,
      itemName: itemName,
      itemPrice: itemPrice,
      itemDescription: itemDescription,
      itemCategory: itemCategory,
      
    }

    axios.put(`http://localhost:9005/KitchenStock/update/`+id,updateData)
      .then((response) => {
        console.log("updated successfully");
        setNotification("Item Updated!!!");
        navigate("/KitchenTable");
      })
      .catch((error) => {
        console.log(error);
        setNotification("Error in Updating item!");
      })
  }
  return (
    <div className="Invmain-2">
      <div className='headbar'>
      INVENTORY MANAGEMENT
    </div>
         <h2 class="title-inv">Edit Kitchen Stock Item</h2>
      <div class="form-container-inv">        
    
       <form class="Item-form-inv">
         
       <label className='lbl-inv'>Date</label>
          <input
            class="form-field-inv"
            type="date"
            placeholder="itemId"
            name="Date"
            onChange={(e) => setDate(e.target.value)}
            value={Date}
          />

        <label className='lbl-inv'>Item Id</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemId"
            name="itemId"
            onChange={(e) => setitemId(e.target.value)}
            value={itemId}
          />

           <label className='lbl-inv'>Item Name</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemName"
            name="itemName"
            onChange={(e) => setitemName(e.target.value)}
            value={itemName}
          />


        <label className='lbl-inv'> Item Price </label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemQuantity"
            name="itemPrice"
            onChange={(e) => setitemPrice(e.target.value)}
            value={itemPrice}
          />
         

       <label className='lbl-inv'>Item Description</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemDescription"
            name="itemDescription"
            onChange={(e) => setitemDescription(e.target.value)}
            value={itemDescription}
          />

        
    
       <label className='lbl-inv'>Item Category</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemCategory"
            name="itemCategory"
            onChange={(e) => setitemCategory(e.target.value)}
            value={itemCategory}
          />
        

  {/* Reset Button */}
          <div className="btngroup-inv">
            <button className="form-field cancel-inv" onclick="document.getElementById('myInput').value = ''">
              Reset
              </button>
    {/* Submit Button */}
              <button class="form-field submit-inv"  onClick={updateInventoryDetails} >
                    Submit
             </button>
              
          </div>
          {showNotification && <div className="notification" style={{fontSize: "20px"}}>Item Updated!!</div>}
        </form>
      </div>
    </div>
  );
}


export default KitchenStockManage;