import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function AppDownload() {
  return (
    <Box boxSizing="content-box">
      <Box pt="132px">
        <Flex
          className="app-download"
          justify="center"
          bg="#F2F5FC"
          pl={25}
          pr={25}
        >
          <Box p="0 16px 0 0">
            <Image
              src="https://www.dominos.co.in/assets/new_app_img@2x.png"
              alt=""
              w="735px"
              h="400px"
              pr="160px"
            />
          </Box>
          <Box p="72px 0 0">
            <Box textAlign="left">
              <Heading color="#59688C">Unloack Exclusive Offers</Heading>
              <Text color="#8899C0" fontSize="27px" m="27px 0">
                For lightning fast ordering experience <br /> download the
                Pyara's app
              </Text>
            </Box>
            <Flex>
              <Image
                src="https://www.dominos.co.in/assets/play_store@2x.png"
                alt=""
                w="194px"
                h="58px"
                // pr={4}
              />
              <Image
                src="https://www.dominos.co.in/assets/app_store@2x.png"
                alt=""
                w="193px"
                h="57px"
                // pl={4}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default AppDownload;
