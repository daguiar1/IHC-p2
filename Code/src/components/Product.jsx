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
  top: 50;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 60px 0px 30px 20px;
    min-width: 300px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #edede9;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
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

const Cond = styled.div`

  position: absolute; /* Position the background text */
  margin: -412px 282px 0px 0px;
  background: rgba(0, 0, 0, 0.8); /* Black background with 0.5 opacity */
  font-weight: bold;
  color: #9AE500; 
  font-family: Sans-serif;
  font-size: 20px;
  width: 15%; /* Full width */
  padding: 7px; /* Some padding */

`;

const Title = styled.h1`

color:black;
    margin-top: 10px;
    margin-bottom: -10px;
    margin-left: 10px;
    font-size: 23px;
    font-family: Monospace;
    
`;

const Background = styled.h1`
  margin-bottom: -126px;
  height: 60px;
  width: 348px;
  background-color: rgba(0, 0, 0, 0.2); 

    
`;

const Price = styled.h1`
    color:#626060;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 25px;
    font-family: Monospace;
    
`;

export default function Product ({ item }){
  return (
    <Container >
     
     <Cond>{item.condition}!</Cond>
      <Figure>
        
        <Figure.Image
          width={250}
          height={370}
          src={item.img}
        />
      <Background>
        <Title>{item.name}</Title>
        <Price>€{item.price}</Price>
      </Background>
        
      </Figure>
      
      
      
      
      <Info>
        <Icon>
        <a href="/product"><SearchOutlined /></a>
        </Icon>
        
      </Info>  
    
    
    </Container>
    
  );
}