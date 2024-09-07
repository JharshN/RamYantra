import React from 'react'
import Link from "next/link";
import{
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button
} from "@chakra-ui/react"

function Navnew() {
  return (
    <Menu>
      <MenuButton as={Button} colorScheme="blue">
        Explore the site ⬇️
      </MenuButton>
      <MenuList>
        <Link href={"/form"}>
          <MenuItem>Indices & Daily Level</MenuItem>
        </Link>
        <Link href={"/aboutus"}>
          <MenuItem>Foreign & Domestic Institutional Investors</MenuItem>
        </Link>
        <MenuDivider />
        <Link href={"/contactus"}>
          <MenuItem>Grey Market Premium</MenuItem>
        </Link>
        <Link href={"/product"}> 
          <MenuItem>
            <b>Our Products</b>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}

export default Navnew