import React from 'react'
import styled from 'styled-components';
import Divisor from './Divisor';

const Wrapper = styled.div`
    padding: 60px 20px;
    background-color: #0ba982;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-family: 'Varela Round', sans-serif;
`;

const Title = styled.h1``;
const Content = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-around;
    @media (max-width: 700px) {
        flex-direction: column;
        
    }
`;
const Left = styled.div`
    flex:1;
    padding: 10px;
`;
const Right = styled.div`
    flex:1;
    padding: 10px;
`;

export default function About() {
  return (
    <Wrapper id="about">
        <Title>Sobre Mim</Title>
        <Divisor color="white"/>
        <Content>
            <Left>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </Left>
            <Right>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </Right>
        </Content>
    </Wrapper>
  )
}
