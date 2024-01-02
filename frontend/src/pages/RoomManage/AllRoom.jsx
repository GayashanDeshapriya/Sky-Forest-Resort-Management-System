import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function AllRoom() {
  const [room, setRoom] = useState([]);
    
        function getRoom () {
        axios.get("http://localhost:9005/room/").then((res) =>{
            console.log(res);
            setRoom(res.data);
        }).catch((err)=>{
            alert(err.message);
        })

    }
    useEffect(() =>{
    getRoom();

     },[])

     // Delete data
    function deletedata(i) {
    if (window.confirm('Do you want to delete "' + i.name + '" ?')) {
      axios
        .delete("http://localhost:9005/room/delete/" + i._id)
        .then(() => {
        getRoom ();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
  // function handlePdfGeneration() {
  //   const doc = new jsPDF();

  //   // Set table header
  //   const header = [["name", "packages", "price"]];

  //   // Add data rows
  //   const data = room.map(user => [user.room_no, user.catagory, user.price]);

  //   // Add table to document
  //   doc.autoTable({ head: header, body: data });

  //   // Download the PDF document
  //   doc.save('payment.pdf');
  // }

  return (
    <table class="table">
      <thead>
        <tr>
          
          <th>room_no</th>
          <th>catagory </th>
          <th>price</th>
          <th>description</th>
          <th>type</th>
          <th>facilities</th>
          <th>duration</th>
        </tr>
      </thead>
      <tbody>
        {room.map(pay => (
          <tr key={pay._id}>
            <td>{pay.room_no}</td>
            <td>{pay.catagory}</td>
            <td>{pay.price}</td>
            <td>{pay.description}</td>
            <td>{pay.type}</td>
            <td>{pay.facilities}</td>
            <td>{pay.duration}</td>
            <td><Link to={`/EditRoom/${pay._id}`}><button type='submit' className='btn5 btn-outline-primary btn-lg active'>Edit</button></Link></td>
            <td><button type="button" className="btn5 btn-outline-danger btn-lg active" onClick={(()=>deletedata(pay))}>Remove</button></td>
          </tr>
        ))}

        {/* <button onClick={handlePdfGeneration}>
          Generate PDF
        </button> */}
      </tbody>
    </table>
  );
}

export default AllRoom;
