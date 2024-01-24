import React from 'react'
import styled from "styled-components";
import Banner from "./Banner";
import Logo from "./Logo";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";

const Section = styled.section`
  width: 100vw;
  min-height: 60vh;
  background-color: ${props=>props.theme.body};
  position: relative;
  color: ${props => props.theme.text};
  
  display: flex;
  //justify-content: center;
  //align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  border-bottom: 1px solid ${props => props.theme.text};
  
  @media(max-width: 48em){
    width: 90%;
        h1{
         font-size: ${props=> props.theme.fontxxxl}; 
        }
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 48em){
    width: 100%;
  }
`;
const IconList=styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  
  &>*{
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    &:hover{
      transform: scale(1.2);
    }
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(3,1fr);
  @media(max-width: 48em){
    display: none;
  }
`;

const MenuItem = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props=> props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after{
    width:100%;
  } 
`
const Button = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a{
    text-decoration: underline;
  }
  @media(max-width: 48em){
   flex-direction: column;
    width: 100%;
  
    span{
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => {
    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior:'smooth',
            block: 'start',
            inline: 'nearest',
        })
    }

  return (
    <Section>
      <Banner/>
        <Container>
            <Left>
                <Logo/>
                <IconList>
                    <a href="https://www.google.com" target='_blank'
                        rel="noopener noreferrer">
                        <Facebook/>
                    </a>
                    <a href="https://www.google.com" target='_blank'
                       rel="noopener noreferrer">
                        <Instagram/>
                    </a>
                </IconList>
            </Left>
            <MenuItems>
                <MenuItem onClick={()=> scrollTo('home')}>Home</MenuItem>
                <MenuItem onClick={()=> scrollTo('about')}>¿Qué es?</MenuItem>
                <MenuItem onClick={()=> scrollTo('roadmap')}>Mapa de cultivo</MenuItem>
                <MenuItem onClick={()=> scrollTo('showcase')}>Especies</MenuItem>
                <MenuItem onClick={()=> scrollTo('team')}>MushiLovers</MenuItem>
                <MenuItem onClick={()=> scrollTo('faq')}>Pedidos/Envios</MenuItem>

            </MenuItems>
        </Container>
            <Button>
                <span>
                    &copy; {new Date().getFullYear()} Mushi Peru. All rights reserved.
                </span>
                <span>
                    Made with &#10084; by <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    MushiPeru
                </a>
                </span>
            </Button>
    </Section>
  )
}

export default Footer;
