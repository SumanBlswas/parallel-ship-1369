import React from "react";
import { Flex, Container, Box } from "@chakra-ui/react";
import Cart from "./Cart";
import Details from "./Details";

function PaymentPage() {
  return (
    <>
      <Box>
        <Box w="full">
          <Container maxW="container.xl" p={0}>
            <Flex
              h={{ base: "auto", md: "100vh" }}
              py={[0, 10, 20]}
              direction={{ base: "column-reverse", md: "row" }}
            >
              <Details />
              <Cart />
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default PaymentPage;
