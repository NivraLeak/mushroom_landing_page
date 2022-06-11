import React, {useLayoutEffect, useRef} from 'react'
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Section = styled.section`
  width: 100vw;
  background-color: ${props=>props.theme.body};
  position: relative;
`;


const Title = styled.h2`
  font-size: ${props=> props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props=>props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props=>props.theme.text};
  width: fit-content;

  @media(max-width: 40em) {
    font-size: ${props=>props.theme.fontxl};
  }
`
const Container = styled.div`
  width: 80%;
  height: 500vh;
  background-color: ${props=>props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media(max-width: 64em){
    width: 80%;
  }
  @media(max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const Items = styled.ul`
  list-style:none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: lightblue;

  @media(max-width: 48em) {
    width: 90%;
  }
  
  &>*:nth-last-of-type(2n + 1){
    justify-content: start;
    @media(max-width: 48em) {
      justify-content: center;
    }
    
    div{
      border-radius: 50px 0 50px 0;
      text-align: right;
      @media(max-width: 48em) {
        border-radius: 50px 0 50px 0;
        text-align: left;
        p{
          border-radius: 40px 0 40px 0;
        }
      }
    }
    p{
      border-radius: 40px 0 40px 0;

    }
  }
  &>*:nth-last-of-type(2n){
    justify-content: end;
    @media(max-width: 48em) {
      justify-content: center;
    }
  }
  div{
    border-radius: 0 50px 0 50px;
    text-align: left;
    @media(max-width: 48em) {
      border-radius: 50px 0 50px 0;
      text-align: left;
      p{
        border-radius: 40px 0 40px 0;
      }
    }
  }
  p{
    border-radius: 0 50px 0 50px;
    
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media(max-width: 48em) {
    justify-content: flex-end; !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${props=>props.theme.text};
  @media(max-width: 48em) {
    width: 70%;
  }
`;
const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.carouselColor};
  color: ${props=>props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${props=>props.theme.text};
`;
const SubTitle=styled.span`
  display: block;
  font-size: ${props => props.theme.fontxl};
  color: ${props=>props.theme.text};
  @media(max-width: 40em) {
    font-size: ${props=>props.theme.fontlg};
    font-weight: 600;
  }
`
const Text=styled.span`
  display: block;
  font-size: ${props => props.theme.fontsm };
  color: ${props=>props.theme.text};
  text-align: left;
  font-weight: 400;
  margin: 0.5rem 0 ;
  @media(max-width: 40em) {
    font-size: ${props=>props.theme.fontxs};
  }
`

const procesoCultivo = [
    {
        id:"1",
        title:"Viales o Micelio liquido",
        subText:"Una vez obtenido micelio liquido podremos utilizarlos en viales. Estos podremos utilizarlos para inocular y exparcir el micelio de la especie que hayamos elegido."
    },
    {
        id:"2",
        title:"Grano esteril",
        subText:"El grano esteril no es mas que arroz u otro grano a medio coser para asi poder facilitar la colonizacion del hongo, todo esto en una bolsa de cultivo y esterilizada a olla a presion duran 90 minutos."
    },
    {
        id:"3",
        title:"Grano inoculado",
        subText:"El grano inoculado viene a ser el grano esteril inyectado con algun vial, todo esto realizando la tecnica de esterilizar la aguja por fuego y posteriormente pinchar la bolsa de cultivo e inmediatamente cerrar el orificio."
    },
    {
        id:"4",
        title:"Grano colonizado",
        subText:"Luego de tener grano inoculado podremos pasarlo a incubar en un lugar con optimas condiciones de temperatura entre 20°C y 27°C. Alrededor de los 14 dias aproximadamente tendremos grano completamente colonizado."
    },
    {
        id:"5",
        title:"Sustrato",
        subText:"El sustrato viene a contribuir en humedad y tambien en proporcionar los nutrientes necesarios que requiere el hongo. Mayormente se utiliza posta, vermiculita y fibra de coco. La proporcion se estima en base a la cantidad de grano colonizado, la proporcion correcta es de 1:2, lo que significa que por cada litro de grano colonizado que tengas necesitaras 2 litros de sustrato."
    },
    {
        id:"6",
        title:"Sustrato pasteurizado",
        subText:"Para pasteurizar el sustrato podremos realizarlo en ollas normales o en olla a presion. Para ello será necesario poner la mezcla de sustrato en una bolsa de cultivo o envuelta en una tela y ponerla a herbir bajo agua durante 1 hora y 30 minutos si es a olla normal y en olla a presion 40 minutos"
    },
    {
        id:"7",
        title:"Bulk",
        subText:"Para realizar el bulk necesitaremos de grano colonizado y sustrato pasteurizado, una vez tenemos el sustrato a temperatura ambiente podremos realizar la mezcla en un monotub(caja con agujeros). Utilizando como base una bolsa pondremos encima el sustrato y el grano colonizado y empezaremos a romper el bloque de micelio y asi mezclar homogeneamente con el sustrato."},
    {
        id:"8",
        title:"Pan de setas",
        subText:"La mezcla realizada anteriormente se volvera en un pan de setas luego de permanecer en la caja cerrada durante 10 dias aproximadamente, una vez colonice todo el hongo, se podrá visualizar un pan de setas totalmente colonizado."
    },
    {
        id:"9",
        title:"Fructificacion",
        subText:"La fructificacion del hongo se da cuando el pan de setas encuentra las condiciones optimas de humedad mayor al 90% y oxigeno. Para lo cual será necesario realizar ventilaciones diarias. Lo recomendable es realizar las ventilaciones en la mañana y noche."
    },
    {
        id:"10",
        title:"Primordios",
        subText:"Al pasar 10 dias aproximadamente podras visualizar pequeñas bolitas que iran creciendo al pasar de los dias, estos pueden abortar y ponerse de color oscuro de no ventilar adecuadamente o no mantener la humedad al 90%."
    },
    {
        id:"11",
        title:"Cosecha",
        subText:"Podras cosechar tus hongos cuando rompan el velo o esten a punto de romper el velo. Lo mas ideal es cosechar antes de que esporulen, ya que podria manchar al pan de setas."
    },
]

const RoadMapItem = ({title,subText, addToRef}) => {

    return (
        <Item ref={addToRef}>
            <ItemContainer>
                <Box>
                    <SubTitle>{title}</SubTitle>
                    <Text>{subText}</Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}


const RoadMap = () => {
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger);

    const addToRefs = (el) => {
        if(el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el)
        }
    }

    useLayoutEffect(()=>{
        let t1 = gsap.timeline();
        revealRefs.current.forEach((el,index) =>{
            t1.fromTo(
                el.childNodes[0],
                {
                    y:'0'
                },{
                    y:'-30%',
                    scrollTrigger:{
                        id: `section.${index + 1}`,
                        trigger:el,
                        start:'top center+=200px',
                        end:'bottom center',
                        scrub:true,
                        //markers:true,
                    }
                }
            )

        })


        return () =>{

        }
    },[])

  return (
    <Section id="roadmap">
      <Title> RoadMap</Title>
        <Container>
            <SvgContainer>
                <DrawSvg />
            </SvgContainer>
            <Items>
                <Item>&nbsp;</Item>
                {
                    procesoCultivo.map(process => (
                        <RoadMapItem key={process.id} addToRef={addToRefs} title={process.title} subText={process.subText}/>
                    ))
                }
            </Items>
        </Container>
    </Section>
  )
}

export default RoadMap
