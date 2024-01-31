import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoImg from '../assets/strains/mushi.png';

const LogoContainer = styled.div`
  width: 12rem;
  height: 4rem;
  display: flex;
  transition: all 0.2s ease;
  border-radius: 25px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  img{
    width: 3.5rem;
    height: 4rem;
    padding-right: 10px;
  }
  h1{
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${props=> props.theme.fontxl};
    color: ${props=> props.theme.text};
  }
  &:hover{
    transform: scale(1.2);
  }
  @media(max-width: 64em){
    font-size: ${props => props.theme.fontsm};
  }
  @media(max-width: 40em){
    font-size: ${props => props.theme.fontxs};
    width: 8rem;
    height: 4rem;
  }
`;
const Logo = () => {
  return (
      <LogoContainer>
          <Link to="/"/>
          <img src={logoImg} alt="logoMushi" loading="lazy"/>
          <h1>
              Mushi
              <br/>
              Perú
          </h1>
      </LogoContainer>
  )
}

export default Logo
