import React, { useEffect, useState } from "react";
import "./Invstyle.css";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";


function InventoryRoomManage() {
  
  const navigate = useNavigate();

  const [itemId, setitemId] = useState('');
  const [itemName, setitemName] = useState('');
  const [itemDescription, setitemDescription] = useState('');
  const [itemQuantity, setitemQuantity] = useState('');
  const [itemCategory, setitemCategory] = useState('');
  
  const [showNotification, setNotification] = useState("");

  const {id} = useParams();

  const getSelectedInventory = () => {
    axios.get(`http://localhost:9005/RoomInventory/get/`+id)
      .then((response) => {
        console.log(response);
      setitemId(response.data.itemId);
      setitemName(response.data.itemName);
      setitemDescription(response.data.itemDescription);
      setitemQuantity(response.data.itemQuantity);
      setitemCategory(response.data.itemCategory);
     
  
      })
  }

  useEffect(() => {
    getSelectedInventory();
  }, []);

  const updateInventoryDetails = (e) => {
    e.preventDefault();

    let updateData = {
      itemId: itemId,
      itemName: itemName,
      itemDescription: itemDescription,
      itemQuantity: itemQuantity,
      itemCategory: itemCategory,
      
    }

    axios.put(`http://localhost:9005/RoomInventory/update/`+id,updateData)
      .then((response) => {
        console.log("updated successfully");
        navigate('/inventoryTable');
        setNotification("Item Updated!!!");
      })
      .catch((error) => {
        console.log(error);
        setNotification("Error in Updating item!");
      })
  }
  return (
    <div className="Invmain">
      <div className='headbar'>
      INVENTORY MANAGEMENT
    </div>
         <h2 class="title-inv">Edit Item</h2>
      <div class="form-container-inv">        
    
       <form class="Item-form-inv">
         
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
         

       <label className='lbl-inv'>Item Description</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemDescription"
            name="itemDescription"
            onChange={(e) => setitemDescription(e.target.value)}
            value={itemDescription}
          />

        <label className='lbl-inv'> Item Quantity </label>
          <input
            class="form-field-inv"
            type="number"
            placeholder="itemQuantity"
            name="itemQuantity"
            onChange={(e) => setitemQuantity(e.target.value)}
            value={itemQuantity}
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
            <button className="btn btn-danger" onclick="document.getElementById('myInput').value = ''">
              Reset
              </button>
    {/* Submit Button */}
              <button class="btn btn-success" onClick={updateInventoryDetails}>
                    Submit
             </button>
              
          </div>
          {showNotification && <div className="notification" style={{fontSize: "20px"}}>Item Updated!!</div>}
        </form>
      </div>
    </div>
  );
}


export default InventoryRoomManage;