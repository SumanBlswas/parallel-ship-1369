import {
  Box,
  Flex,
  Heading,
  Link,
  Image,
  Divider,
  Text,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="#222E3A" color="black" p={12}>
      <Flex
        color="white"
        gap={5}
        justify="space-around"
        textAlign="left"
        pb={8}
      >
        <Box>
          <Heading fontSize="20px" color="#546273">
            Menu
          </Heading>
          <Flex fontSize="18px" direction="column" pt={10} gap={4}>
            <Link>Veg Pizza</Link>
            <Link>Chicken Pizza</Link>
            <Link>Pasta</Link>
            <Link>Pizza Crust</Link>
            <Link>Beverages</Link>
            <Link>Pizza Mania</Link>
            <Link>Burger Pizza</Link>
          </Flex>
        </Box>
        <Box>
          <Heading fontSize="20px" color="#546273">
            COMPANY
          </Heading>
          <Flex fontSize="18px" direction="column" pt={10} gap={4}>
            <Link>Blog</Link>
            <Link>Investor</Link>
            <Link>FeedBack</Link>
            <Link>Ads</Link>
          </Flex>
        </Box>
        <Box>
          <Heading fontSize="20px" color="#546273">
            PIZZA RESTAURANTS
          </Heading>
          <Flex fontSize="18px" direction="column" pt={10} gap={4}>
            <Link>Restaurants Near Me</Link>
            <Link>Pizza Near Me</Link>
            <Link>Food Near Me</Link>
            <Link>Food Delivery</Link>
            <Link>Italian Food</Link>
            <Link>Order Food Online</Link>
          </Flex>
        </Box>
        <Box>
          <Heading fontSize="20px" color="#546273">
            ABOUT
          </Heading>
          <Flex fontSize="18px" direction="column" pt={10} gap={4}>
            <Link>Gift Card</Link>
            <Link>Card Balance Enquiry</Link>
            <Link>FAQ</Link>
            <Link>Virtual Pizza Party</Link>
            <Link>E-Gift Voucher</Link>
          </Flex>
        </Box>
        <Box>
          <Heading fontSize="20px" color="#546273">
            LEGAL
          </Heading>
          <Flex fontSize="18px" direction="column" pt={10} gap={4}>
            <Link>Disclaimer</Link>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
          </Flex>
        </Box>
        <Box>
          <Heading fontSize="20px" color="#546273">
            SOCIAL MEDIA
          </Heading>
          <Flex justify="space-between" gap="27px" pt={10}>
            <Image
              src="https://www.dominos.co.in/assets/fb@2x.png"
              alt=""
              w="29px"
              h="28px"
            />
            <Image
              src="https://www.dominos.co.in/assets/twitter@2x.png"
              alt=""
              w="33px"
              h="26px"
            />
            <Image
              src="https://www.dominos.co.in/assets/instagram@2x.png"
              alt=""
              w="31px"
              h="30px"
            />
            <Image
              src="https://www.dominos.co.in/assets/You_tube@2x.png"
              alt=""
              w="40px"
              h="29px"
            />
          </Flex>
          <Box pt={4}>
            <Link to="/admin">Admin Page</Link>
          </Box>
        </Box>
      </Flex>
      <Divider />
      <Box pt={9}>
        <Text color="white">
          All Rights Reserved. Copyright © Suman FoodWorks Ltd.
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
