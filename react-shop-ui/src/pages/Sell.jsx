import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import React, { useState } from "react";




const Container = styled.div`
    
    
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;


const Left = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;


const Form = styled.form`
position: absolute;
  right: 20%;
  top:35%;
  width: 30%;
  display:flex;
  flex-direction: column;
  padding: 30px;
  border: 2px solid grey;
`;

const Input = styled.input`
  flex: 1;
  width: 94%;
  margin: 20px 0px 0px 0px;
  padding: 10px;
  border: 2px solid grey;
`;



const Sell = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const [nameReg, setNameReg] = useState('')
    const [GenderReg, setGenderReg] = useState('')
    const [SizeReg, setSizeReg] = useState('')
    const [PriceReg, setPriceReg] = useState('')
    const [WearReg, setWearlReg] = useState('')
    
    
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Sell your items</Title>
        <Left>
            <div className="addProduct">
                <h2>Add Image:</h2>
                
                <img src={file} width="500" height="500"/>
                <Left><input type="file" onChange={handleChange}/></Left>
            </div>

        </Left>
        
        
        <Form>
          <Input placeholder="Description" 
          Onchange={(e) => {
            setNameReg(e.target.value);
            }} 
          />
          <Input placeholder="Gender" 
          Onchange={(e) => {
            setGenderReg(e.target.value);
            }} />
          <Input placeholder="Size" 
          Onchange={(e) => {
            setSizeReg(e.target.value);
            }} />
          <Input placeholder="Price" 
          Onchange={(e) => {
            setPriceReg(e.target.value);
            }} />
          <Input placeholder="Wear grade" 
          Onchange={(e) => {
            setWearlReg(e.target.value);
            }} />

            <input type="submit" onClick={() => {alert('Thanks, your product will be analyzed by our admins!');}}></input>
       
        </Form>
   
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Sell;