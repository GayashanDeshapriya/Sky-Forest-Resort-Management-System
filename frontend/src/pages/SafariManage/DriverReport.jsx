import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./safaristyle.css";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function DriverDetailsReport() {

  const [driver, setDriver] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9005/driver/")
      .then((res) => {
        console.log(res.data);
        setDriver(res.data);
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

  return (
    <div>
      <div className='headbar'>
      SAFARI MANAGEMENT
    </div>
      <button className="btn btn-info" onClick={exportPDFWithComponent}> Generate Report </button>
      <PDFExport ref={pdfExportComponent} paperSize="A2">
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
              
              </tr>
            </thead>
            <tbody>
              {driver && driver.map((view) => (
                <tr key={view.itemId}>
                  <td>{view.driver_id}</td>
                  <td>{view.name}</td>
                  <td>{view.nic}</td>
                  <td>{view.licence_no}</td>
                  <td>{view.contact_no}</td>
                  <td>{view.address}</td>
                  <td>{view.date}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PDFExport>
    </div>
  );
}

export default DriverDetailsReport;

