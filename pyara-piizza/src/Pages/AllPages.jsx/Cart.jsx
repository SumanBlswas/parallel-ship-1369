import {
  Heading,
  HStack,
  VStack,
  Image,
  AspectRatio,
  Text,
  Divider,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import logo from "./logo-pizza.gif";
import React from "react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  let getNo = localStorage.getItem("Phone");
  let getPrice = localStorage.getItem("Cart-Price");
  const [isLoading, setIsLoading] = React.useState(false);

  let handleCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    localStorage.setItem("Cart-Price", "");
    window.location.reload();
  };

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      align="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Card Details</Heading>
        <Text as="div" textAlign="left">
          If You Think White Color is not Good for Your Eyes
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            Change to Dark-Mode & Vice-Versa
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={2} w={40}>
          <Image src={logo} alt="logo" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Fill All the Card Details</Heading>
            <Text color={secondaryTextColor}>{getNo}</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            Master, Visa & Rupay
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Input placeholder="Card Number" maxLength="12" />
        </HStack>
        <HStack justifyContent="space-between">
          <Input placeholder="Month/Year" />
          <Input placeholder="CVV" />
        </HStack>
        {/* <Divider /> */}
        <HStack justifyContent="space-between">
          <Text>
            *Including GST of ₹{Math.floor(getPrice * 81.12 * (18 / 100))} &
            Delivery Fee of ₹60
          </Text>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">
          ₹{Math.floor(getPrice * 81.12 + 60 + getPrice * 81.12 * (18 / 100))}
        </Heading>
      </HStack>
      <Button
        variant="outline"
        size="lg"
        w="full"
        colorScheme="blue"
        onClick={handleCart}
        isLoading={isLoading}
      >
        Clear All-Cart
      </Button>
    </VStack>
  );
};

export default Cart;
