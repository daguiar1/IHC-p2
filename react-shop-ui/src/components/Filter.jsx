import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`; 

const Select = styled.select`
  padding: 10px;
  margin-right: 50px;
  
`;
const Option = styled.option``;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filtr = styled.div`
  margin: 20px;
`;


export default function Filter 
({sorts, sorting, col, filteringColor, siz, filteringSize, gend, filteringGender, cond, filteringCondition }){
  return (
    <Container>
    <FilterContainer>
        <Filtr>
    <FilterText>Filter Products:</FilterText>
        {/* sorting price */}
      <Select value={sorts} onChange={sorting}>
          <Option value="all">Price</Option>
          <Option value="low">Low to High</Option>
          <Option value="high">High to Low</Option>
      </Select>


        {/* filtering by color */}
      <Select value={col} onChange={filteringColor}>
          <Option value="all">Color</Option>
          <Option value="Black">Black</Option>
          <Option value="White">White</Option>
          <Option value="Blue">Blue</Option>
          <Option value="Green">Green</Option>
          <Option value="Orange">Orange</Option>
      </Select>

      {/* filtering by size */}
      <Select value={siz} onChange={filteringSize}>
          <Option value="all">Size</Option>
          <Option value="S">S</Option>
          <Option value="M">M</Option>
          <Option value="L">L</Option>
          <Option value="XL">XL</Option>
      </Select>

      {/* filtering by gender */}
      <Select value={gend} onChange={filteringGender}>
          <Option value="all">Gender</Option>
          <Option value="Men">Men</Option>
          <Option value="Women">Women</Option>
      </Select>

      {/* filtering by condition*/}
      <Select value={cond} onChange={filteringCondition}>
          <Option value="all">Condition</Option>
          <Option value="New">New</Option>
          <Option value="Used">Used</Option>
      </Select>
      </Filtr>
      </FilterContainer>
      
    </Container>
  );
}
