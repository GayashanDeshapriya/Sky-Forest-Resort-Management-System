import { Box, FormLabel, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const Itemdetail = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler().then((data) => setInputs(data.book));
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/products"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    if (imageSelected) {
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", "fxqr8qoz");

      axios
        .post(
          "https://api.cloudinary.com/v1_1/dpfeb0kt9/image/upload",
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
      <div className="headbar">Update Package</div>
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
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            name="name"
          />
          <label className="labels">Category</label>
          <TextField
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            name="catagory"
          />
          <label className="labels">Description</label>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            name="description"
          />
          <label className="labels">Price</label>
          <TextField
            value={inputs.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            variant="outlined"
            name="price"
          />
          <FormLabel>Image</FormLabel>

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

          {/* <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          /> */}
          <br></br>
          <Button variant="contained" type="submit">
            Update Package
          </Button>
        </Box>
      </form>
    </div>
    </div>
  );
};

export default Itemdetail;
