import { Box } from "@chakra-ui/react";
import { useState } from "react";
import SecondNav from "../../components/SecondNav";

function Menu() {
  let [loading, setLoading] = useState(true);
  return (
    <Box>
      <SecondNav />
    </Box>
  );
}

export default Menu;
