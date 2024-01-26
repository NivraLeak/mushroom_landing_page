import React, { useLayoutEffect, useRef } from 'react';
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Imagenes
import img1 from '../../assets/strains/strainsOpt/B+ fondo.jpg';
import granoColonizado from '../../assets/strains/strainsOpt/granoColonizado.jpg';
import vial from '../../assets/strains/strainsOpt/viales.jpg';
import micelio from '../../assets/strains/strainsOpt/Micelium.jpg'
import granoEsteril from '../../assets/strains/strainsOpt/granoEsteril.jpg';
import granoInoculado from '../../assets/strains/strainsOpt/granoInoculado.jpg';
import sustrato from '../../assets/strains/strainsOpt/sustrato.jpg';
import cosecha from '../../assets/strains/strainsOpt/gandalfFlush.jpg';
import videoSource from '../../assets/kitsautomatico/instasaveindica.mp4';

import CardCircle from "../CardCircle";


const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
  min-height: 60vh;
flex-direction: column;
justify-content: center;
align-items: center;
  
  @media (max-width: 40em){
    min-height: 50vh;
  }
  
`

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
  font-size: ${props => props.theme.fontxxl};
  color: ${props => props.theme.text};
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.text};
  width: fit-content;

  @media(max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
  }
`
const Container = styled.div`
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

const SubTitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontxl};
  font-weight: 600;
  color: ${props => props.theme.body};
  text-align: center;
  @media(max-width: 40em) {
    font-size: ${props => props.theme.fontlg};
    font-weight: 500;
  }
  @media(max-width: 70em) {
    font-size: ${props => props.theme.fontcard};
    font-weight: 600;
  }
`
const Text = styled.span`
  display: block;
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.body};
  text-align: left;
  font-weight: 400;
  margin: 0.5rem 0;
  @media(max-width: 70em) {
    font-size: ${props => props.theme.fontLef};
  }
  @media(max-width: 48em) {
    font-size: ${props => props.theme.fontxs};
  }
  @media(max-width: 30em) {
    font-size: ${props => props.theme.fontxs};
  }
`

const VideoContainer = styled.div`
  width: 65%;
  padding: 0.2rem;
  align-content: center;
  justify-content: center;
  display: flex;
  
  border: 2px solid ${props => props.theme.text};
  border-radius: 50px;
  video{
      width: 100%;
      height: auto;
      border-radius: 45px;

      @media (max-width: 64em) {
        min-width: 35vh;
        height: auto;
        border-radius: 25px;
      }
    }

  @media (max-width: 64em) {
    min-width: 35vh;
    height: auto;
    border-radius: 25px;
  }
`

const procesoCultivo = [
    {
        id: "0",
        title: "Micelio",
        slides: [
            {
                id: "0",
                subText: "El micelio viene ser el conjunto de hifas o filamentos de un hongo."
            },
            {
                id: "1",
                subText: "Estos filamentos les permiten consumir descomponer y consumir los alimentos."
            },
            {
                id: "3",
                subText: "Este proceso es llamado colonizacion, cuando un hongo forma parte de su propio alimento."
            }
        ],
        subText: "El micelio viene ser el conjunto de hifas o filamentes de un hongo, esto les permite colonizar y consumir el alimento colonizado.",
        img: micelio,
        recipe: ""
    },
    {
        id: "1",
        title: "Viales o Micelio liquido",
        subText: "El micelio en un medio liquido nos ayuda a llevarlo a viales para posteriormente inyectar al grano esteril y asi podremos reproducir nuestra especie en grandes cantidad.",
        slides: [
            {
                id: "0",
                subText: "El micelio en un medio liquido nos ayuda a llevarlo a viales para un mejor uso sin contaminaciones."
            },
            {
                id: "1",
                subText: "El micelio del vial se extrae con un jeringa esteril para ser inyectada en un medio de cultivo."
            },
            {
                id: "3",
                subText: "Este medio de cultivo puede ser arroz integral (grano) pero debe estar totalmente esteril."
            }
        ],
        img: vial,
        recipe: "Mi medio liquido favorito es 2% malta y 2% maple del total de agua, todo ello esterilizado 20 minutos a 15psi"
    },
    {
        id: "2",
        title: "Grano esteril",
        subText: "Es el nutriente principal del micelio, las condiciones del grano deben ser a medio coser para ayudar a la colonizacion del hongo.",
        slides: [
            {
                id: "0",
                subText: "El grano esteril es un medio altamente nutritivo que pasó por un proceso de calor y presion para su esterilizacion."
            },
            {
                id: "1",
                subText: "El arroz integral es mayormente el grano mas facil de utilizar, ya que solo consta de herbirlo durante 20 minutos y estará listo."
            },
            {
                id: "3",
                subText: "La cocción es a medio cocer por lo que el grano debe presentar suavidad por fuera y dureza por dentro."
            }
        ],
        img: granoEsteril,
        recipe: "Mi grano favorito es el arroz integral cocido a 20 minutos luego del herbor del agua. Para la esterilizacion necesitaras de frascos de vidrio con orificios en la tapa para permitir el intercambio gaseoso, estos tapados con cinta micropore para posteriormente esterilizarlos 90 minutos a 15 psi."
    },
    {
        id: "3",
        title: "Grano inoculado",
        subText: "El grano inoculado viene a ser el grano esteril inyectado con algun vial de micelio liquido.",
        img: granoInoculado,
        slides: [
            {
                id: "0",
                subText: "El grano inoculado viene a ser la inyeccion de micelio liquido (viales) en un grano esteril."
            },
            {
                id: "1",
                subText: "Para inocular deberás utilizar un medio esteril, estos podrian ser: Glovebox, Mecheros Bunsen."
            },
            {
                id: "3",
                subText: "Este proceso es muy delicado por lo que si tu ambiente no es totalmente esteril, habrá muchos errores."
            }
        ],
        recipe: "Para inocular es necesario un ambiente totalmente esteril, puedes utilizar una glovebox o una cabina de flujo laminar. Para realizar cualquier pinchazo con la aguja se deberá esterilizar previamente, puedes utilizar un mechero para dicho proceso."
    },
    {
        id: "4",
        title: "Grano colonizado",
        subText: "Es el grano inoculado totalmente colonizado por el micelio del hongo, desde aca podras iniciar la etapa del Bulk con facilidad.",
        img: granoColonizado,
        slides: [
            {
                id: "0",
                subText: "El grano colonizado viene a ser el micelio o el hongo en si consumiendo su alimento(grano)."
            },
            {
                id: "1",
                subText: "Una vez obtengas grano totalmente colonizado podrás realizar un Bulk con facilidad."
            },
            {
                id: "2",
                subText: "Una vez obtengas grano colonizado deberás comprobar que se encuentra en su totalidad de color blanco."
            }
        ],
        recipe: "Para tener una optima colonización se debe incubar en un lugar con optimas condiciones de temperatura entre 20°C y 27°C. Alrededor de los 14 dias aproximadamente tendremos grano completamente colonizado."
    },
    {
        id: "5",
        title: "Sustrato",
        subText: "El sustrato viene a contribuir en humedad y tambien en proporcionar los nutrientes necesarios que requiere el hongo.",
        img: sustrato,
        slides: [
            {
                id: "0",
                subText: "El sustrato viene a ser la superficie en la que el hongo podra absorver humedad."
            },
            {
                id: "1",
                subText: "Mayormente se usa fibra de coco un poco mojada (no empapada)."
            },
            {
                id: "2",
                subText: "Tambien existen otros sustratos o mezclas como: Posta + Vermiculita, Fibra de coco + humus."
            }
        ],
        recipe: "Mayormente se utiliza posta, vermiculita y fibra de coco. La proporcion se estima en base a la cantidad de grano colonizado, la proporcion correcta es de 1:2, lo que significa que por cada litro de grano colonizado que tengas necesitaras 2 litros de sustrato."
    },
    {
        id: "6",
        title: "Sustrato pasteurizado",
        subText: "Es la mezcla de sustrato que pasa por un proceso termico para reducir el porcentaje de bacterias y mantener los nutrientes.",
        img: sustrato,
        slides: [
            {
                id: "0",
                subText: "El sustrato debe estar pasteurizado para facilitar la colonizacion de nuestro hongo."
            },
            {
                id: "1",
                subText: "Para pasteurizar un sustrato debes herbirlo durante 1 hora y 20 minutos."
            },
            {
                id: "2",
                subText: "La humedad exacta se determina al apretar un poco de este sustrato y que no salga agua, pero si estar mojado."
            }
        ],
        recipe: "Para pasteurizar el sustrato podremos realizarlo en ollas normales o en olla a presion. Para ello será necesario poner la mezcla de sustrato en una bolsa de cultivo o envuelta en una tela y ponerla a herbir bajo agua durante 1 hora y 30 minutos si es a olla normal y en olla a presion 40 minutos\""
    },
    {
        id: "7",
        title: "Bulk - Desde aqui inicia tu Kit ",
        subText: "Proceso en el cual mezclas tu sustrato y grano colonizado",
        img: granoColonizado,
        slides: [
            {
                id: "0",
                subText: "Este proceso basicamente es mezclar el sustrato y grano colonizado en un monotub o bolsa de cultivo."
            },
            {
                id: "1",
                subText: "Un monotub es una caja con 4 a 6 orificios en los laterales para que exista una respiracion pasiva."
            },
            {
                id: "2",
                subText: "En la base del monotub se coloca una bolsa como guia y encima de ella se prepara la mezcla."
            }
        ],
        recipe: "Para realizar el bulk necesitaremos de grano colonizado y sustrato pasteurizado, una vez tenemos el sustrato a temperatura ambiente podremos realizar la mezcla en un monotub(caja con agujeros). Utilizando como base una bolsa pondremos encima el sustrato y el grano colonizado y empezaremos a romper el bloque de micelio y asi mezclar homogeneamente con el sustrato."
    },
    {
        id: "8",
        title: "Pan de setas",
        subText: "Luego del bulk aproximadamente en 10 dias tendras un pan de setas totalmente colonizado.",
        img: granoColonizado,
        slides: [
            {
                id: "0",
                subText: "Para la correcta colonizacion de un pan de setas deberá estar cerrado en el monotub durante 10 dias."
            },
            {
                id: "1",
                subText: "Al pasar los 10 dias ya se podrá visualizar un pan de setas totalmente colonizado."
            },
            {
                id: "2",
                subText: "Se verá como un bloque blanco y este será el momento para pasar a fructificar."
            }
        ],
        recipe: "Para realizar tu pan de setas puedes utilizar distintas proporciones de grano, esto puede verse en la cantidad de tiempo que tomará si usas poco grano."
    },
    {
        id: "9",
        title: "Fructificacion",
        subText: "En esta etapa el hongo dará sus frutos dependiendo de los parametros ambientales y cepa.",
        img: granoColonizado,
        slides: [
            {
                id: "0",
                subText: "La fructificacion viene a aser cuando el pan de setas bota frutos (hongos)"
            },
            {
                id: "1",
                subText: "Esta etapa se inducé remojando al pan de setas durante 24 horas, luego de ello se escurre el exceso de agua."
            },
            {
                id: "2",
                subText: "Luego deberás controlar sus parametros de humedad y oxigenación."
            }
        ],
        recipe: "La fructificacion del hongo se da cuando el pan de setas encuentra las condiciones optimas de humedad mayor al 90% y oxigeno. Para lo cual será necesario realizar ventilaciones diarias. Lo recomendable es realizar las ventilaciones en la mañana y noche."
    },
    {
        id: "10",
        title: "Primordios",
        slides: [
            {
                id: "0",
                subText: "Los primordios vienen a ser los hongos en una etapa inicial y saldran dependiendo de su control de humedad y oxigenación."
            },
            {
                id: "1",
                subText: "Estos se presentarán alrededor de las 2 o 3 semanas de empezar las aireaciones."
            },
            {
                id: "2",
                subText: "Para ello debes abrir la caja y rociar un poco de agua esteril luego cerrar."
            }
        ],
        subText: "Los primordios aparecen como pequeñas bolitas blancas y luego terminan siendo un mini - honguito que ira creciendo.",
        recipe: "Al pasar 10 dias aproximadamente podras visualizar pequeñas bolitas que iran creciendo al pasar de los dias, estos pueden abortar y ponerse de color oscuro de no ventilar adecuadamente o no mantener la humedad al 90%.",
        img: granoColonizado,
    },
    {
        id: "11",
        title: "Cosecha",
        subText: "Una vez los primordios hallan conseguido suficiente tamaño podras cosecharlos.",
        slides: [
            {
                id: "0",
                subText: "Los primordios crerán a lo largo de los dias y llegarán a abrir el velo (cabeza) para recien ser cosechados. "
            },
            {
                id: "1",
                subText: "Algunos primordios se pueden tornar negros y será signo de abortos."
            },
            {
                id: "2",
                subText: "Los abortos no crecerán y deben ser retirados debido a que pueden contaminar el pan de setas."
            }
        ],
        img: cosecha,
        recipe: "Podras cosechar tus hongos cuando rompan el velo o esten a punto de romper el velo. Lo mas ideal es cosechar antes de que esporulen, ya que podria manchar al pan de setas."
    },
]

const RoadMap = () => {
    const revealRefs = useRef([]);
    revealRefs.current = [];
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let t1 = gsap.timeline();
        revealRefs.current.forEach((el, index) => {
            t1.fromTo(
                el.childNodes[0],
                {
                    y: '0'
                }, {
                y: '-15%',
                scrollTrigger: {
                    id: `section.${index + 1}`,
                    trigger: el,
                    start: 'top center+=200px',
                    end: 'bottom center',
                    scrub: true,
                    //markers:true,
                }
            }
            )

        })
        return () => {

        }
    }, [])

    return (
        <Section id="roadmap" img={img1}>
            <Title> Cuidados e indicaciones</Title>
            {
                /* 
              <CardCircle array={procesoCultivo} firstRadio={44} secondRadio={35} firstCircleRadio={3} secondCircleRadio={9}/>
                
                */
            }
            <Box>
                <VideoContainer>
                    <video controls src={videoSource} >
                    </video>
                </VideoContainer>
            </Box>

        </Section>
    )
}

export default RoadMap
