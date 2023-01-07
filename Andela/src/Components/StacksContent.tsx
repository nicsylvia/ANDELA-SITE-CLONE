import React from 'react'
import styled from 'styled-components';

interface content{
    define: string;
}

const StacksContent: React.FC<content> = ({define}) => {
  return (
    <div>
        <Container>
                <p>
                    {define}
                </p>
        </Container>
    </div>
  )
}

export default StacksContent;

const Container = styled.div`
    background-color: white;
    width: 250px;
    border-radius: 10px;
    color: #56C870;
    padding: 5px;
    cursor: pointer;
`;