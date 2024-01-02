import { Box, FormLabel, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Additem.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    catagory: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.catagory),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/products"));
  };

  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    if (imageSelected) {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", "pn6adhya");

      axios
        .post(
          "https://api.cloudinary.com/v1_1/dxcyacqr1/image/upload",
          formData
        )
        .then((response) => {
          console.log(response);
          const imageUrl = response.data.secure_url;
          console.log("Cloud URL " + imageUrl);
          setInputs({
            ...inputs,
            image: imageUrl,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    uploadImage();
  }, [imageSelected]);

  return (
    <div>
      <div className='headbar'>
      Add Package
    </div>
    <div className="AddShape">
      
        
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <label className="labels">Name</label>
        <TextField className="textfield"
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          l
          abel="Name"
          variant="outlined"
          name="name"
        />
        <label className="labels">Catagory</label>
        <TextField className="textfield"
          value={inputs.catagory}
          onChange={handleChange}
          margin="normal"
          label="Catagory"
          variant="outlined"
          name="catagory"
        />
        <label className="labels">Description</label>
        <TextField className="textfield"
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          height="300px"
          label="Description"
          variant="outlined"
          name="description"
        />
        <label className="labels"> price</label>
        <TextField className="textfield"
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          label="Price"
          variant="outlined"
          name="price"
        />
        <br></br>

        <label className="labels">Upload Package Image </label>

        <TextField 
          key="image"
          name="image"
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImageSelected(e.target.files[0]);
            uploadImage();
            setInputs({ ...inputs, [e.target.name]: e.target.value });
            console.log();
          }}
        />

        {/* <Button variant="contained" component="label" value={inputs.image} onChange={handleChange}>
  Upload
  <input hidden accept="image/*" multiple type="file" />
</Button> */}

        {/* <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        /> */}

        <Button class="submitbtn" variant="contained" type="submit">
          Add Package
        </Button>
        <Link to="/add">
        <Button class="cancelbtn" variant="contained" >
          Cancel
        </Button>
        </Link>
      </Box>
    </form>
    </div>
    </div>
   
  );
};

export default Add;
