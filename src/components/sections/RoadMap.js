import React, {useLayoutEffect, useRef} from 'react';
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

//Imagenes
import img1 from '../../assets/strains/strainsSvg/b+Fondo 1.svg';
import granoColonizado from '../../assets/strains/granoColonizado.jpg';
import vial from '../../assets/strains/viales.jpg';
import granoEsteril from '../../assets/strains/granoEsteril.jpg';
import granoInoculado from '../../assets/strains/granoInoculado.jpg';
import sustrato from '../../assets/strains/sustrato.jpg';
import cosecha from '../../assets/strains/cosecha.jpg';

import CardCircle from "../CardCircle";

const Section = styled.section`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background-color: ${props => props.theme.body};
`;
const Title = styled.h2`
  font-size: ${props=> props.theme.fontxxl};
  color: ${props=>props.theme.text};
  margin: 1rem auto;
  border-bottom: 2px solid ${props=>props.theme.text};
  width: fit-content;

  @media(max-width: 40em) {
    font-size: ${props=>props.theme.fontxl};
  }
`
const Container = styled.div`
  background-color: ${props => props.theme.text};
  border-radius: 50%;
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 1rem;
`;
const SvgContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle=styled.span`
  display: block;
  font-size: ${props => props.theme.fontxl};
  font-weight: 600;
  color: ${props=>props.theme.body};
  text-align: center;
  @media(max-width: 40em) {
    font-size: ${props=>props.theme.fontlg};
    font-weight: 500;
  }
  @media(max-width: 70em) {
    font-size: ${props=>props.theme.fontcard};
    font-weight: 600;
  }
`
const Text=styled.span`
  display: block;
  font-size: ${props => props.theme.fontsm };
  color: ${props=>props.theme.body};
  text-align: left;
  font-weight: 400;
  margin: 0.5rem 0;
  @media(max-width: 70em) {
    font-size: ${props=>props.theme.fontLef};
  }
  @media(max-width: 48em) {
    font-size: ${props=>props.theme.fontxs};
  }
  @media(max-width: 30em) {
    font-size: ${props=>props.theme.fontxs};
  }
`

const procesoCultivo = [
    {
        id:"0",
        title:"Micelio",
        subText:"El micelio viene ser el conjunto de hifas o filamentes de un hongo, esto les permite colonizar y consumir el alimento colonizado.",
        img:vial,
        recipe: ""
    },
    {
        id:"1",
        title:"Viales o Micelio liquido",
        subText:"El micelio en un medio liquido nos ayuda a llevarlo a viales para posteriormente inyectar al grano esteril y asi podremos reproducir nuestra especie en grandes cantidad.",
        img:vial,
        recipe: "Mi medio liquido favorito es 2% malta y 2% maple del total de agua, todo ello esterilizado 20 minutos a 15psi"
    },
    {
        id:"2",
        title:"Grano esteril",
        subText:"Es el nutriente principal del micelio, las condiciones del grano deben ser a medio coser para ayudar a la colonizacion del hongo.",
        img:granoEsteril,
        recipe:"Mi grano favorito es el arroz integral cocido a 20 minutos luego del herbor del agua. Para la esterilizacion necesitaras de frascos de vidrio con orificios en la tapa para permitir el intercambio gaseoso, estos tapados con cinta micropore para posteriormente esterilizarlos 90 minutos a 15 psi."
    },
    {
        id:"3",
        title:"Grano inoculado",
        subText:"El grano inoculado viene a ser el grano esteril inyectado con algun vial de micelio liquido.",
        img:granoInoculado,
        recipe: "Para inocular es necesario un ambiente totalmente esteril, puedes utilizar una glovebox o una cabina de flujo laminar. Para realizar cualquier pinchazo con la aguja se deberá esterilizar previamente, puedes utilizar un mechero para dicho proceso."
    },
    {
        id:"4",
        title:"Grano colonizado",
        subText:"Es el grano inoculado totalmente colonizado por el micelio del hongo, desde aca podras iniciar la etapa del Bulk con facilidad.",
        img:granoColonizado,
        recipe: "Para tener una optima colonización se debe incubar en un lugar con optimas condiciones de temperatura entre 20°C y 27°C. Alrededor de los 14 dias aproximadamente tendremos grano completamente colonizado."
    },
    {
        id:"5",
        title:"Sustrato",
        subText:"El sustrato viene a contribuir en humedad y tambien en proporcionar los nutrientes necesarios que requiere el hongo.",
        img:sustrato,
        recipe: "Mayormente se utiliza posta, vermiculita y fibra de coco. La proporcion se estima en base a la cantidad de grano colonizado, la proporcion correcta es de 1:2, lo que significa que por cada litro de grano colonizado que tengas necesitaras 2 litros de sustrato."
    },
    {
        id:"6",
        title:"Sustrato pasteurizado",
        subText:"Es la mezcla de sustrato que pasa por un proceso termico para reducir el porcentaje de bacterias y mantener los nutrientes.",
        img:sustrato,
        recipe: "Para pasteurizar el sustrato podremos realizarlo en ollas normales o en olla a presion. Para ello será necesario poner la mezcla de sustrato en una bolsa de cultivo o envuelta en una tela y ponerla a herbir bajo agua durante 1 hora y 30 minutos si es a olla normal y en olla a presion 40 minutos\""
    },
    {
        id:"7",
        title:"Bulk - Desde aqui inicia tu Kit ",
        subText:"Proceso en el cual mezclas tu sustrato y grano colonizado. En esta etapa realizaras un pan de setas.",
        img:granoColonizado,
        recipe: "Para realizar el bulk necesitaremos de grano colonizado y sustrato pasteurizado, una vez tenemos el sustrato a temperatura ambiente podremos realizar la mezcla en un monotub(caja con agujeros). Utilizando como base una bolsa pondremos encima el sustrato y el grano colonizado y empezaremos a romper el bloque de micelio y asi mezclar homogeneamente con el sustrato."
    },
    {
        id:"8",
        title:"Pan de setas",
        subText:"Luego del bulk aproximadamente en 10 dias tendras un pan de setas totalmente colonizado.",
        img:granoColonizado,
        recipe: "Para realizar tu pan de setas puedes utilizar distintas proporciones de grano, esto puede verse en la cantidad de tiempo que tomará si usas poco grano."
    },
    {
        id:"9",
        title:"Fructificacion",
        subText:"En esta etapa el hongo dará sus frutos dependiendo de los parametros ambientales y cepa.",
        img:granoColonizado,
        recipe: "La fructificacion del hongo se da cuando el pan de setas encuentra las condiciones optimas de humedad mayor al 90% y oxigeno. Para lo cual será necesario realizar ventilaciones diarias. Lo recomendable es realizar las ventilaciones en la mañana y noche."
    },
    {
        id:"10",
        title:"Primordios",
        subText:"Los primordios aparecen como pequeñas bolitas blancas y luego terminan siendo un mini - honguito que ira creciendo.",
        recipe: "Al pasar 10 dias aproximadamente podras visualizar pequeñas bolitas que iran creciendo al pasar de los dias, estos pueden abortar y ponerse de color oscuro de no ventilar adecuadamente o no mantener la humedad al 90%.",
        img:granoColonizado,
    },
    {
        id:"11",
        title:"Cosecha",
        subText:"Una vez los primordios hallan conseguido suficiente tamaño podras cosecharlos.",
        img:cosecha,
        recipe: "Podras cosechar tus hongos cuando rompan el velo o esten a punto de romper el velo. Lo mas ideal es cosechar antes de que esporulen, ya que podria manchar al pan de setas."
    },
]

const RoadMap = () => {
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(()=>{
        let t1 = gsap.timeline();
        revealRefs.current.forEach((el,index) =>{
            t1.fromTo(
                el.childNodes[0],
                {
                    y:'0'
                },{
                    y:'-15%',
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
    <Section id="roadmap" img={img1}>
      <Title> Ciclo de cultivo</Title>
        <Container img={img1}>
            <CardCircle array={procesoCultivo} firstRadio={44} secondRadio={35} firstCircleRadio={3} secondCircleRadio={9}/>
            {
                /*
                    <SvgContainer>
                        <DrawSvg/>
                    </SvgContainer>
                * */
            }
        </Container>
    </Section>
  )
}

export default RoadMap
