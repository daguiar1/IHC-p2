import styled from "styled-components";
import Navbar from "../components/NavBarLogged";
import Announcement from "../components/Announcement";
import Products from "../components/ProductsLogged";
import Footer from "../components/FooterLogged";
import { mobile } from "../responsive";
import { Slider } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

function valuetext(value) {
  return `${value}°C`;
}





const ProductList = () => {
  var color = "";
  var size = "";
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Clothes</Title>
      ola
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option color={"White"}>White</Option>
            <Option color={"Black"}>Black</Option>
            <Option color={"Red"}>Red</Option>
            <Option color={"Blue"}>Blue</Option>
            <Option color={"Yellow"}>Yellow</Option>
            <Option color={"Green"}>Green</Option>
          </Select>
          <Select >
            <Option disabled selected>
              Size
            </Option>
            <Option value={"XS"}>XS</Option>
            <Option value={"S"}>S</Option>
            <Option value={"M"}>M</Option>
            <Option value={"L"}>L</Option>
            <Option value={"XL"}>XL</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Gender
            </Option>
            <Option value={"Men"}>Men</Option>
            <Option value={"Women"}>Women</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Condition
            </Option>
            <Option value={"New"}>New</Option>
            <Option value={"Used"}>Used</Option>
          </Select>
          <Box sx={{ width: 300 }}>
            Price Range €
            <Slider
              getAriaLabel={() => 'Price range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
  
    </Container>
    
  );
};

export default ProductList;
