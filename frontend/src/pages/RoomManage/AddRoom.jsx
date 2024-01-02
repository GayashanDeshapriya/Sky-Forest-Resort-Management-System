import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./pay.css";

export default function AddRoom(){

    const navigate = useNavigate();

  const [room_no, setRoomNo] = useState("");
  const [catagory, setCatagory] = useState("");
  const [price, setprice] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [facilities, setFac] = useState("");
  const [duration, setDuration] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newRoom ={
        room_no,
        catagory,
        price,
        description,
        type,
        facilities,
        duration

    }

    axios.post("http://localhost:9005/room/add",newRoom).then(()=>{
            alert("Package Added");
            navigate('/AllRoom');

        }).catch((err)=>{
            alert(err)
        })
  }


    return(
        
        <div className="invmain">
    <div className="container">
    <br></br>
    <br></br>

  
    <div className="form-container-inv">

  
    <form onSubmit={sendData}>
      <div><h2 className="TOPIC">Add Room Package</h2></div>
      <br></br>
        <div className="row">
            <div className="col-md-4">
                <label for>Room no :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required 
                onChange={(e)=>{
                  setRoomNo(e.target.value);
                }}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <label for>Catagory :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required 
                onChange={(e)=>{
                    setCatagory(e.target.value);
                }}></input>
            </div>
        </div>

        <select value="" id="">
            <option>ac</option>
        </select>

        <div className="row">
            <div className="col-md-4">
                <label for>Price :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setprice(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Description :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setDescription(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Type :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setType(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Facilities :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setFac(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Duration :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setDuration(e.target.value);
                }}></input>
            </div>
        </div>

        <br></br>


        <button type="Submit" className="btn btn-primary">submit</button>
        <Link to={'/AllRoom'}><button type="Cancel" className="btn btn-danger">Cancel</button></Link>
    </form>
        </div>
    </div>
    </div>
     )
    
    }