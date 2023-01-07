import React, { useState } from 'react';
import styled from "styled-components";
import hero from "./Assets/heropic.jpeg";
import andela from "./Assets/andela-logo.svg";
import Header from './Header';



const Hero = () => {

   
  return (
    <Container>
	

	{/* Hero itself */}
	<Content>
		<Text>
			Discover <span>brilliant talent</span> <br />
			around the world
		</Text>
		<Para>
			Join Andela to build your team with developers, engineers, product designers, and the best remote technology experts.
		</Para>
		<Btn2>
			<Buttons br = "50px" bd = "" bg = "#56C870" wide='200px' length = "70px" cc = "black">Hire Talent</Buttons>
			<Buttons br = "50px" bg = "white" bd = "1px solid white" length = "70px" wide='200px' cc = "black">Apply for Jobs</Buttons>	
       </Btn2>
	</Content>
	</Container>
  )
}

export default Hero;

const Container = styled.div`
	height: 700px;
	width: 100%;
	background-color: black;
	background-image: url(${hero});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	/* justify-content: center; */
	/* align-items: center; */
	flex-direction: column;
	position: relative;
	background-attachment: fixed;
   

	::before {
		content: "";
		height: 100%;
		width: 100%;
		background-color: rgba(3%, 16%, 16%, 0.1);
		position: absolute;
	}
`;
const Content = styled.div`
	color: white;
    padding:0 50px;

	@media screen and (max-width: 425px) {
	
		padding: 0;
		width: 90%;
		margin: auto;
	}
`;
const Text = styled.h1`
	color: white;
	font-size: 65px;
    /* background-color: red; */
	span{
		font-style: italic;
	}

    @media screen and (max-width: 768px) {
        font-size: 50px;
    }

	@media screen and (max-width: 425px) {
		font-size:35px ;
	}
    
`;
const Para = styled.div`
    font-size: 20px;
    /* background-color: red; */
   

	@media screen and (max-width: 425px) {
		font-size:18px ;
	}
`;
const Btn2 = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
	margin-top: 50px;
    @media screen and (max-width: 960px) {
        width: 45%;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
    }
    
`;
const Buttons = styled.div<{wide: string,
 br: string,
 bg: string,
 cc: string,
 bd: string,
 length: string,
 }>`
    font-size: 20px;
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
    margin-right: 15px;
    
`;

