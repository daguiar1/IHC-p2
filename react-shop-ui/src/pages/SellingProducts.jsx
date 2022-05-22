import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { sellingProducts } from "../data";
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

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;




const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>SELLING PRODUCTS</Title>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src= {sellingProducts[0].img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> VANS SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <b>STATUS: </b>
                    <ProductColor color="green"/>
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>Estimated selling price: 25 €</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src= {sellingProducts[2].img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> NIKE COURT VISION LOW
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 56323328343
                  </ProductId>
                  <b>STATUS: </b>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b> 42,5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>Estimated selling price: 60 €</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src= {sellingProducts[1].img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> ATLETICO MINEIRO SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 241264993483
                  </ProductId>
                  <b>STATUS: </b>
                  <ProductColor color="yellow" />
                  <ProductSize>
                    <b>Size:</b> L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductPrice>Estimated selling price: 35 €</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
