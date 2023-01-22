import { useEffect, useState } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { Box, Input, Text, Image, Center, Button } from "@chakra-ui/react";
// import { useParams } from "react-router-dom";
// import { Box } from "@chakra-ui/react";
import "./Admin.css";
import { ChevronDownIcon } from "@chakra-ui/icons";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
} from "@chakra-ui/react";

function MainPage() {
  const [pizza, setPizza] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalPizza, setOriginalPizza] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_AXIOS_LINK}`);
      setOriginalPizza(response.data);
      setPizza(response.data);
      console.log(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  let handleClick = async (id) => {
    const response = await axios.delete(
      `${process.env.REACT_APP_AXIOS_LINK}/${id}`
    );
    setPizza(response.data);
    console.log(response.data);
    window.location.reload();
  };

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (search === "") {
      setPizza(originalPizza);
    } else {
      const filteredPizza = originalPizza.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
      );
      setPizza(filteredPizza.sort((a, b) => a.price - b.price));
      setPizza(filteredPizza.sort((b, a) => b.price - a.price));
      setPizza(
        filteredPizza.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
      );
      setPizza(
        filteredPizza.sort((a, b) =>
          a.name < b.name ? 1 : b.name < a.name ? -1 : 0
        )
      );
    }
  };

  const handleAll = () => {
    setPizza(originalPizza);
  };

  const handleL2H = () => {
    setPizza([...pizza].sort((a, b) => a.price - b.price));
  };

  const handleH2L = () => {
    setPizza([...pizza].sort((a, b) => b.price - a.price));
  };

  const handleA2Z = () => {
    setPizza(
      [...pizza].sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    );
  };

  const handleZ2A = () => {
    setPizza(
      [...pizza].sort((a, b) =>
        a.name < b.name ? 1 : b.name < a.name ? -1 : 0
      )
    );
  };

  return (
    <Box className="Main">
      {loading ? (
        <Spinner
          pt="50%"
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red"
          size="xl"
        />
      ) : (
        <Box>
          <AdminNavbar />
          <Center  mt={5}>
            <Box w="20%">
              <Input
                placeholder="Search"
                value={search}
                onChange={handleSearch}
                onKeyUp={handleSearch}
              />
            </Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Sorting
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleAll}>All</MenuItem>
                <MenuItem onClick={handleH2L}>High to Low</MenuItem>
                <MenuItem onClick={handleL2H}>Low to High</MenuItem>
                <MenuItem onClick={handleA2Z}>A-2-Z</MenuItem>
                <MenuItem onClick={handleZ2A}>Z-2-A</MenuItem>
              </MenuList>
            </Menu>
          </Center>
          <Box className="img">
            {pizza.map((el) => (
              <Box key={el.id}>
                <Box>
                  <Image src={el.img} alt="" />
                  <Text>{el.name}</Text>
                  <Text>${el.price}</Text>
                  <Input
                    onClick={() => handleClick(el.id)}
                    type="submit"
                    value="Delete"
                  />
                </Box>
              </Box>
            ))}
            <Box>
              <Box>
                <Link to="/post">
                  <Image
                    src={process.env.REACT_APP_ADD_MORE_IMAGE_LINK}
                    alt=""
                  />
                  <Input
                    onSubmit={(e) => e.preventDefault()}
                    type="submit"
                    value="Add➡️"
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default MainPage;
