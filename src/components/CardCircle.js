import React, {useEffect, useRef, useState} from 'react';
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  100%{
    transform: rotate(1turn);
  }
`

const Container = styled.div`
  display: flex;
  width: 50rem;
  height: 50rem;
  align-items: center;
  justify-content: center;

  @media(max-width: 70em) {
    width: 40rem;
    height: 40rem;
  }
  @media(max-width: 40em) {
    width: 35rem;
    height: 35rem;
  }
  @media(max-width: 35em) {
    width: 20rem;
    height: 20rem;
  }
`;

const FirstCircleGraph= styled.div`
  position: absolute;
  width: ${props=>props.radio}rem;
  height: ${props=>props.radio}rem;
  z-index: ${props=> props.zIndex};
  :before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 2px * 2);
    height: calc(100% - 2px * 2);
    border-radius: 50%;
  }
  @media(max-width: 70em) {
    width: ${props=>props.radio/1.2}rem;
    height: ${props=>props.radio/1.2 }rem;
  }
  @media(max-width: 40em) {
    width: ${props=>props.radio/1.4 }rem;
    height: ${props=>props.radio/1.4 }rem;
  }
  @media(max-width: 35em) {
    width: ${props=>props.radio/2.375 }rem;
    height: ${props=>props.radio/2.375 }rem;
  }
  
`

const SmallCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props=>props.radio}rem;
  height: ${props=>props.radio}rem;
  margin: calc(-50px / 2);
  background-color: ${props => props.theme.text};

  border: 0.5px solid ${props => props.theme.body};
  border-radius: 50%;
  text-align: center;
  color: ${props => props.theme.body};
  align-content: center;
  justify-content: center;

  h1{
    margin: 5px;
    text-align: center;
    font-weight: bold;
    font-family: sans-serif;
    border-radius: 50%;
    transition: all 0.2s ease;
    &::after{
      content: ' ';
      position:absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      border: 1px solid ${props=>props.theme.body};
      width: 100%;
      height: 100%;
      border-radius: 50px;
      transition: all 0.2s ease;
    }
    &:hover::after{
      transform: translate(-50%,-50%) scale(1);
      padding: 0.5rem;
    }
    
      @media(max-width: 70em) {
        font-size: ${props=>props.theme.fontcard};
      }
      @media(max-width: 40em) {
        font-size: ${props=>props.theme.fontLef};
      }
      @media(max-width: 35em) {
        font-size: ${props=>props.theme.fontxs};
      }
  }
      @media(max-width: 70em) {
        width: ${props=>props.radio/1.2}rem;
        height: ${props=>props.radio/1.2 }rem;
        margin: calc(-150px / 8);
      }
      @media(max-width: 40em) {
        width: ${props=>props.radio/1.4 }rem;
        height: ${props=>props.radio/1.4 }rem;
        margin: calc(-150px / 8);
      }
      @media(max-width: 35em) {
        width: ${props=>props.radio/2.3 }rem;
        height: ${props=>props.radio/2.3 }rem;
        margin: calc(-150px / 15);
      }


`;

const SecondCircleGraph= styled.div`
  position: absolute;
  width: ${props => props.radio}rem;
  height: ${props => props.radio}rem;
  z-index: ${props => props.zIndex};
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    animation: ${rotate} 30s linear infinite reverse;
    animation-play-state: ${props=>props.activeAnimation};
    width: calc(100% - 25px * 2);
    height: calc(100% - 25px * 2);
    border-radius: 50%;
    
    @media(max-width: 70em) {
      width: calc(100% - 15px * 2);
      height: calc(100% - 15px * 2);
    }
    @media(max-width: 40em) {

      width: calc(100% - 20px * 2);
      height: calc(100% - 20px * 2);
    }
    @media(max-width: 35em) {

      width: calc(100% - 5px * 2);
      height: calc(100% - 5px * 2);
    }
  }
  
    @media(max-width: 70em) {
        width: ${props=>props.radio/1.2}rem;
        height: ${props=>props.radio/1.2 }rem;  
    }
    @media(max-width: 40em) {
        width: ${props=>props.radio/1.4 }rem;
        height: ${props=>props.radio/1.4 }rem;
    }
    @media(max-width: 35em) {
        width: ${props=>props.radio/2.2 }rem;
        height: ${props=>props.radio/2.2 }rem;
    }
`

const MediumCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props=>props.radio}rem;
  height: ${props=>props.radio}rem;
  margin: -81px -76px;
  border-radius: 50%;
  z-index: ${props=> props.idElement === props.selectId? 9:8};
  align-content: center;
  justify-content: center;
  display: flex;
  align-items: center;
  
  transition: all 0.7s ease;
  @media(max-width: 70em) {
        width: ${props=>props.radio/1.2}rem;
        height: ${props=>props.radio/1.2 }rem;
        margin: -62px -59px;
      }
  @media(max-width: 40em) {
        width: ${props=>props.radio/1.4 }rem;
        height: ${props=>props.radio/1.4 }rem;
        margin: -60px -55px;
      }
  @media(max-width: 35em) {
        width: ${props=>props.radio/2 }rem;
        height: ${props=>props.radio/2 }rem;
        margin: -32px -31px;
      }

      img{
        align-content: center;
        width: ${props=>props.radio}rem;
        height: ${props=>props.radio}rem;
        object-fit: cover;
        border-radius: 50%;

        opacity: ${props=> props.idElement === props.selectId? 100:50}%;
        box-shadow: -0.1em 0.1em .3em ${props=>props.theme.text};
        filter: blur(${props=> props.idElement === props.selectId? 0:2}px);
        transform: scale(${props=> props.idElement === props.selectId? 3.6:1 });
        transition: all 1.7s ease;
          @media(max-width: 70em) {
            width: ${props=>props.radio/1.2}rem;
            height: ${props=>props.radio/1.2 }rem;
          }
          @media(max-width: 40em) {
            width: ${props=>props.radio/1.45 }rem;
            height: ${props=>props.radio/1.45 }rem;
          }
          @media(max-width: 35em) {
            width: ${props=>props.radio/2.45 }rem;
            height: ${props=>props.radio/2.45 }rem;
            margin-bottom: 10px;
          }
      }
`;

const CardCircle = ({firstRadio, secondRadio,secondCircleRadio,firstCircleRadio, array}) => {
    const [opacityDetect, setOpacityDetect] = useState(0);
    const [radioCircleDetect, setRadioCircleDetect] = useState(0);
    const [activeAnimation,setActiveAnimation] = useState('paused');
    const SmallGraph = useRef(null);
    const MediumGraph = useRef(null);
    useEffect(() => {
        const SmallCirclegraph = SmallGraph.current;
        const MediumCirclegraph = MediumGraph.current;
        const SmallCircleElements = SmallCirclegraph.childNodes;
        const MediumCircleElements = MediumCirclegraph.childNodes;

        let angle = 360 - 90;
        let dangle = 360 / SmallCircleElements.length;

        for (let i = 0; i < SmallCircleElements.length; i++) {
            let SmallCircle = SmallCircleElements[i];
            let MediumCircle= MediumCircleElements[i];
            angle += dangle;
            SmallCircle.style.transform = `rotate(${angle}deg) translate(${SmallCirclegraph.clientWidth /
            2}px) rotate(-${angle}deg)`;
            MediumCircle.style.transform = `rotate(${angle}deg) translate(${MediumCirclegraph.clientWidth /
            2}px) rotate(-${angle}deg)`;

            if (i.toString() === opacityDetect){
                MediumCircle.style.transform = `translate(-${MediumCirclegraph.clientWidth /
                100}px)`;
            }
        }
    }, [opacityDetect]);


    function changeBackground(e,element) {
        setOpacityDetect(element.id);
    }
    let play = (e,element) =>{
        setActiveAnimation('running');
        changeBackground(e,element);
        let angle = ((360/12)*element.id)+ 30;

        setRadioCircleDetect(angle)
        console.log("Angle: ",angle)
    }
    let pause = (e) =>{
        setActiveAnimation('paused');
    }
    return(
        <Container >
            <FirstCircleGraph ref={SmallGraph} radio={firstRadio} zIndex={10}>
                {
                    array.map(element =>
                        <SmallCircle key={element.id} onMouseOver={(e) => play(e,element)} onMouseOut={(e)=> pause(e)} radio={firstCircleRadio}><h1>{element.id}</h1></SmallCircle>
                    )
                }
            </FirstCircleGraph>
            <SecondCircleGraph selectId={opacityDetect} activeAnimation={activeAnimation} ref={MediumGraph} radio={secondRadio} zIndex={9} >
                {
                    array.map(element =>
                        <MediumCircle img={element.img} key={element.id} radio={secondCircleRadio} idElement={element.id} selectId={opacityDetect} radioCircleDetect={radioCircleDetect}>
                            <img src={element.img} alt={element.title} />
                        </MediumCircle>
                    )
                }
            </SecondCircleGraph>
        </Container>

    )
}

export default CardCircle;
