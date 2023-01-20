import { Box, Center, Flex, Image, Select } from "@chakra-ui/react";
import SecondNav from "../../components/SecondNav";
import {
  HStack,
  Stack,
  Card,
  Button,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Divider,
  Highlight,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Footer from "../Footer";

function Menu() {
  // let [loading, setLoading] = useState(true);
  let [data, setData] = React.useState([]);
  let [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    let pizzaApi = async () => {
      await axios
        .get(
          `https://63c2998ce3abfa59bdaf9e62.mockapi.io/suman/api/v12/1/Pizza`
        )
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        });
    };
    pizzaApi();
  }, []);

  let handleAdd = async (id) => {
    await axios
      .get(
        `https://63c2998ce3abfa59bdaf9e62.mockapi.io/suman/api/v12/1/Pizza//${id}`
      )
      .then((res) => {
        setCart([...cart, res.data]);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Box bgColor="#F5F5F5">
      <SecondNav />
      <Box>
        <Box w="full" h="36px"></Box>
        <HStack spacing="40px" mt="6%">
          <Box w="70%" h="full" bg="yellow.200" pt={10}>
            <Heading textAlign="left" pl="10%">
              <Highlight
                query={["Best Seller"]}
                styles={{
                  px: "4",
                  py: "2",
                  rounded: "full",
                  bg: "red",
                  color: "white",
                  fontSize: "20px",
                  position: "absolute",
                  top: "28",
                }}
              >
                Best Seller
              </Highlight>
              <Divider />
            </Heading>
            <Flex
              direction="row"
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              gap={10}
            >
              {data.map((el) => (
                <Box mr={2} w={["40%", "40%"]} key={el.id}>
                  <Card maxW="sm">
                    <CardBody>
                      <Image src={el.img} alt={el.name} borderRadius="lg" />
                      <Stack mt="6" spacing="3">
                        <Heading size="sm">{el.name}</Heading>
                        <Text pt={2}>{el.description}</Text>
                        <Text
                          color="blue.600"
                          fontSize="xl"
                          position="absolute"
                          top="51%"
                        >
                          ₹{Math.floor(el.price * 81.12)}
                        </Text>
                        <Flex direction="row" gap={4.5}>
                          <Select cursor="pointer">
                            <option>Medium Serves 2</option>
                            <option disabled>Large Serves 4</option>
                          </Select>
                          <Select cursor="pointer">
                            <option>New Hand Toast</option>
                          </Select>
                        </Flex>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        ml="70%"
                        onClick={() => handleAdd(el.id)}
                      >
                        Add to cart
                      </Button>
                    </CardFooter>
                  </Card>
                </Box>
              ))}
            </Flex>
          </Box>
          <Box
            w="30%"
            h="450px"
            bg="tomato"
            p="50px"
            position="fixed"
            zIndex="1"
            top="26%"
            right="0"
            pb="525px"
            // maxHeight="container.md"
          >
            <Center>
              <Card h="full" w="full">
                <Box
                  className="cart"
                  style={{ overflowY: "scroll", maxHeight: "386px" }}
                >
                  <Flex direction="column" gap={2}>
                    {cart.map((item) => (
                      <Card key={item.id}>
                        <CardBody>
                          <Image
                            src={item.img}
                            alt={item.name}
                            borderRadius="lg"
                          />
                          <Stack mt="6" spacing="3">
                            <Heading size="sm">{item.name}</Heading>
                            <Text pt={2}>{item.description}</Text>
                            <Text>₹{Math.floor(item.price * 81.12)}</Text>
                          </Stack>
                        </CardBody>
                        <CardFooter>
                          <Button
                            variant="outline"
                            colorScheme="blue"
                            onClick={() => handleDelete(item.id)}
                          >
                            Remove
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </Flex>
                </Box>
                <Divider />
                <CardFooter>
                  <Flex justify="space-between" gap={130}>
                    <Text>Total Amount: ₹{Math.floor(totalPrice * 81.12)}</Text>

                    <Button
                      variant="solid"
                      colorScheme="blue"
                      mt={2}
                      // ml="70%"
                      // onClick={() => handleAdd(el.id)}
                    >
                      Buy Now
                    </Button>
                  </Flex>
                </CardFooter>
              </Card>
            </Center>
          </Box>
        </HStack>
      </Box>
      <Box position="relative" zIndex="1">
        <Footer />
      </Box>
    </Box>
  );
}

export default Menu;
