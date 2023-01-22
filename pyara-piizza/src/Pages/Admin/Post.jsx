import React from "react";
import axios from "axios";
import { useRef } from "react";
import AdminNavbar from "./AdminNavbar";
import { Box, Heading, Input } from "@chakra-ui/react";
import "./Admin.css";

function Post() {
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const priceRef = useRef(null);

  let handleClick = async (e) => {
    const name = nameRef.current.value;
    const img = imageRef.current.value;
    const price = priceRef.current.value;
    e.preventDefault();
    const response = await axios.post(`${process.env.REACT_APP_AXIOS_LINK}`, {
      name: name,
      img: img,
      price: price,
    });
    console.log(response.data);
    alert("Posted Succesfully!");
  };

  return (
    <Box>
      <AdminNavbar />
      <Box className="Main">
        <Box className="div">
          <form action="" method="post" onSubmit={handleClick}>
            <Heading>Post Form</Heading>
            <Input type="text" placeholder="Pizza Name Here" ref={nameRef} />
            <hr />
            <Input type="text" placeholder="Pizza Image Here" ref={imageRef} />
            <hr />
            <Input type="text" placeholder="Price Here" ref={priceRef} />
            <hr />
            <Input type="submit" value="Post" />
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Post;
