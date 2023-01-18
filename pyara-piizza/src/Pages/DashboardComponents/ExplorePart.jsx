import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

function ExplorePart() {
  return (
    <Box className="explore">
      <Heading
        as="h2"
        color="#708AA5"
        textAlign="left"
        fontSize="30px"
        pb="24.9"
      >
        Explore
      </Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        // justifyContent="space-around"
        textAlign="center"
      >
        <GridItem w="full" border="1px solid gray" p={4} cursor="pointer">
          <Image
            src="https://www.dominos.co.in/assets/menu@2x.png"
            alt=""
            h="79px"
            w="43px"
          />
          <Text
            as="h3"
            fontWeight="bold"
            fontSize="19px"
            color="#2B4547"
            p="19px 0px"
          >
            OUR MENU
          </Text>
          <Text p="16px 0px">
            Explore our range of delicious Pizzas, delivered in 30 minutes!
          </Text>
          <Divider />
          <br />
          <Text as="span" color="#DE042E" fontWeight="bold">
            DISCOVER PIZZA
          </Text>
        </GridItem>
        <GridItem w="full" border="1px solid gray" p={4} cursor="pointer">
          <Image
            src="https://www.dominos.co.in/assets/store@2x.png"
            alt=""
            h="80px"
            w="64.58px"
          />
          <Text
            as="h3"
            fontWeight="bold"
            fontSize="19px"
            color="#2B4547"
            p="19px 0px"
          >
            NEARBY STORE
          </Text>
          <Text p="16px 0px">Find a Pyara's Pizza restaurant near you</Text>
          <br />
          <Divider />
          <br />
          <Text as="span" color="#DE042E" fontWeight="bold">
            FIND PYARA'S STORE
          </Text>
        </GridItem>
        <GridItem w="full" border="1px solid gray" p={4} cursor="pointer">
          <Image
            src="https://www.dominos.co.in/assets/birthday@2x.png"
            alt=""
            h="80px"
            w="41.21px"
          />
          <Text
            as="h3"
            fontWeight="bold"
            fontSize="19px"
            color="#2B4547"
            p="19px 0px"
          >
            BIRTHDAY PARTY
          </Text>
          <Text p="16px 0px">
            Celebrate the joy of birthday with Fresh & Hot pizzas
          </Text>
          <Divider />
          <br />
          <Text as="span" color="#DE042E" fontWeight="bold">
            BOOK NOW
          </Text>
        </GridItem>
        <GridItem w="full" border="1px solid gray" p={4} cursor="pointer">
          <Image
            src="https://www.dominos.co.in/assets/catering@2x.png"
            alt=""
            h="76px"
            w="76px"
          />
          <Text
            as="h3"
            fontWeight="bold"
            fontSize="19px"
            color="#2B4547"
            p="19px 0px"
          >
            CATERING
          </Text>
          <Text p="16px 0px">
            LIve Pyara's Kitchen for weddings / corporate events
          </Text>
          <Divider />
          <br />
          <Text as="span" color="#DE042E" fontWeight="bold">
            BOOK NOW
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ExplorePart;
