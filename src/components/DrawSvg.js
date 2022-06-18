import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import React, {useLayoutEffect, useRef} from 'react';
import styled, {keyframes} from "styled-components";
import Vector from "../Icons/Vector";
const VectorContainer = styled.div`
  height: 90%;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  svg {
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: 48em){
    }
  }
  @media (max-width: 48em){
    
  }
  
`;
const Bounce = keyframes`
 from{ transform: translate(-50%) scale(0.9); }
  to{ transform: translate(-50%) scale(1); }
`
const Ball = styled.div`
  position: absolute;
  top: -1%;
  right: 12%;
  transform: translate(-50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props=>props.theme.body};
  animation: ${Bounce} 0.5s linear infinite alternate;
  @media (max-width: 48em){
    
  }
`;

const DrawSvg = (props) =>{
    const ref = useRef(null);
    const ballRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;
        let svg = document.getElementsByClassName("svg-path")[0];
        const length = svg.getTotalLength();
        svg.style.strokeDasharray = length;
        svg.style.strokeDashoffset = length;
        let t1 = gsap.timeline({
            scrollTrigger:{
                trigger: element,
                start: "top center",
                end:"bottom bottom",
                onUpdate:(self) =>{
                    const draw = length * self.progress;

                    //also reverse the drawing when scroll goes up
                    svg.style.strokeDashoffset = length - draw;
                },
                onToggle: self => {
                    if(self.isActive){
                        //console.log("scrolling is active")
                        ballRef.current.style.display = 'none;'
                    }else {
                        //console.log("scrolling is no active")
                        ballRef.current.style.display = 'inline-block;'
                    }
                }
            },

        })


        return () => {
            if(t1) t1.kill();
        };
    },[]);
    return(
        <>
            <VectorContainer ref={ref}>
                <Ball ref={ballRef}/>
                <Vector />
            </VectorContainer>
        </>
    );
};

export default DrawSvg;
