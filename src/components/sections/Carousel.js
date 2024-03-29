import React from 'react';
import styled from "styled-components";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import {Pagination,Navigation,Autoplay, EffectCards} from "swiper";

import img1 from '../../assets/strains/strainsOpt/melek.jpg'
import img2 from '../../assets/strains/strainsOpt/ThaiKohsumui.jpg';
import img3 from '../../assets/strains/strainsOpt/enigma.jpg';
import img4 from '../../assets/strains/strainsOpt/gandalf.jpg';
import img5 from '../../assets/strains/strainsOpt/gandalf03.jpg';
import img6 from '../../assets/strains/strainsOpt/b+Leu.jpg';


import Arrow from '../../assets/Arrow.svg';
import Card from "../card";

const Container = styled.div`
  width: 21vw;
  height: 70vh;
  
  @media (max-width: 70em){
    height: 60vh;
  }

  @media (max-width: 64em){
    height: 55vh;
    width: 30vw;
  }
  @media (max-width: 48em){
    height: 50vh;
    width: 35vw;
  }
  
  @media (max-width: 415px){
    height: 40vh;
    width: 50vw;
  }

  @media (max-width: 380px){
    height: 45vh;
    width: 55vw;
  }
  
  .swiper{
    width: 100%;
    height: 100%;
  }
  .swiper-slide{
    background-color: ${props=>props.theme.carouselColor};
    border-radius: 20px;
    border: 0.5px solid ${props=>props.theme.body};
    box-shadow: -0.4em 0.4em .6em ${props=>props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-button-next{
    color: #000;: ${props=>props.theme.text};
    right: 0;
    top: 60%;
    width: 4rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    
    &:after{
     display: none;
    }
    @media (max-width: 64em){
      width: 3rem;
    }
    @media (max-width: 30em){
      width: 2rem;
    }
  }
  .swiper-button-prev{
    color: #000;: ${props=>props.theme.text};
    right: 0;
    top: 60%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
      display: none;
    }
    @media (max-width: 64em){
      width: 3rem;
    }
    @media (max-width: 30em){
      width: 2rem;
    }
  }
`



const Carousel = () => {
    return (
        <Container>
            <Swiper
            pagination={{type:'progressbar'}}
            navigation={true}
                scrollbar={{
                    draggable:true
                }}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards,Pagination,Navigation]}
            className="mySwiper"
            >
                <SwiperSlide> <Card img={img1} name="Melek" visuales={4} dificultad={3} produccion={2} sensitivo={3} /> </SwiperSlide>
                <SwiperSlide> <Card img={img2} name="Thai koh sumui" visuales={2} dificultad={1} produccion={4} sensitivo={4}/> </SwiperSlide>
                <SwiperSlide> <Card img={img3} name="Enigma" visuales={5} dificultad={5} produccion={1} sensitivo={5}/> </SwiperSlide>
                <SwiperSlide> <Card img={img4} name="Gandalf" visuales={5} dificultad={4} produccion={2} sensitivo={4}/> </SwiperSlide>
                <SwiperSlide> <Card img={img5} name="Gandalf 0.2" visuales={5} dificultad={4} produccion={2} sensitivo={4}/> </SwiperSlide>
                <SwiperSlide> <Card img={img6} name="B+ Leucinistico" visuales={2} dificultad={1} produccion={5} sensitivo={4}/> </SwiperSlide>
            </Swiper>

        </Container>
    );
}

export default Carousel;
