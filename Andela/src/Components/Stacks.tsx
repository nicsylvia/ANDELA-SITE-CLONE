import React from 'react'
import styled from 'styled-components';

interface course{
    stackName: string,
    bg: string,
    col : string
}
   


const Stacks: React.FC<course> = ({stackName, bg, col}) => {
  return (
    <Stack bg = {bg} cc = {col}>
       <p>
       {stackName} 
       </p> 
    </Stack>
  )
}

export default Stacks;

const Stack = styled.div<{bg: string, cc : string}>`
    width: 280px;
    height: 50px;
    border-radius: 40px;
    background-color: ${({bg}) => bg ? "#56C870" : "white"};
    color: ${({cc}) => cc ? "white" : "#56C870"};
    margin: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
        transition: all 350ms;
    p{
        margin-left: 10px;
        font-size: 20px;
    }
    :hover{
            transform: scale(1.1);
        }
`;