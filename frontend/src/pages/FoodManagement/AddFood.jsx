import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddFood(){

    const navigate = useNavigate();

  const [menuno, setMenuNo] = useState("");
  const [food1, setFood1] = useState("");
  const [food2, setFood2] = useState("");
  const [food3, setFood3] = useState("");
  const [price, setPrice] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newFood ={
        menuno,
        food1,
        food2,
        food3,
        price

    }

    axios.post("http://localhost:9005/food/add",newFood).then(()=>{
            alert("Added Successful");
            navigate('/AllFood');

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
      <div><h2 className="TOPIC">Add Food details</h2></div>
      <br></br>
        <div className="row">
            <div className="cl col-md-4">
                <label for>Menu No :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required 
                onChange={(e)=>{
                  setMenuNo(e.target.value);
                }}></input>
            </div>
        </div>
        <div className="row">
            <div className="cl col-md-4">
                <label for>Food 1 :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required 
                onChange={(e)=>{
                  setFood1(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="cl col-md-4">
                <label for>Food 2 :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setFood2(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Food 3 :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setFood3(e.target.value);
                }}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Price :</label>
            </div>
            <div className="col-md-1">
                <input type="text" required
                onChange={(e)=>{
                  setPrice(e.target.value);
                }}></input>
            </div>
        </div>
        
        <br></br>


        <button type="Submit" className="btn1 btn-primary">submit</button>
        <Link to={'/AllFood'}><button type="Cancel" className="btn2 btn-danger">Cancel</button></Link>
    </form>
        </div>
    </div>
    </div>
     )
    
    }