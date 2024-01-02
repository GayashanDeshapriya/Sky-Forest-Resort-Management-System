import React, { useState } from "react";
import "./customerstyle.css";
import axios from 'axios';

 

function AddFeadback() {
   
        const [values, setValues] = useState({
          name: "",
          Comment:"",
          
          
        });

        const [showNotification, setNotification] = useState("");
      
        const handleAddData = (e) => {
          const { name, value } = e.target
          setValues({ ...values, [name]: value});
        }             
       
        const AddFeadback = (e) => {
          e.preventDefault();
          let FeadbackData = {
            name: values.name,
            Comment: values.Comment,
            

            }
      
          console.log(FeadbackData);
      
          axios.post("http://localhost:7000/Feadback/add-feadback", FeadbackData)
            .then((response) => {
              console.log(response.data.data);
              alert("Successfully added Feadback")
            })
            .catch((error) => {
              console.log(error);
              alert("Error adding Feadback")
            })
        }
      
        return (
          <div className="customermain">
            <h2 class="title-inv">Add Feadback</h2>
            <div className="form-container-inv">
              <form className="Item-form-inv">
                <label className='lbl-inv'>Name</label>
                <input
                  className="form-field-inv"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleAddData}
                  value={values.name}
                  required
                />
      
                <label className='lbl-inv'>Comment</label>
                <input
                  className="form-field-inv"
                  type="text"
                  placeholder="Comment"
                  name="comment"
                  onChange={handleAddData}
                  value={values.Comment}
                  required
                />
      
                
                
                
                
      
                <div className="btngroup-inv">
                  <button className="form-field cancel-inv" onClick={() => setValues({
                    name: "",
                    Comment: "",
                   
                  })}>
                    Clear
                  </button>
                  <button className="form-field submit-inv" onClick={AddFeadback} type="submit">
                    Submit
                  </button>
                </div>
                {showNotification && <div className="notification" style={{fontSize: "20px"}}>Feadback added successfully!</div>}
              </form>
            </div>
          </div>
        );
      }
      
      
      
      
export default AddFeadback

    