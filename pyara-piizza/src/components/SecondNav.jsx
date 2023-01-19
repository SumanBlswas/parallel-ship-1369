import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Button, Image, Center } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import logo from "./logo-pizza.gif";
import pizza from "../img/pizzasImg.png";
import { NavLink } from "react-router-dom";

function SecondNav() {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Box zIndex="1">
        <HamburgerIcon
          fontSize="40px"
          position="absolute"
          top="25px"
          left="35px"
          cursor="pointer"
          color="white"
        />
        <Box
          position="absolute"
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
              <Text>MY ACCOUNT</Text>
              <Text>Login | Signup</Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
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
          <DrawerBody background="#E9EDEF">
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
            <Text position="absolute" top="200px" left="41px">
              <b>Login </b>
              to unlock awesome new features
            </Text>
            <Image src={pizza} alt="" position="absolute" top="220px" w="80%" />
            <Center>
              <Box position="absolute" top="280px" pt={10}>
                <Flex direction="column" gap={8}>
                  <Text
                    p="15px 15px 70px 15px"
                    fontSize="12.24px"
                    bg="white"
                    boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                  >
                    <b> Login with your valid mobile number</b>
                    <Stack mt={4} spacing={4} border="1px solid #B3B3B3">
                      <InputGroup>
                        <InputLeftAddon children="+91" />
                        <Input
                          type="tel"
                          placeholder="Phone number"
                          borderLeft="1px solid gray"
                        />
                      </InputGroup>
                    </Stack>
                    <Button
                      p="0px 25px 0px 25px"
                      bg="#B3B3B3"
                      color="white"
                      _hover="none"
                      borderRadius="none"
                      position="absolute"
                      right="4.5%"
                      mt={4}
                    >
                      submit
                    </Button>
                  </Text>
                  <Text
                    p="15px 15px 70px 15px"
                    fontSize="12.24px"
                    bg="white"
                    boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
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
                      <Text as="p" position="absolute" top={353} left={110}>
                        TERMS OF USES
                      </Text>
                    </NavLink>
                  </Text>
                </Flex>
              </Box>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SecondNav;
