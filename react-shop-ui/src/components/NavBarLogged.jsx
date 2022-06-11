import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Logo1 from "../imagens/logoOn.png"
import LogoBuy from "../imagens/logoBuy.png"
import LogoSell from "../imagens/logoSell.png"

const Container = styled.div`
background-color: #edede9;
  height: 78px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
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
  border: 2px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-top: -135px;
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

height: 195px;
width: 195px;
margin: 0 auto;
display: block;
position: absolute;
top: -70px;
left: calc((100% - 430px) / 2);
z-index: 100000;
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
  margin-top: -135px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;



const ImageLogo = styled.img`

width: 185%;
display: block;
`;
const ImageLogo2 = styled.img`
margin-left: 10px;
margin-top: -90px;
width: 85%;
display: block;

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
          <a href="/productListLogged">
           <ImageLogo2 src={LogoBuy}></ImageLogo2>
            </a>
          
        </Center>
        <Center>
          <Logo>
            <a href="/homeLogged">
            <ImageLogo src={Logo1}></ImageLogo>
            </a>
          </Logo>
        </Center>
        <Center>
        <a href="/Sell">
           <ImageLogo2 src={LogoSell}></ImageLogo2>
            </a>
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
