import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./empstyle.css";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function EmployeeDetailsReport() {

  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9005/employee/")
      .then((res) => {
        console.log(res.data);
        setEmployee(res.data);
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
                <th>Employee Name</th>
                <th>NIC</th>
                <th>Address</th>
                <th>E-mail</th>
                <th>Contact Number</th>
                <th>Job Title</th>
                <th>Basic Salary</th>
              </tr>
            </thead>
            <tbody>
              {employee && employee.map((view) => (
                <tr key={view.itemId}>
                  <td>{view.empid}</td>
                  <td>{view.empname}</td>
                  <td>{view.NIC}</td>
                  <td>{view.address}</td>
                  <td>{view.email}</td>
                  <td>{view.phone}</td>
                  <td>{view.jobtype}</td>
                  <td>{view.basicsalary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PDFExport>
    </div>
  );
}

export default EmployeeDetailsReport;

