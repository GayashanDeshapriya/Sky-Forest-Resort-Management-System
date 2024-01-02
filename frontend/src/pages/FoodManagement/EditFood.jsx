import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditFood(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [foods, setFood] = useState({
        menuno:'',
        food1:'',
        food2:'',
        food3:'',
        price:''
    });

    //Fetch data
    useEffect(()=>{
        function getFood (){
            axios.get("http://localhost:9005/food/get/"+id)
            .then((res)=>{
                setFood(res.data.food);
                console.log(res.data.food);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getFood();
    },[id])

    const handleChange = (e) => {
        setFood({
          ...foods,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(foods); // or save the data to your backend
        axios
        .put('http://localhost:9005/food/update/'+id, foods)
        .then((response) => {
            console.log(response.data);
            alert("payment Updated");
            navigate('/AllFood');
        })
        .catch((error) => {
            console.log(error);
        });
      };


    return(
        
    
    <div className="App">
    <div className="container">
    <br></br>
    <br></br>
    <div className="title">


    <form onSubmit={handleSubmit} >
    
    <div class="TOPIC"><h2> Edit details</h2></div>
      <br></br>
        <div className="row">
            <div className="col-md-4">
                <label for>menuno :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="menuno" value={foods.menuno}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>food1 :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="food1" value={foods.food1}
                onChange={handleChange} ></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>food2 :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="food2" value={foods.food2}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>food3 :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="food3" value={foods.food3}
                onChange={handleChange}></input>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <label for>price :</label>
            </div>
            <div className="col-md-8">
                <input type="text" required name="price" value={foods.price}
                onChange={handleChange}></input>
            </div>
        </div>

        <br></br>

        <button type="submit" className="btn1 btn-primary">Save</button>
        <Link to={'/AllFood'}><button className="btn2 btn-danger">Cancel</button></Link>
    </form>
    </div>
    </div>
    </div>
    
     )
    }