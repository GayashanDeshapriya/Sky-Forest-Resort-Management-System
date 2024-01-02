import React,{useState, useEffect} from "react";
import axios from "axios"
import "./pay.css";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditRoom(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [rooms, setRoom] = useState({
        room_no:'',
        catagory:'',
        price:'',
        description:'',
        type:'',
        facilities:'',
        duration:''
    });

    //Fetch data
    useEffect(()=>{
        function getRoom (){
            axios.get("http://localhost:9005/room/get/"+id)
            .then((res)=>{
                setRoom(res.data.Room);
                console.log(res.data.Room);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getRoom();
    },[id])

    const handleChange = (e) => {
        setRoom({
          ...rooms,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(rooms); // or save the data to your backend
        axios
        .put('http://localhost:9005/room/update/'+id, rooms)
        .then((response) => {
            console.log(response.data);
            alert("room Updated");
            navigate('/AllRoom');
        })
        .catch((error) => {
            console.log(error);
        });
      };


    return(
        <div className="invmain">
        <div className="container">
        
        <div className="form-container-inv">

    <form onSubmit={handleSubmit} >

    <div className="TOPIC"><h2> Edit Room Package</h2></div>
        <br></br>
        <div className="row">
            <div className="col-md-4">
                <label for>Room No :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="room_no" value={rooms.room_no}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Catagory :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="catagory" value={rooms.catagory}
                onChange={handleChange} ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Price :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="price" value={rooms.price}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for> Description :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="description" value={rooms.description}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>type :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="type" value={rooms.type}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Facilities :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="facilities" value={rooms.facilities}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>Duration :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="duration" value={rooms.duration}
                onChange={handleChange}></input>
            </div>
        </div>

        <button type="submit" className="btn1 btn-primary">Save</button>
        <Link to={'/AllRoom'}><button className="btn2 btn-danger">Cancel</button></Link>
    </form>
    
    </div>
    </div>
    </div>
    
     )
    }