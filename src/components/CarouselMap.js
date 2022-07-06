import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {Swiper, SwiperSlide, useSwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import {Pagination,Navigation,Autoplay, EffectCards} from "swiper";
import Arrow from "../assets/Arrow.svg";


const Container = styled.div`
  width: 100%;
  height: 100%;
  transition: all 1.7s ease;
  .swiper{
    width: 100%;
    height: 100%;
    transition: all 1.5s ease;
    visibility: hidden;
  }
  .swiper-slide{
    border-radius: 50%;
    box-shadow: -0.15em 0.15em .2em ${props=>props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  .swiper-button-next{
    color: #000;: ${props=>props.theme.text};
    right: 5%;
    top: 70%;
    width: 1.6rem;
    height: 0.8rem;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    
    &:after{
     display: none;
    }
    @media (max-width: 64em){
      width: 1rem;
      height: 0.5rem;
    }
    @media (max-width: 30em){
      top: 85%;
      width: 1rem;
      height: 0.5rem;
    }
  }
  .swiper-button-prev{
    color: #000;: ${props=>props.theme.text};
    left: 5%;
    top: 70%;
    width: 1.6rem;
    height: 0.8rem;
    transform: rotate(180deg);
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
      display: none;
    }
    @media (max-width: 64em){
      width: 1rem;
      height: 0.5rem;
    }
    @media (max-width: 30em){
      top: 85%;
      width: 1rem;
      height: 0.5rem;
    }
  }
`
const DetailsContainer = styled.div`
  margin-bottom: 1rem;
  width: 70%;
  height: fit-content;
  position: absolute;
  transform: translateY(50%);
  display: inline-grid;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;

  backdrop-filter: blur(3px);
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.2)`};

  border-radius: 20px;
`;
const Title = styled.h2`
  padding: 0.5em 0.5em 0.2em 0.5em;
  font-size: ${props=> props.theme.fontxs};
  color: ${props=>props.theme.text};
  text-align: center;
  text-shadow: -0.15em 0.15em .2em ${props=>props.theme.text};

  border-radius: 25px;
  width: fit-content;
  
  @media(max-width: 40em) {
    font-size: calc(${props=> props.theme.fontxs} - 0.35em);
  }
`
const SubTitle=styled.h2`
  padding: 0 1em 1em 0.5em;
  font-size: ${props => props.theme.fontxsS};
  width: fit-content;

  border-radius: 25px;
  font-weight: 600;
  color: ${props=>props.theme.body};
  text-align: center;
  text-shadow: -0.15em 0.15em .2em ${props=>props.theme.text};
  @media(max-width: 40em) {
    font-size: calc(${props=> props.theme.fontxs} - 0.42em);
  }
  @media(max-width: 70em) {
  }
`
const Text = styled.h3`
  padding: 1em;
  font-size: ${props => props.theme.fontxsSS};
  font-weight: 600;
  color: ${props=>props.theme.text};
  text-align: center;
  text-shadow: -0.1em 0.1em .15em ${props=>props.theme.body};
`;


const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("${props=>props.img}");
  background-size: cover;
`;


const CarouselMap = ({title, subText,text, img, id, radioImg, opacityDetect}) => {
    const slide01 = useRef(null);
    const slide02 = useRef(null);
    const slide03 = useRef(null);
    const mySwiper = useRef(null);
    const swiperSlide = useSwiperSlide();

    useEffect( () => {
        const MySwiper = mySwiper.current;
        const Slide01 = slide01.current;
        const Slide02 = slide02.current;
        const Slide03 = slide03.current;
        if (id == opacityDetect){
            //Slide01.childNodes[1].childNodes[0].style.fontSize = '8px';
            MySwiper.style.visibility="visible"
            console.log("Active",MySwiper.style.backgroundColor )
        }else {
            MySwiper.style.visibility="hidden"
        }
    },[opacityDetect]);

    return (
        <Container >
            <Swiper
                autoplay ={{
                    delay:2000,
                    disableOnInteraction:false,
                }}
                pagination={{type:'progressbar'}}
                navigation={true}
                scrollbar={{
                    draggable:true
                }}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards,Pagination,Navigation]}
                className="mySwiper"
                ref={mySwiper}
            >
                <SwiperSlide ref={slide01} >
                    <ImageContainer img={img} />
                    <DetailsContainer radio={radioImg} className="AKI">
                        <Title>{title} </Title>
                        <SubTitle>{subText}</SubTitle>
                    </DetailsContainer>
                </SwiperSlide>
                <SwiperSlide ref={slide02} >
                    <ImageContainer img={img} />
                    <DetailsContainer radio={radioImg} className="AKI">
                        <Text>{text}</Text>
                    </DetailsContainer>
                </SwiperSlide >
                <SwiperSlide ref={slide03}>
                    <ImageContainer img={img} />
                </SwiperSlide>
            </Swiper>

        </Container>
    );
}

export default CarouselMap;
