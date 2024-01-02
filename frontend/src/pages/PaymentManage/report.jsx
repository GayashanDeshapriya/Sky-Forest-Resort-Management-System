import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import 'jspdf-autotable';

export default function ReportGen() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:9005/payment/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getUsers();
  }, []);

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set table header
    const header = [["name", "packages", "price"]];

    // Add data rows
    const data = users.map(user => [user.name, user.packages, user.price]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('payment.pdf');
  }

  return (
    <div>
      <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>packages</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => {
            return (
              <tr key={index}>
                <td>{i.name}</td>
                
                <td>{i.packages}</td>
                
                <td>{i.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button className='btn btn-info' onClick={handlePdfGeneration}>
        Generate PDF
      </button>
      </div>
    </div>
  );
}