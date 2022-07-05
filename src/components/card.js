import React from 'react';
import styled from "styled-components";
import ReactStars from "react-stars/dist/react-stars";

const ImgContainer = styled.div`
  width: 15rem;
  padding: 1rem;
  margin: 0 1rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: inline-grid;

  img{
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    box-shadow: -0.3em 0.3em .6em ${props=>props.theme.text};
    
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
    color: ${props=>props.theme.body};
    font-weight: 550;
    padding: 0.2rem;
    text-align: left;
    text-shadow: -0.3em 0.3em .5em ${props=>props.theme.text};
    @media(max-width: 48em) {
      font-size: ${props=>props.theme.fontxs};
    }
  }
`;
const ImageNameContainer = styled.div`
  border: ${props=>props.theme.body} 1px dotted;
  width: 15rem;
  height: 15rem;
  position: relative;
  overflow: hidden;
  border-radius: 25px;
  
  justify-content: center;
  display: flex;
  
  box-shadow: -0.45em 0.35em .6em ${props=>props.theme.text};
`;

const Name = styled.h1`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.3)`};
  backdrop-filter: blur(4px);
  position: absolute;
  bottom: 1rem;
  border-radius: 25px;
  width: 70%;
  font-size:  ${props=>props.theme.fontcard};
  color: ${props=>props.theme.body};
  font-weight: bold;
  padding: 0.5rem;
  font-family: 'Akaya Telivigala', cursive;
  text-align: center;
  text-shadow: -0.1em 0.1em .1em ${props=>props.theme.text};
  @media(max-width: 48em) {
    font-size: ${props=>props.theme.fontxs};
  }

  box-shadow: -0.2em 0.2em .4em ${props=>props.theme.text};;
`;

const DetailsContainer = styled.div`
  margin-top: 1rem;
  backdrop-filter: blur(50px);
`;


const Card = ({img,name,visuales,produccion,sensitivo,dificultad}) => {
    return(
        <ImgContainer>
            <ImageNameContainer>
                <Name> {name}</Name>
                <img src={img} alt={name}/>
            </ImageNameContainer>
            <DetailsContainer>
                    <CharStart>
                        <h1>Visuales</h1>
                        <ReactStars
                            count={5}
                            size={15}
                            color2={"#b8aaeb"}
                            color1={"rgba(123,127,208,0.5)"}
                            value={visuales}
                            edit={false}
                        />
                    </CharStart>
                    <CharStart>
                        <h1>Produccion</h1>
                        <ReactStars
                            count={5}
                            size={15}
                            color2={"#b8aaeb"}
                            color1={"rgba(123,127,208,0.5)"}
                            value={produccion}
                            edit={false}
                        />
                    </CharStart>
                    <CharStart>
                        <h1>Sensitivo</h1>
                        <ReactStars
                            count={5}
                            size={15}
                            color2={"#b8aaeb"}
                            color1={"rgba(123,127,208,0.5)"}
                            value={sensitivo}
                            edit={false}
                        />
                    </CharStart>
                    <CharStart>
                        <h1>Dificultad</h1>
                        <ReactStars
                            count={5}
                            size={15}
                            color2={"#b8aaeb"}
                            color1={"rgba(123,127,208,0.5)"}
                            value={dificultad}
                            edit={false}
                        />
                    </CharStart>
            </DetailsContainer>
        </ImgContainer>
    );
}

export default Card;
