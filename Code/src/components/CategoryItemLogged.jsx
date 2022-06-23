import { Link } from "@material-ui/core";
import styled from "styled-components";
import { mobile } from "../responsive";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#008000',
    },
  },
});

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:#AAFE00;
    margin-bottom: 20px;
    font-size: 60px;
    font-family: Monospace;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <ThemeProvider theme={theme}>
        <Button variant="contained" color="secondary" href="/productListLogged">SHOP NOW</Button>
        </ThemeProvider>
      </Info>
    </Container>
  );
};

export default CategoryItem;
