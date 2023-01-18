import { Box, Heading, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExplorePart from "./ExplorePart";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  // AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

function CarouselFunction() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <Box p="80px" pb={0} pt={5}>
      <Heading
        as="h2"
        color="#708AA5"
        textAlign="left"
        fontSize="30px"
        pb="24.9"
      >
        Coupons & Offers
      </Heading>
      <Box pb="24.9px">
        <Carousel responsive={responsive}>
          <div className="card" onClick={onOpen}>
            <img
              src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg"
              alt=""
            />
          </div>
          <div className="card" onClick={onOpen}>
            <img
              src="https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg"
              alt=""
            />
          </div>
          <div className="card" onClick={onOpen}>
            <img
              src="https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg"
              alt=""
            />
          </div>
          <div className="card" onClick={onOpen}>
            <img
              src="https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg"
              alt=""
            />
          </div>
          <div className="card" onClick={onOpen}>
            <img
              src="https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg"
              alt=""
            />
          </div>
          <div className="card" onClick={onOpen}>
            <img
              src="https://api.dominos.co.in/prod-olo-api/images/Home_payzapp_20201029.jpg"
              alt=""
            />
          </div>
          <div className="card" onClick={onOpen}>
            <img
              src="https://api.dominos.co.in/prod-olo-api/images/Home_au_20201029.jpg"
              alt=""
            />
          </div>
        </Carousel>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent
            p="16px 24px"
            color="#708AA5"
            fontFamily="proximaNova"
            textAlign="center"
            fontWeight="bolder"
          >
            <AlertDialogCloseButton />
            <AlertDialogBody fontSize="25px" p="37.5px 0 30px">
              To avail the offer, select Delivery or Pick Up location
            </AlertDialogBody>
            <AlertDialogFooter>
              <NavLink to="/menu">
                <Button
                  w="full"
                  bg="#1FB31A"
                  color="white"
                  _hover="none"
                  fontSize="22px"
                  fontWeight="light"
                  p="30px 66px"
                >
                  SELECT LOCATION
                </Button>
              </NavLink>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Box>
      <ExplorePart />
    </Box>
  );
}

export default CarouselFunction;
