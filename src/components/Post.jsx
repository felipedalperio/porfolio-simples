import styled,{ keyframes } from 'styled-components';

const Img = styled.img`
    width:100%;
    transition: all .2s ease;
    border-radius: 20px;
`;
const Wrapper = styled.div`
   width: 385px;
   flex-grow: 1;
   margin: 0px 5px 10px 5px;
   cursor: pointer;
   &:hover ${Img}{
     filter: brightness(120%);
   }
`;

export default function Post({props}) {
  return (
    <Wrapper>
        <Img src={props.img}/>
    </Wrapper>
  )
}
