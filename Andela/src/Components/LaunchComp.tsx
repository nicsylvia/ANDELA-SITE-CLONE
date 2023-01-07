import React from 'react';
import styled from "styled-components";

const LaunchComp = () => {
  return (
    <Container>
        <Wrapper>
            <Text>
                Andela Launches New Platform <br />
                to Power the Future of Customized Work
            </Text>
            <Buttons br = "50px" bd = "" bg = "#56C870" wide='200px' length = "70px" cc = "black">Find out more</Buttons>
        </Wrapper>
    </Container>
  )
}

export default LaunchComp;

const Container  = styled.div`
    width: 100%;
    background-color: #173B3F;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    color: white;
`;
const Wrapper  = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
padding: 30px;
    /* background-color: red; */

    @media screen and (max-width: 425px) {
    flex-wrap: wrap;
        
    }
`;
const Text  = styled.div`
    font-size: 35px;

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`;
const Buttons = styled.div<{wide: string,
    br: string,
    bg: string,
    cc: string,
    bd: string,
    length: string,
    }>`
       
       width: ${(props) => props.wide};
       height: ${(props) => props.length};
       display: flex;
       align-items: center;
       justify-content: center;
       border-radius: ${(props) => props.br};
       background-color: ${(props) => props.bg};
       color: ${(props) => props.cc};
       border: ${(props) => props.bd};
       transition: all 350ms;
       font-size: 20px;
       :hover{
           cursor: pointer;
           transform: scale(0.9);
       };

       @media screen and (max-width: 425px) {
   margin:30px auto 0;
        
    }
`;