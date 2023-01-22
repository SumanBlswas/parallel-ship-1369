import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Center,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Admin from "./Admin";

function Adminlogin() {
  const [input, setInput] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const handleInputChange = (e) => setInput(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const isError = input === "";
  const isError2 = password === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === "admin@123.com" && password === "admin") {
      alert("Login Successfull");
      setIsLoggedIn(true);
    } else {
      alert("wrong Credential");
    }
  };

  return (
    <Box>
      {isLoggedIn ? (
        <Admin />
      ) : (
        <Box>
          <Navbar />
          <Flex justify="center">
            <Text fontSize={30} fontWeight="bolder" pt="15%">
              Admin Login
            </Text>
          </Flex>
          <Center boxSizing="border-box">
            {/* <Text>Admin Login</Text> */}
            <Box mt="5%" border="2px solid black" p={8} borderRadius={16}>
              <form onSubmit={handleSubmit}>
                <FormControl isInvalid={isError} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={input}
                    onChange={handleInputChange}
                    isRequired="true"
                    placeholder="Enter Your Email Here!"
                    ref={emailRef}
                  />
                  {!isError ? (
                    <FormHelperText>
                      Enter the email to proceed to the password section.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={isError2} isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    isRequired="true"
                    placeholder="Enter Password Here!"
                    ref={passwordRef}
                  />
                  {!isError2 ? (
                    <FormHelperText>
                      Enter the password to login.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl pt={4}>
                  <Button type="submit" variant="outline" colorScheme="blue">
                    Submit
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Center>
        </Box>
      )}
    </Box>
  );
}

export default Adminlogin;
