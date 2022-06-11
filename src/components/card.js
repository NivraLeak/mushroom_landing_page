import React from 'react';
import styled from "styled-components";
import ReactStars from "react-stars/dist/react-stars";

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  border-radius: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: inline-grid;
  
  img{
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 15%;
    
    @media(max-width: 80em) {
      width: 12rem;
      height: 12rem;
    }
    @media(max-width: 48em) {
      width: 11rem;
      height: 11rem;
    }
    @media(max-width: 30em) {
      width: 10rem;
      height: 10rem;
    }
  }
`;
const CharStart = styled.div`
  display: flex;              
  flex-direction: row;            
  flex-wrap: nowrap;              
  justify-content: space-between;
  
  //background-color: ${props=>props.theme.text};
  margin-top: 0.5rem;
  width: 100%;
  align-items: center;
  
  h1{
    font-family: 'Akaya Telivigala', cursive;
    font-size:  ${props=>props.theme.fontmd};
    color: ${props=>`rgba(${props.theme.bodyRgba},0.75)`};
    font-weight: 550;
    padding: 0.2rem;
    text-align: left;
    @media(max-width: 48em) {
      font-size: ${props=>props.theme.fontxs};
    }
  }
`;
const Name = styled.h1`
  font-size:  ${props=>props.theme.fontcard};
  color: ${props=>props.theme.body};
  font-weight: bold;
  padding: 0.5rem;
  font-family: 'Akaya Telivigala', cursive;
  text-align: center;
  @media(max-width: 48em) {
    font-size: ${props=>props.theme.fontxs};
  }
`;
const Card = ({img,name,visuales,produccion,sensitivo,dificultad}) => {
    return(
        <ImgContainer>
            <img src={img} alt={name}/>
            <div>
                <Name> {name}</Name>
                    <CharStart>
                        <h1>Visuales</h1>
                        <ReactStars
                            count={5}
                            size={15}
                            color2={'#ffffff'}
                            value={visuales}
                            edit={false}
                        />
                    </CharStart>
                    <CharStart>
                        <h1>Produccion</h1>
                        <ReactStars
                            count={5}
                            size={15}
v                            color2={'#ffffff'}
                            value={produccion}
                            edit={false}
                        />
                    </CharStart>
                    <CharStart>
                        <h1>Sensitivo</h1>
                        <ReactStars
                            count={5}
                            size={15}
                            color2={'#ffffff'}
                            value={sensitivo}
                            edit={false}
                        />
                    </CharStart>
                    <CharStart>
                        <h1>Dificultad</h1>
                        <ReactStars
                            count={5}
                            size={15}
                            color2={'#ffffff'}
                            value={dificultad}
                            edit={false}
                        />
                    </CharStart>
            </div>
        </ImgContainer>
    );
}

export default Card;
