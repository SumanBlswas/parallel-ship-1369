import { NavLink } from "react-router-dom";
// import AllRoutes from "./AllRoutes";
import "./Admin.css";
import { Box, Heading } from "@chakra-ui/react";

function AdminNavbar() {
  let styles = { textDecoration: "none", color: "white" };
  return (
    <>
      <Box className="nav-bar">
        <NavLink style={styles} to="/menu">
          <Heading>⬅️</Heading>
        </NavLink>
        <NavLink style={styles} to="/admin-product">
          <Heading>Home</Heading>
        </NavLink>
        <NavLink style={styles} to="/post">
          <Heading>Post</Heading>
        </NavLink>
        <NavLink style={styles} to="/put">
          <Heading>Put</Heading>
        </NavLink>
      </Box>
      {/* <AllRoutes /> */}
    </>
  );
}

export default AdminNavbar;
