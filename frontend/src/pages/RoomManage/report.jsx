import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import 'jspdf-autotable';

export default function ReportGen() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:9005/room/")
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
    const data = users.map(user => [user.room_no, user.catagory, user.price]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('payment.pdf');
  }

  return (
    <div className="App">
    <div className="container">
      <br/><br/>
    <div class="d-flex justify-content-center">
      <table className="table">
        <thead class="table-dark">
          <tr>
            <th>Room No</th>
            <th>catagory</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => {
            return (
              <tr key={index}>
                <td>{i.room_no}</td>
                <td>{i.catagory}</td>
                <td>{i.price}</td>
              </tr>
            )
          })}
          </tbody>
          <br/>
        <button class="btn btn-primary" onClick={handlePdfGeneration}>
          Generate PDF
        </button>
      </table>
    </div>
    </div>
    </div>
  );
}