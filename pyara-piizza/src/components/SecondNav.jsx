import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Center,
  Heading,
  Container,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { GiFullPizza } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { IoTicketSharp, IoNewspaperOutline } from "react-icons/io5";
import { RiHealthBookFill } from "react-icons/ri";
import { BsGift } from "react-icons/bs";
import { MdFeedback } from "react-icons/md";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  PinInput,
  PinInputField,
  HStack,
} from "@chakra-ui/react";
import logo from "./logo-pizza.gif";
import pizza from "../img/pizzasImg.png";
import { NavLink } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Context } from "../Context/AppContextProvider";

function SecondNav() {
  const { logout, login } = React.useContext(Context);

  const getName = JSON.parse(localStorage.getItem("details")) || [];
  const Name = getName.name;
  const Email = getName.email;

  const getPhone = JSON.parse(localStorage.getItem("Phone")) || [];
  const PhoneNo = getPhone;

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const fNameRef = React.useRef(null);
  const lNameRef = React.useRef(null);
  const emailRef = React.useRef(null);

  const hanldeSubmitInfo = (e) => {
    e.preventDefault();
    const name = fNameRef.current.value + " " + lNameRef.current.value;
    const email = emailRef.current.value;
    const details = {
      name,
      email,
    };
    localStorage.setItem("details", JSON.stringify(details));

    console.log(name, email);
  };

  const mobNumberRef = React.useRef(null);

  const localOTP = localStorage.getItem("OTP");
  console.log(localOTP);
  const [size, setSize] = React.useState("");
  const loClick = useDisclosure();
  const click = useDisclosure();
  const leftDrawer = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    loClick.onOpen();
  };

  const pinInputField1Ref = React.useRef(null);
  const pinInputField2Ref = React.useRef(null);
  const pinInputField3Ref = React.useRef(null);
  const pinInputField4Ref = React.useRef(null);

  const [bgColor, setBgColor] = React.useState("#B3B3B3");
  const maxL = 10;
  const [displayLoginPart, setDisplayLoginPart] = React.useState("block");
  const [displayOTPPart, setDisplayOTPPart] = React.useState("none");
  const [text, setText] = React.useState(
    " Login with your valid mobile number"
  );

  const handleColorForMobileNumber = () => {
    const vaues = mobNumberRef.current.value;
    vaues.length === maxL ? setBgColor("#65AB0B") : setBgColor("#B3B3B3");
  };

  let handleMobNum = () => {
    let mobileNumber = mobNumberRef.current.value;
    console.log(mobileNumber);
    localStorage.setItem("Phone", mobileNumber);
    const sendOtp = async () => {
      try {
        const otp = Math.floor(1000 + Math.random() * 9000);
        alert(`Hey Your Otp is ${otp}`);
        localStorage.setItem("OTP", otp);
      } catch (error) {
        alert(error);
      }
    };
    sendOtp();
    setDisplayLoginPart("none");
    setDisplayOTPPart("block");
    setText("  Enter Your OTP Here to Get Exciting Offers");
  };

  let handleOTP = () => {
    const OTPRef = `${pinInputField1Ref.current.value}${pinInputField2Ref.current.value}${pinInputField3Ref.current.value}${pinInputField4Ref.current.value}`;
    let OTPNumber = OTPRef;
    if (localOTP === OTPNumber) {
      click.onOpen();
      console.log("success");
    } else {
      console.log("Wrong");
    }
    console.log(OTPNumber);
  };

  return (
    <>
      <Box position="fixed" zIndex="1">
        <HamburgerIcon
          fontSize="40px"
          position="absolute"
          top="25px"
          left="35px"
          cursor="pointer"
          color="white"
          onClick={leftDrawer.onOpen}
        />
        <Box
          position="fixed"
          right="0"
          top="15px"
          background="#2B6CCD"
          p="10px 110px 0px 10px"
          cursor="pointer"
          color="white"
          onClick={() => handleClick("md")}
        >
          <Flex gap={6}>
            <FaUserCircle color="white" fontSize="40px" />
            <Box>
              {Name === "" ? (
                <>
                  <Text>MY ACCOUNT</Text>
                  <Text>Login | Signup</Text>
                </>
              ) : (
                <>
                  <Text>{Name}</Text>
                  <Text>Log Out</Text>
                </>
              )}
            </Box>
          </Flex>
        </Box>
      </Box>

      <Drawer onClose={loClick.onClose} isOpen={loClick.isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            position="absolute"
            left="-55px"
            p="25px 100px 25px 25px"
            borderRadius="50px 0 0 50px"
            background="#E9EDEF"
            zIndex="-1"
          />
          <Box boxShadow="0px 0px 15px 7px" h="full" background="#E9EDEF">
            <DrawerBody>
              <Image
                src="https://pizzaonline.dominos.co.in/static/assets/login_pizza_image@2x.png"
                alt=""
                pos="absolute"
                right="0"
              />
              <Box
                position="absolute"
                borderRadius="16px"
                top="85px"
                left="30px"
                overflow="hidden"
              >
                <Image width={200} src={logo} alt="" borderRadius="16px" />
              </Box>
              <Text as="div" position="absolute" top="200px" left="41px">
                <b>Login </b>
                to unlock awesome new features
              </Text>
              <Image
                src={pizza}
                alt=""
                position="absolute"
                top="220px"
                w="80%"
              />
              <Center>
                <Box position="absolute" top="280px" pt={10}>
                  {Name !== "" ? (
                    <Container textAlign="center">
                      <Box textAlign="left">
                        <Heading fontSize="25px">Name: {Name}</Heading>
                        <Heading fontSize="25px">Email: {Email}</Heading>
                        <Heading fontSize="25px">Phone No: {PhoneNo}</Heading>
                      </Box>
                      <Button mt={8} colorScheme="red" onClick={() => logout()}>
                        Log Out
                      </Button>
                    </Container>
                  ) : (
                    <Flex direction="column" gap={8}>
                      <Text
                        as="div"
                        p="15px 15px 70px 15px"
                        fontSize="12.24px"
                        bg="white"
                        boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                      >
                        <b>{text}</b>
                        <Stack
                          mt={4}
                          spacing={4}
                          border="1px solid #B3B3B3"
                          display={displayLoginPart}
                        >
                          <InputGroup>
                            <InputLeftAddon children="+91" />
                            <Input
                              type="number"
                              placeholder="Phone number"
                              borderLeft="1px solid gray"
                              maxLength={maxL}
                              ref={mobNumberRef}
                              onChange={handleColorForMobileNumber}
                            />
                          </InputGroup>
                        </Stack>
                        <Button
                          p="0px 25px 0px 25px"
                          bg={bgColor}
                          color="white"
                          _hover="none"
                          borderRadius="none"
                          position="absolute"
                          right="4.5%"
                          mt={4}
                          onClick={handleMobNum}
                          display={displayLoginPart}
                        >
                          submit
                        </Button>
                        <Box display={displayOTPPart}>
                          <HStack>
                            <PinInput>
                              <PinInputField ref={pinInputField1Ref} />
                              <PinInputField ref={pinInputField2Ref} />
                              <PinInputField ref={pinInputField3Ref} />
                              <PinInputField ref={pinInputField4Ref} />
                            </PinInput>
                          </HStack>
                          <Button
                            p="0px 25px 0px 25px"
                            bg={bgColor}
                            color="white"
                            _hover="none"
                            borderRadius="none"
                            position="absolute"
                            right="4.5%"
                            mt={4}
                            onClick={handleOTP}
                          >
                            submit
                          </Button>
                        </Box>
                      </Text>
                      <Text
                        as="div"
                        p="15px 15px 70px 15px"
                        fontSize="12.24px"
                        bg="white"
                        boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                        display={displayLoginPart}
                      >
                        <b> Login with social accounts</b>
                        <Flex justify="space-between" color="white" pt={5}>
                          <Button bg="#3B5998" maxW="max-content" _hover="none">
                            <Flex justify="space-between" gap={2}>
                              <Image
                                src="https://pizzaonline.dominos.co.in/static/assets/icons/facebook.svg"
                                alt=""
                              />
                              <Text>FACEBOOK</Text>
                            </Flex>
                          </Button>
                          <Button bg="#DC4E41" maxW="max-content" _hover="none">
                            <Flex justify="space-between" gap={5}>
                              <Image
                                src="https://pizzaonline.dominos.co.in/static/assets/icons/gmail.svg"
                                alt=""
                              />
                              <Text>GMAIL</Text>
                            </Flex>
                          </Button>
                        </Flex>
                        <NavLink>
                          <Text as="h3" position="absolute" top={353} left={110}>
                            TERMS OF USES
                          </Text>
                        </NavLink>
                      </Text>
                    </Flex>
                  )}
                </Box>
              </Center>
            </DrawerBody>
          </Box>
        </DrawerContent>
      </Drawer>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={click.isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <form onSubmit={hanldeSubmitInfo}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input ref={fNameRef} placeholder="First name" />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Last name</FormLabel>
                <Input ref={lNameRef} placeholder="Last name" />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  ref={emailRef}
                  type="email"
                  placeholder="Email Address"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                onClick={() => login()}
              >
                Save
              </Button>
              <Button onClick={click.onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
      <Drawer
        placement="left"
        onClose={leftDrawer.onClose}
        isOpen={leftDrawer.isOpen}
      >
        <DrawerOverlay />
        <DrawerContent bg="#E9EDEF">
          <DrawerCloseButton
            position="absolute"
            right="-55px"
            p="25px 25px 25px 100px"
            borderRadius="50px 50px 50px 50px"
            background="#E9EDEF"
            zIndex="-1"
          />
          <Box boxShadow="0px 0px 15px 7px" h="full">
            <DrawerHeader borderBottomWidth="1px" textAlign="left">
              <Flex gap={2}>
                <SlLocationPin fontSize={40} />
                TRACK CURRENT ORDER
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Flex direction="column" gap={10}>
                <Flex gap={6}>
                  <GiFullPizza fontSize={25} />
                  <Text>Order History</Text>
                </Flex>
                <Flex gap={6}>
                  <GoHome fontSize={25} />
                  <Text>Home</Text>
                </Flex>
                <Flex gap={6}>
                  <IoTicketSharp fontSize={25} />
                  <Text>Deals & Offers</Text>
                </Flex>
                <Flex gap={6}>
                  <RiHealthBookFill fontSize={25} />
                  <Text>Menu</Text>
                </Flex>
                <Flex gap={6}>
                  <BsGift fontSize={25} />
                  <Text>Everyday Value Offers</Text>
                </Flex>
                <Flex gap={6}>
                  <IoNewspaperOutline fontSize={25} />
                  <Text>Terms & Condition</Text>
                </Flex>
                <Flex gap={6}>
                  <MdFeedback fontSize={25} />
                  <Text>Feedback</Text>
                </Flex>
                <Flex gap={6}>
                  <GiFullPizza fontSize={25} />
                  <Text>Bulk Offers</Text>
                </Flex>
              </Flex>
            </DrawerBody>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SecondNav;
