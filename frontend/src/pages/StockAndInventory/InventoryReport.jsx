import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./Invstyle.css";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function InventoryReport() {

  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("http://localhost:9005/RoomInventory/")
      .then((res) => {
        console.log(res.data);
        setInventory(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    setFilteredInventory(inventory.filter(item => item.itemId.includes(searchTerm)));
  }, [inventory, searchTerm]);

  const pdfExportComponent = useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    
    <div>
      <div className='headbar'>
      INVENTORY MANAGEMENT
    </div>

    <div className="search-bar">
        <h4>Search Item</h4>
        <input type="text" placeholder="Item ID" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      
      <PDFExport ref={pdfExportComponent} paperSize="A2">
        <div className="tablealign-inv">
          <table className="table-Inv">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Item Description</th>
                <th>Item Quantity</th>
                <th>Item Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory && filteredInventory.map((view) => (
                <tr key={view.itemId}>
                  <td>{view.itemId}</td>
                  <td>{view.itemName}</td>
                  <td>{view.itemDescription}</td>
                  <td>{view.itemQuantity}</td>
                  <td>{view.itemCategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </PDFExport>
      <button className="Reportbutton1" onClick={exportPDFWithComponent}> Generate Report </button>
    </div>
  );
}

export default InventoryReport;

