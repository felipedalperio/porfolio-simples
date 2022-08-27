import React from 'react'
import styled,{ keyframes } from 'styled-components';

const Wrapper = styled.footer`
    background-color: #333;
    margin-top: 20px;
    color:white;
    display: flex;
    flex-direction: column;
    font-family: 'Josefin Sans', sans-serif;
    
`;
const Info = styled.footer`
    padding: 30px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 700px) {
        flex-direction: column;
        
    }
    
`;
const Left = styled.div`
    flex:1;
`;
const Title = styled.h2`
    text-align: center;
    margin-top: 10px;
    font-family: 'Varela Round', sans-serif;
    @media (max-width: 700px) {
        margin-top: 20px;
        text-align: start;
    }
    color:#10deab;
`;

const Desc = styled.div`
    font-size: 18px;
    font-weight: 300;
    text-align: center;
`;
const Center = styled.div`
   flex:1; 
   margin: 0px 100px;
   @media (max-width: 700px) {
        margin:0px;
    }
`;
const GroupIcon = styled.div`
    display: flex;
    justify-content: center;
    margin-top:10px;
    @media (max-width: 700px) {
        justify-content: start;
    }
`;
const Right = styled.div`
  flex:1;
`;
const Copyringht = styled.div`
    background-color: #111;
    padding: 10px 20px;
`;
const Copy = styled.p`
   text-align: center;
   font-weight: 300;
`;

const List = styled.ul`
   
`;
const Item = styled.li`
    font-weight: 300;
    margin-top: 8px;

`;

export default function Footer() {
  return (
    <Wrapper>
        <Info>
            <Left>
                <Title>Localização</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Desc>
                <Title>Informações</Title>
                <List>
                    <Item>Email: email@gmail.com</Item>
                    <Item>Tel: +55 (99) 9999-9999</Item>
                    <Item>Github: seunome@github.io</Item>
                </List>
            </Left>
            <Center>
                <Title>Sobre Mim</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. incididunt ut labore et dolore magna aliqua.</Desc>
                <Title>Redes Sociais</Title>
                <GroupIcon>
                    <i class="fa-brands fa-instagram" style={{marginRight:"10px",fontSize:"24px", cursor:"pointer"}}></i>
                    <i class="fa-brands fa-youtube"   style={{marginRight:"10px",fontSize:"24px", cursor:"pointer"}}></i>
                    <i class="fa-brands fa-twitter"   style={{marginRight:"10px",fontSize:"24px", cursor:"pointer"}}></i>
                    <i class="fa-brands fa-pinterest" style={{marginRight:"10px",fontSize:"24px", cursor:"pointer"}}></i>
                    <i class="fa-brands fa-github"    style={{marginRight:"10px",fontSize:"24px", cursor:"pointer"}}></i>
                </GroupIcon>
            </Center>
            <Right>
                <Title>Minha carreira</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Desc>
            </Right>
        </Info>
        <Copyringht>
            <Copy> &copy; Todos os direitos reservados 2022 </Copy>
        </Copyringht>
    </Wrapper>
  )
}
