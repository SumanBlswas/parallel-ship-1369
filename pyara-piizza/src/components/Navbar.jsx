import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import logo from "./logo-pizza.gif";

function Navbar() {
  return (
    <>
      <Flex
        justify="space-around"
        align="center"
        bg="#2B6CCD"
        // position="fixed"
        // w="full" zIndex="1"
      >
        <NavLink to="/">
          <img width={200} src={logo} alt="" />
        </NavLink>
        <Flex gap={20} color="white">
          <NavLink to="/menu">OUR MENU</NavLink>
          <NavLink to="/stores">PYARA'S STORE</NavLink>
          <NavLink to="/gift_card">GIFT CARD</NavLink>
          <NavLink to="/corporate_enquiry">CORPORATE ENQUIRY</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </Flex>
        <NavLink to="/playstore">
          <Button colorScheme="red">Download App</Button>
        </NavLink>
      </Flex>
    </>
  );
}

export default Navbar;
