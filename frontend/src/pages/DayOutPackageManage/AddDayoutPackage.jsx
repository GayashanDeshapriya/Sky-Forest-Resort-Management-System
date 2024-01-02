import { Box, FormLabel, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Additem.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDayOutPackage = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    catagory: "",
    available: false,
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
      .post("http://localhost:9005/books", {
        name: String(inputs.name),
        catagory: String(inputs.catagory),
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
    sendRequest().then(() => history("/ViewDayOutPackage"));
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
      Add DayOut a Package
    </div>
  <div className="AddShape">
      <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        maxHeight={420}
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
          label="Name"
          variant="outlined"
          name="name"
          required
            min="1"
            max="1000"
            title="Please enter a valid item quantity (1-1000)."
        />
        <label className="labels">Catagory</label>
        <TextField className="textfield"
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          label="Catagory"
          variant="outlined"
          name="catagory"
          required
            min="1"
            max="1000"
            title="Please enter a valid category."
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
          required
            min="1"
            max="1000"
            title="Please enter a valid Descrption (1-1000)."
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
          required
            
            min="1"
            max="20"
            title="Please enter a valid item Price."
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
        
        <Button class="cancelbtn" variant="contained" >
          Cancel
        </Button>
        
      </Box>
    </form>
    </div>
    </div>
   
  );
};

export default AddDayOutPackage;