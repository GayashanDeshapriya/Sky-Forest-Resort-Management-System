import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import 'jspdf-autotable';

export default function ReportGen() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:9005/food//")
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
    const header = [["Menu No", "Food 1", "Food 2","Food 3","Price"]];

    // Add data rows
    const data = users.map(user => [user.menuno, user.food1, user.food2,user.food3,user.price]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('payment.pdf');
  }

  return (
    <div>
      <div className ="container">
        <div className="box">
      <table className=" table">
        <thead>
          <tr>
            <th>Menu No</th>
          
            <th className='t1'>Food 1</th>
            <th>Food 2</th>
            <th>Food 3</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => {
            return (
              <tr key={index}>
                <td>{i.menuno}</td>
                
                <td>{i.food1}</td>
                <td>{i.food2}</td>
                <td>{i.food3}</td>

                
                
                <td>{i.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>
      </div>
          <br></br>
      <button className='btn btn-info' onClick={handlePdfGeneration}>
        Generate PDF
      </button>
    </div>
    
  );
}