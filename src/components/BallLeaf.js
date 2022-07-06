import React, {useRef} from 'react';
import styled, {keyframes} from "styled-components";

const Bounce = keyframes`
 from{ transform: scale(0.8); }
  to{ transform: scale(1); }
`
const BallContainer = styled.div`
  position: relative;
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  h1{
    visibility: hidden;
  }
  &:hover{
    h1{
      visibility: visible;
    }

  }
`;

const Ball = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-image: url(${props => props.img});
  background-size: cover;
  animation: ${Bounce} 1s linear infinite alternate;
  box-shadow: -5px 10px 25px ${props=> props.theme.body};
  
  @media (max-width: 48em){

  }
`;
const Title = styled.h1`
  color: ${props => props.theme.textRgba};
  font-size: ${props => props.theme.fontmd};
  background-color: rgba(${props => props.theme.bodyRgba},0.5);
  border-radius: 25px;
  text-align: center;
`;
const BallLeaf = ({title,subText, addToRef,img}) => {
    const ballRef = useRef(null);

    return(
            <BallContainer>
                <Ball ref={ballRef} img={img}/>
                <Title> {title} </Title>
            </BallContainer>
    );
}

export default BallLeaf;
