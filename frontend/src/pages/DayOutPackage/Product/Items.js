import React, { useEffect, useState } from "react";
import "./Item.css";
import axios from "axios";
import Item from "./ViewPackages";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import ItemPDF from "./ItemPDF";
import { Link, useNavigate } from 'react-router-dom';


const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const CustomizedInputBase = (props) => {
  return (
    
    <Paper  elevation={3}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400,height:50,marginLeft:55,marginTop:5 }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Packages."
        inputProps={{ "aria-label": "search Packages" }}
        value={props.keyword}
        onChange={props.handleKeywordChange}
      />
      
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search" >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
    
    
  );
};

const Items = () => {
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setItems(data.books));
  }, []);

  // Search Functionality
  let searchResult;
  if (keyword === "") {
    searchResult = items.map((x) => x);
  } else {
    searchResult = items.filter((event) => {
      const re = new RegExp(`${keyword}`, "i");
      console.log(event.name.match(re));
      if (event.name.match(re) === null) {
        return false;
      } else {
        return true;
      }
    });
  }

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log(items);

  return (
    <div>
            <ItemPDF tableData={searchResult} />
            
      <div className="justify-center flex mt-5">
        <CustomizedInputBase
          keyword={keyword}
          handleKeywordChange={handleKeywordChange}
        />
      </div>
    
      <div className="search">
      <ul type="none">
        {searchResult &&
          searchResult.map((item, i) => (
            <li className="book" key={i}>
              <Item book={item} />

            </li>
          ))}
      </ul>
      
      </div>
     

    </div>
  );
};

export default Items;
