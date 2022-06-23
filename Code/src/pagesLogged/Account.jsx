import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/FooterLogged";
import Navbar from "../components/NavBarLogged";
import { mobile } from "../responsive";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Image = styled.img`
  width: 200px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const buttons = [
    <a href="/accountDetails"><Button >ACCOUNT DETAILS</Button></a>,
    <a href="/sellingProducts"><Button >SELLING PRODUCTS</Button></a>,
  ];

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>MY ACCOUNT</Title>
        <Top>
          <h1>Hi, <b>Admin</b></h1>
        </Top>
        
        <Center>
            <Image src= "https://www.corporatephotographerslondon.com/wp-content/uploads/2016/07/approachable-professional-headshots-London.jpg" />
        </Center>
            <Left>
                <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
                >
                {buttons}
                </ButtonGroup> 
            </Left>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
