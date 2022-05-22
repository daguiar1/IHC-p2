import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { popularProducts } from "../data";
import { mobile } from "../responsive";



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

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;



const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>ACCOUNT DETAILS</Title>
        <Top>
          <h1>Hi, <b>Rafael Dias</b></h1>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src= "https://www.corporatephotographerslondon.com/wp-content/uploads/2016/07/approachable-professional-headshots-London.jpg" />
                <Details>
                <Form>
                    <Input placeholder="FIRST NAME"/>
                    <Input placeholder="LAST NAME"/>
                    <Input placeholder="EMAIL ADDRESS"/>
                    <Input placeholder="ADDRESS"/>
                    <Input placeholder="CITY"/>
                    <Input placeholder="POSTCODE"/>
                </Form>
                <Button >SAVE</Button>
                </Details>
                
              </ProductDetail>
            </Product>
            
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
