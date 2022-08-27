import React from 'react'
import styled,{ keyframes } from 'styled-components';


const Separetor = styled.div`
    display: flex;
    align-items: center;
    width:200px;
    color: ${props=> props.color};
    max-width: 80vw;
    padding: 10px;
`;
const Line = styled.div`
    height: 5px;
    width: 100%;
    background-color: ${props=> props.color};
    border-radius: 20px;
`;

export default function Divisor(props) {
  return (
    <Separetor color={props.color}>
        <Line color={props.color}/>
        <i class="fas fa-star" style={{padding:"0px 20px",color: props.star != null ? props.star : props.color}}></i>
        <Line color={props.color}/>
    </Separetor>
  )
}
