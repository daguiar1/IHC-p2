import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/FooterLogged";
import Navbar from "../components/NavBarLogged";
import { mobile } from "../responsive";
import React, { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import { Modal } from '@mui/material';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style ={
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};


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
   margin: 20px 0px 50px 220px;
  flex-direction: column;
  padding: 20px;
`;
const Left2 = styled.div`

  flex: 1;
   margin: 0px 0px 0px 80px;
  flex-direction: column;
  padding: 20px;
`;


const Form = styled.form`
position: absolute;
  right: 10%;
  top:25%;
  width: 30%;
  display:flex;
  flex-direction: column;
  padding: 30px;
  border: 2px solid grey;
`;

const Input = styled.input`
  flex: 1;
  width: 94%;
  margin: 20px 0px 20px 0px;
  padding: 10px;
  border: 2px solid grey;
`;

const Input2 = styled.input`
-webkit-appearance: none;
background-color: #fafafa;
border: 1px solid #cacece;
box-shadow: 0 1px 2px rgba(0,0,0,1), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
padding: 9px;
border-radius: 3px;
display: inline-block;
margin: 10px 0px -3px 15px;
position: relative;
    &:checked{
      background-color: green;
      border: 1px solid #adb8c0;
      box-shadow: 0 1px 2px red, inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
      color: #99a1a7;
  } 
`;

const Button1 = styled.input`
padding: 10px;
border: 3px solid gray;
background-color: #66CC00;
  box-shadow: 3px 3px 5px grey;
border-radius: 5px;
font: inherit;
margin: 10px 0px -3px 15px;
`;

const Sell = () => {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const [nameReg, setNameReg] = useState('')
    const [PriceReg, setPriceReg] = useState('')
    const [SizeReg, setSizeReg] = useState('')
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [checkedThree, setCheckedThree] = React.useState(false);
    const [checkedFour, setCheckedFour] = React.useState(false);
    const [checkedFive, setCheckedFive] = React.useState(false);


    const handleChangeOne = () => {
      setCheckedOne(!checkedOne);
    };

    const handleChangeTwo = () => {
      setCheckedTwo(!checkedTwo);
    };

    const handleChangeThree = () => {
      setCheckedThree(!checkedThree);
    }; 
    const handleChangeFour = () => {
      setCheckedFour(!checkedFour);
    }; 
    const handleChangeFive = () => {
      setCheckedFive(!checkedFive);
    }; 

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

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
                <Left2><input type="file" onChange={handleChange}/></Left2>
            </div>

        </Left>
        
        
        <Form>
          <Input placeholder="Description ( Example: T-shirt Nike )" 
          Onchange={(e) => {
            setNameReg(e.target.value);
            }} 
          />

          <Input placeholder="Size ( Example: M )" 
          Onchange={(e) => {
            setSizeReg(e.target.value);
            }} />
          Gender:
          <Checkbox 
            label=" Men"
            value={checkedOne}
            onChange={handleChangeOne}
          />
          <Checkbox
            label=" Women"
            value={checkedTwo}
            onChange={handleChangeTwo}
          />
          <Input placeholder="Price ( Example: 10€ )" 
          Onchange={(e) => {
            setPriceReg(e.target.value);
          }} />

          Condition Grade:<Button color="secondary" size="small" onClick={handleOpen}>(?)</Button>
          
          <Modal
            

            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography id="transition-modal-title" variant="h5" component="h2" sx={{ mt: 2 }}>
                  Grade A
                </Typography>
                <Typography  id="transition-modal-description" sx={{ mt: 1 }} >
                  The item has been worn very few times and looks new.

                </Typography>
                <Typography id="transition-modal-title" variant="h5" component="h2" sx={{ mt: 2 }}>
                  Grade B
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 1 }}>
                  The item has been worn regularly and/or has minor visible flaws with normal wear.

                </Typography>
                <Typography id="transition-modal-title" variant="h5" component="h2" sx={{ mt: 2 }}>
                  Grade C
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 1 }}>
                  The item shows visible wear and flaws, but is still fully functional.

                </Typography>
                
              </Box>
            </Fade>
          </Modal>
          <Checkbox 
            label=" Grade A - Used like new"
            value={checkedThree}
            onChange={handleChangeThree}
          />
          <Checkbox
            label=" Grade B - Used good"
            value={checkedFour}
            onChange={handleChangeFour}
          />
          <Checkbox
            label=" Grade C - Used fair"
            value={checkedFive}
            onChange={handleChangeFive}
            />
          
          
          <Button1 type="submit" onClick={() => {alert('Thanks, your product will be analyzed by our admins!');}}></Button1>
          
        </Form>
   
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <Input2 type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default Sell;