import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const MenuItem2 = styled.h2`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ShoppingBagIcon fontSize="Large"/>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <MenuItem2><a href="/productListLogged">BUY</a></MenuItem2>
        </Center>
        <Center>
          <Logo>
            <Link to="/homeLogged">ONWEAR</Link></Logo>
        </Center>
        <Center>
          <MenuItem2><a href="/sell">SELL</a></MenuItem2>
        </Center>
        <Right>  
          <MenuItem>           
              <a href="/account">
              <AccountCircleIcon fontSize="Large" />
              </a>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <a href="/cart">
              <ShoppingCartOutlined />
              </a>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
