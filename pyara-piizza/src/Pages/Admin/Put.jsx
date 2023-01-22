import React from "react";
import { useRef } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import { Box, Heading, Input } from "@chakra-ui/react";
import "./Admin.css";

function Put() {
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const priceRef = useRef(null);
  const idRef = useRef(null);

  let handleClick = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const img = imageRef.current.value;
    const price = priceRef.current.value;
    const id = idRef.current.value;

    let response = await axios.put(
      `${process.env.REACT_APP_AXIOS_LINK}/${id}`,
      {
        name: name,
        img: img,
        price: price,
      }
    );
    console.log(response.data);
    alert("Product has been updated!");
  };
  return (
    <Box>
      <AdminNavbar />
      <Box className="Main">
        <Box className="div">
          <form action="" method="post" onSubmit={handleClick}>
            <Heading>Put Form</Heading>
            <Input type="text" placeholder="Pizza Name Here" ref={nameRef} />
            <hr />
            <Input type="text" placeholder="Pizza Image" ref={imageRef} />
            <hr />
            <Input type="text" placeholder="Price Here" ref={priceRef} />
            <hr />
            <Input type="number" placeholder="ID" ref={idRef} />
            <hr />
            <Input type="submit" value="Put" />
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Put;
