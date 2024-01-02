import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./safaristyle.css";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function VehicleDetailsReport() {

  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9005/Vehicle/")
      .then((res) => {
        console.log(res.data);
        setVehicle(res.data);
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
                <th>Vehicle ID</th>
                <th>Registration No</th>
                <th>Category</th>
                <th>Fuel Type</th>
                <th>Description</th>
                <th>Date</th>
                
              </tr>
            </thead>
            <tbody>
              {vehicle && vehicle.map((view) => (
                <tr key={view.itemId}>
                  <td>{view.vehicle_id}</td>
                  <td>{view.registration_no}</td>
                  <td>{view.category}</td>
                  <td>{view.fuel_type}</td>
                  <td>{view.description}</td>
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

export default VehicleDetailsReport;

