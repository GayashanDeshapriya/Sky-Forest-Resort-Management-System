import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./Invstyle.css";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function KitchenReport() {

  const [kitchen, setKitchen] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get("http://localhost:9005/KitchenStock/")
      .then((res) => {
        console.log(res.data);
        setKitchen(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const pdfExportComponent = useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const filteredKitchen = kitchen.filter((item) => {
    return item.itemId.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
              <th>Date</th>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Item Description</th>
                <th>Item Category</th>
              </tr>
            </thead>
            <tbody>
              {filteredKitchen && filteredKitchen.map((view) => (
                <tr key={view.itemId}>
                  <td>{view.Date}</td>
                  <td>{view.itemId}</td>
                  <td>{view.itemName}</td>
                  <td>{view.itemPrice}</td>
                  <td>{view.itemDescription}</td>
                  <td>{view.itemCategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='Reportbutton'>
      <button className="Reportbutton1" onClick={exportPDFWithComponent}> Generate Report </button>
      </div>
      </PDFExport>
    </div>
  );
}

export default KitchenReport;
