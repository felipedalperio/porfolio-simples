import React from 'react'
import styled from 'styled-components';
import Divisor from './Divisor';
import {posts} from '../data';
import Post from './Post';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;

const Title = styled.h1`
    color:#2a2a2a;
    font-family: 'Varela Round', sans-serif;
`;

const PostGrid = styled.div`
      display: flex;  
      flex-wrap: wrap;
      justify-content: center;
      width:100%;    
`;

export default function Posts() {
  return (
    <Wrapper id="projetos">
        <Title>Projetos</Title>
        <Divisor color="#2a2a2a" />
        <PostGrid>
            {posts.map((item,key) =>(
                <Post props={item}/>
            ))}
        </PostGrid>
    </Wrapper>
  )
}
