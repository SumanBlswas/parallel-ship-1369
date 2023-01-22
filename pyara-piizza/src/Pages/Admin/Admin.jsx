import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

function Admin() {
  return (
    <Box h="full" bg="teal" p="1px">
      <Center bg="teal.200" m={20} p="5%" borderRadius="100px">
        <Box bg="pink" p={20} borderRadius="50%">
          <Heading fontFamily="sans">Admin DashBoard</Heading>
          <Grid
            gridTemplateColumns="repeat(2, 1fr)"
            gap={4}
            fontFamily="monospace"
            fontSize="4xl"
            mt="10%"
            bg="blue.800"
            p={20}
            borderRadius="16px"
            boxShadow="-20px 25px 50px 10px"
          >
            <Link to="/admin-product">
              <GridItem
                bg="tomato"
                p={4}
                color="white"
                borderRadius="100px 100px 0px 100px"
                cursor="pointer"
              >
                <Text>Product Page</Text>
              </GridItem>
            </Link>
            <Link to="/admin-customer">
              <GridItem
                bg="twitter.400"
                p={4}
                borderRadius="100px 100px 100px 0px"
                cursor="pointer"
              >
                <Text>Customer Page</Text>
              </GridItem>
            </Link>
            <Link to="/">
              <GridItem
                bg="green.300"
                p={4}
                borderRadius="100px 0px 100px 100px"
                cursor="pointer"
              >
                <Text>Log-Out</Text>
              </GridItem>
            </Link>
            <GridItem
              bg="plum"
              p={4}
              color="white"
              borderRadius="0px 100px 100px 100px"
              cursor="pointer"
            >
              <Popover>
                <PopoverTrigger>
                  <Button
                    bg="none"
                    color="white"
                    fontSize="3xl"
                    _hover="none"
                    _active="none"
                  >
                    Other-Services
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader color="black">Other-Services</PopoverHeader>
                  <PopoverBody color="black">Coming Soon !</PopoverBody>
                </PopoverContent>
              </Popover>
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </Box>
  );
}

export default Admin;
