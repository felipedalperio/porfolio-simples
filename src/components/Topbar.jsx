import {useState} from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    background-color: #333;
    color:white;
    width: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 999;
`;
const Logo = styled.h1`
    font-family: 'Varela Round', sans-serif;
    cursor: pointer;
    &:hover{
        color:white;
    }
    color: #2afac6;
`;
const Left = styled.div`

`;
const Right = styled.div`
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    @media (max-width: 700px) {
        position : absolute;
        top: 80px;
        right : 0;
        width : 100vw;
        height :  calc(100vh - 80px);
        background-color :  #333;
        flex-direction :  column;
        align-items :  center;
        justify-content :  space-around;
        transform :  translateX(${props => props.show});
        transition :  transform 0.3s ease-in;
    }
`;

const Line = styled.div`
    height: 4px;
    width: 45px;
    background-color: white;
    margin-top: 6px;
    &:first-child{
        margin-top: 0px;
    }
`;

const Hamburguer = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 700px) {
        display: inline;
    }
    &:hover ${Line}{
        background-color: #2afac6;
    }
`;

const Nav = styled.a`
    text-decoration: none;
    color: inherit;
`;


const Item = styled.li`
    margin-left: 40px ;
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    &:hover{
        color:#2afac6;
    }
`;


export default function Topbar() {
    const[showMenu,setShowMenu] = useState(false);
    
    function showMenuOrClose(){
        if(showMenu){
            return "0%"
        }else{
            return "100%"
        }
    }
  return (
    <Wrapper>
        <Left>
            <Logo>Portfolio</Logo>
        </Left>
        <Right>
            <Hamburguer onClick={() => setShowMenu(!showMenu)}>
                <Line />
                <Line />
                <Line />
            </Hamburguer>
            <Menu show={showMenuOrClose()}>
                <Item><Nav href="#header" onClick={() => setShowMenu(false)}>Portfolio</Nav></Item>
                <Item><Nav href="#projetos" onClick={() => setShowMenu(false)}> Projetos</Nav></Item>
                <Item><Nav href="#about" onClick={() => setShowMenu(false)}> Sobre</Nav></Item>
            </Menu>
        </Right>
    </Wrapper>
  )
}
