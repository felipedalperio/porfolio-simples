import React from 'react'
import styled,{ keyframes } from 'styled-components';
import Divisor from './Divisor';


const Title = styled.h1`
    color:#444;
    font-family: 'Varela Round', sans-serif;
`;

const Wrapper = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;

const Input = styled.input`
    border: none;
    padding: 20px 20px;
    border:1px solid #b9b7b7;
    border-radius: 10px;
    font-family: 'Varela Round', sans-serif;
    margin-bottom: 10px;
    background-color: #f0efef;
`;
const TextArea = styled.textarea`
    border: none;
    padding: 20px 20px;
    border:1px solid #b9b7b7;
    border-radius: 10px;
    font-family: 'Varela Round', sans-serif;
    margin-bottom: 10px;
    background-color: #f0efef;
    height:auto;
    resize: none;
    `;

const Button = styled.button`
    border: none;
    align-items: start;
    width: 200px;
    background-color: #0ba982;
    padding: 10px;
    color:white;
    border:2px solid white;
    cursor: pointer;
    border-radius: 20px;
    transition: all .4s ease;
    &:hover{
        background-color: white;
        color:#0ba982;
        border:2px solid #0ba982;
    }
`;

export default function Contact() {
  return (
    <Wrapper>
        <Title>Contato</Title>
        <Divisor color="#444"/>
        <Form>
            <Input placeholder='Seu nome'/>
            <Input placeholder='Seu Email'/>
            <Input placeholder='Seu Telefone'/>
            <TextArea placeholder='Mensagem' rows="10"/>
            <Button>Enviar</Button>
        </Form>
    </Wrapper>
  )
}
