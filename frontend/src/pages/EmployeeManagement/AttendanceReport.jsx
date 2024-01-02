import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./empstyle.css";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function AttendanceReport() {

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9005/attendance/")
      .then((res) => {
        console.log(res.data);
        setAttendance(res.data);
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
      EMPLOYEE MANAGEMENT
    </div>
      <button className="btn btn-info" onClick={exportPDFWithComponent}> Generate Report </button>
      <PDFExport ref={pdfExportComponent} paperSize="A2">
        <div className="tablealign-inv">
          <table className="table-Inv">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Date</th>
                <th>Shift</th>
                
              </tr>
            </thead>
            <tbody>
              {attendance && attendance.map((view) => (
                <tr key={view.itemId}>
                  <td>{view.empid}</td>
                  <td>{view.date}</td>
                  <td>{view.shift}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PDFExport>
    </div>
  );
}

export default AttendanceReport;

