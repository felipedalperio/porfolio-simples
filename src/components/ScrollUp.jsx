import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    z-index: 888;
    background-color: #111;
    bottom: 0;
    right: 0;
    border:2px solid white;
    padding: 20px;
    border-radius: 50%;
    margin: 20px;
    cursor: pointer;
    display: ${props=>props.scroll > 0 ? "inline" : "none"};
    transition: all .4s ease;
    &:hover{
        background-color: white;
        border:2px solid #0ba982;
    }
`;



export default function ScrollUp() {
    const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

   useEffect(() => {
    function updatePosition() {
        setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
   }, [])


   function scrollUp(){
    window.scroll(0,0);
   }
  return (
    <Wrapper scroll={scrollPosition.scrollY} onClick={scrollUp} >
            <i class="fa fa-arrow-up" style={{fontSize:"20px",color:"#0ba982"}}></i>
    </Wrapper>
  )
}
