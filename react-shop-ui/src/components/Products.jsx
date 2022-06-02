import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default function Products(props) {
  return (
    <Container>
      {props.roducts.map((product) => (
        <Product product={product} key={item.id} />
      ))}
    </Container>
  );
}
