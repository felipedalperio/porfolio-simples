import React from 'react'
import styled,{ keyframes } from 'styled-components';
import Divisor from './Divisor';

const Wrapper = styled.div`
     background: repeating-linear-gradient(
        45deg,
        #0ba982 20px,
        #59cbae 400px,
        #ffffff 40px
    ); 
    //background-color: #0ba982;
    width: 100%;
    height: calc(100vh - 80px);
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    object-fit:cover; 
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
`;

const Image = styled.img`
    width: 160px;
    object-fit: cover;
    border:4px solid white;
    border-radius: 50%;
    margin-bottom: 10px;

`;


const Title = styled.h1`
    font-size: 48px;
    font-family: 'Varela Round', sans-serif;
    
`;

const Desc = styled.p`
    font-size: 18px;
    width: 40%;
    text-align: center;
    text-shadow: 1px 1px 2px #163100;
    font-family: 'Varela Round', sans-serif;
    @media (max-width: 800px) {
        width: 80%;
    }
`;

export default function Header() {
  return (
    <Wrapper id="header">
        <Image src='../imgs/profile.png' />
        <Title>BEM-VINDO</Title>
        <Divisor color="#ffffff" />
        <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor! ❤</Desc>
    </Wrapper>
  )
}
