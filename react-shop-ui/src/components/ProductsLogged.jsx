import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./ProductLogged";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default function Products(props){
  return (
    <Container>
      {props.products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

 
