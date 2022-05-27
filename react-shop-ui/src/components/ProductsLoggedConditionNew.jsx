import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./ProductLogged";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.filter(item=> item.condition =="New").map(filteredItem=>(
        <Product item={filteredItem} key={filteredItem.id} />
      ))}
    </Container>
  );
};

export default Products;