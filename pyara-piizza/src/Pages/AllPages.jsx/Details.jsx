import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const getPrice = localStorage.getItem("Cart-Price");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    onOpen();
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleHome = () => {
    localStorage.setItem("Cart-Price", "");
    onClose();
  };

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Delivery Address</Heading>
        <Text>Fill your all details & Shiping Details.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Suman" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Biswas" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Park Street, Kolkata, 700001, WB" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Kolkata" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="in">India</option>
              <option value="bd">Bangladesh</option>
              <option value="jp">Japan</option>
              <option value="pk">Pakistan</option>
              <option value="uae">United Amir Emirates</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button
            variant="outline"
            size="lg"
            w="full"
            colorScheme="blue"
            isDisabled={getPrice === "" ? true : false}
            isLoading={isLoading}
            onClick={handleClick}
          >
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
      <>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>
              Yah! Order Successfully Placed!
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Thank You for being Our Customer. See You Again !
              <br />
              Your Order Will be Delivered Shortly.
              <br />
              Order Id :-
              {Math.floor(Math.random() * 99999999999) + 10000000000}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Link to="/menu">
                <Button ref={cancelRef} onClick={handleHome} colorScheme="red">
                  Proceed to HomePage
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    </VStack>
  );
};

export default Details;
