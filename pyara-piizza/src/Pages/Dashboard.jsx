import { Heading, Button, Text, Flex, Box, Image } from "@chakra-ui/react";
import React from "react";
import Headerbg from "../img/Headerbg.png";
import { NavLink } from "react-router-dom";
import CarouselFunction from "./DashboardComponents/Carousel";
import AppDownload from "./DashboardComponents/AppDownload";
import SeoContent from "./DashboardComponents/SeoContent";
import Footer from "./Footer";

function Dashboard() {
  return (
    <Box>
      <Box h="89.15px"></Box>
      <Flex align="center" bg="#1A5CA3">
        <Box w="48%" p={20}>
          <Heading textAlign="left" color="white">
            Pyara's online ordering
          </Heading>
          <Text fontSize="21px" textAlign="left" color="#47A0FF" pb={6}>
            Yummy pizza delivered fast & fresh
          </Text>
          <NavLink to="/menu">
            <Button
              fontWeight="bold"
              color="white"
              _hover="none"
              p="30px 5px 30px 5px"
              w="full"
              fontSize="20px"
              bg="#1FB31A"
            >
              ORDER ONLINE NOW
            </Button>
          </NavLink>
          <Image
            src="https://www.dominos.co.in/assets/banner_brand_20210922.jpg"
            alt="Add"
            pt={4}
          />
        </Box>
        <Box w="full">
          <NavLink to="/menu">
            <Image w="full" src={Headerbg} alt="BannerImage" />
          </NavLink>
        </Box>
      </Flex>
      <Box
        w="full"
        bg="#EEEEEE"
        p={2}
        mt={4}
        textAlign="left"
        color="#0275D8"
        _hover={{ textDecoration: "underline", color: "black" }}
      >
        <NavLink to="/">Home</NavLink>
      </Box>
      <CarouselFunction />
      <AppDownload />
      <SeoContent />
      <Footer />
    </Box>
  );
}

export default Dashboard;
