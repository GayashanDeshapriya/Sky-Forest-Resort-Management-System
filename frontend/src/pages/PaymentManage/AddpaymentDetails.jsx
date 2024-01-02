import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function AddpaymentDetails(){

    const navigate = useNavigate();

  const [name, setname] = useState("");
  const [packages, setPackages] = useState("");
  const [price, setprice] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [MM, setMM] = useState("");
  const [YY, setYY] = useState("");
  const [cvv, setCVV] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newpayment ={

      name,
      packages,
      price,
      cardnumber,
      MM,
      YY,
      cvv

    }

    axios.post("http://localhost:9005/payment/add",newpayment).then(()=>{
            alert("Pament Successful");
            navigate('/AllPayment');

        }).catch((err)=>{
            alert(err)
        })
  }


    return(
        
  <div className="App">
    <div className="container">
    <br></br>
    <br></br>

 <div className="title">

    <form onSubmit={sendData}>
      <div><h2 className="TOPIC">Add payment details</h2></div>
      <br></br>
        <div className="row">
            <div className="col-md-4">
                <label for>Name :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required 
                onChange={(e)=>{
                  setname(e.target.value);
                }}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <label for>Packages :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required 
                onChange={(e)=>{
                  setPackages(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>price :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                max={5}
                onChange={(e)=>{
                  setprice(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for> card number :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setcardnumber(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>MM :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setMM(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>YY :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setYY(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>CVV (3Digits) :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setCVV(e.target.value);
                }}></input>
            </div>
        </div>

        <br></br>

        
        <button type="Submit" className="">submit</button>
        
        
        <button type="Cancel" className="">Cancel</button>
    </form>
        </div>
    </div>
    </div>
     )
    
    }