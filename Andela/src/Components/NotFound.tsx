import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import video from "./Assets/404video.mp4";

const NotFound = () => {
  return (
   <Container>
    <Vid>
      <video src={video} autoPlay loop controls/>
    </Vid>
    <Text>
      <h1>404</h1>
      <h2>UH OH!! You're lost.</h2>
      <p>
        The page you are looking for does not exist. How you got here  is a mystery. But you can click the button below to go back to the  home page
      </p>
     <NavLink to="/">
        <Btn>HOME</Btn>
     </NavLink>
    </Text>
   </Container>
  )
}

export default NotFound;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Vid = styled.div`
  width: 60%;
  height: 500px;
  display: flex;
  justify-content: space-around;
  /* background-color: red; */
  align-items: center;
  video{
    width: 100%;
    height: 100%;
  }
`;
const Text = styled.div`
  width: 30%;
  height: 350px;
  display: flex;
  justify-content: space-around;
  /* background-color: blue; */
  /* align-items: center; */
  flex-direction: column;
  color: #493E4B;
  h1{
    font-size: 50px;
  }
`;
const Btn = styled.div`
  width: 150px;
  height: 50px;
  border: 1px solid #493E4B;
  color: #493E4B;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  transition: all 350ms;
  cursor: pointer;
  text-decoration: none;
  :hover{
    transform: scale(1.05);
  }
`;