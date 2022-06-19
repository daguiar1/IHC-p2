import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import Figure from 'react-bootstrap/Figure'


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 7px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #edede9;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export default function Product ({ item }){
  return (
    <Container>
      
      <h2>Price: {item.price}€ </h2>
      <Figure>
        <Figure.Image
          width={173}
          height={231}
          src={item.img}
        />
        <Figure.Caption>
          {item.name}
        </Figure.Caption>
      </Figure>
    
      
      <Info>
        <Icon>
        <a href="/product"><SearchOutlined /></a>
        </Icon>
        
      </Info>  
      <h2>{item.condition}</h2>
    
    </Container>
  );
}