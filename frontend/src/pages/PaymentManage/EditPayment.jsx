import React,{useState, useEffect} from "react";
import axios from "axios"
import "./pay.css";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditPayment(){

    const navigate = useNavigate();
    const {id} = useParams();
    const [payments, setPayments] = useState({
      name:'',
      packages:'',
      price:'',
      cardnumber:'',
      MM:'',
      YY:'',
      cvv:''
    });

    //Fetch data
    useEffect(()=>{
        function getPayments (){
            axios.get("http://localhost:9005/payment/get/"+id)
            .then((res)=>{
                setPayments(res.data.payment);
                console.log(res.data.payment);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getPayments();
    },[id])

    const handleChange = (e) => {
        setPayments({
          ...payments,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(payments); // or save the data to your backend
        axios
        .put('http://localhost:9005/payment/update/'+id, payments)
        .then((response) => {
            console.log(response.data);
            alert("payment Updated");
            navigate('/AllPayment');
        })
        .catch((error) => {
            console.log(error);
        });
      };


    return(
        
        
    <div className="invmain">
        <div><h2> Edit details</h2></div>
        <div className="form-container-inv">
                        <form className="Item-form-inv" onSubmit={handleSubmit} >
                
                   
                    <div className="row">
                        <div className="col-md-4">
                            <label for>name :</label>
                        </div>
                        <div className="col-md-8">
                            <input className="form-field-inv" type="text" required name="name" value={payments.name}
                            onChange={handleChange}></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label for>Packages :</label>
                        </div>
                        <div className="col-md-8">
                            <input className="form-field-inv" type="text" required name="packages" value={payments.packages}
                            onChange={handleChange} ></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label for>price :</label>
                        </div>
                        <div className="col-md-8">
                            <input className="form-field-inv" type="text" required name="price" value={payments.price}
                            onChange={handleChange}></input>
                            
                        </div>
                    </div>


                    <div className="row ml-5 ">
                    <button type="submit" className="btn btn-success">Save</button>
                    <Link to={'/AllPayment'}><button type="Cancel" className="btn btn-danger ml-3">Cancel</button></Link>
                    </div>
                    

                    
                    
                </form>
                </div>
    </div>
    
    
     )
    }