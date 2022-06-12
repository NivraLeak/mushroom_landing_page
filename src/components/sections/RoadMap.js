import React, {useLayoutEffect, useRef} from 'react'
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import img1 from '../../assets/strains/strainsSvg/b+Fondo 1.svg'

const Section = styled.section`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
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
  min-height: 300vh;
  width: 85%;
  background-image: linear-gradient(
          rgba(0.5, 0.2, 0.1, 0.25),
          rgba(0.4, 0.1, 0.2, 0.5)
  ), url("${props=> props.img}");
  background-size: cover; 
  background-position: center;
  border-radius: 100px;
  position: relative;
  padding-top: 5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  @media(max-width: 70em){
    width: 100%;
    border-radius: 70px;
  }
  @media(max-width: 48em) {
    width: 100%;
    border-radius: 50px;
  }
  @media(max-width: 30em) {
    width: 100%;
    border-radius: 50px;
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
  
  &>*:nth-last-of-type(2n + 1){
    justify-content: start;
    @media(max-width: 48em) {
      justify-content: center;
    }
    
    div{
      border-radius: 40px;
      text-align: right;
      @media(max-width: 48em) {
        border-radius: 40px;
        text-align: left;
        p{
          border-radius: 30px;
        }
      }
    }
    p{
      border-radius: 30px;

    }
  }
  &>*:nth-last-of-type(2n){
    justify-content: end;
    @media(max-width: 48em) {
      justify-content: center;
    }
  }
  div{
    border-radius: 30px;
    text-align: left;
    @media(max-width: 48em) {
      border-radius: 40px;
      text-align: left;
      p{
        border-radius: 30px;
      }
    }
  }
  p{
    border-radius: 30px;
    
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media(max-width: 72em) {
    justify-content: flex-end; !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  margin-top: 1rem;
  height: fit-content;
  padding: 0.5rem;
  box-shadow: 0 0 15px 1px ${props=>props.theme.body};
  //border: 2.5px solid ${props=>props.theme.text};
  backdrop-filter: blur(5px);
  @media(max-width: 48em) {
    width: 70%;
  }
`;
const Box = styled.p`
  height: fit-content;
  //background-color: ${props => props.theme.carouselColor};

  color: ${props=>props.theme.body};
  padding: 0 0 0 0.7rem;
  position: relative;
  //border: 1px solid ${props=>props.theme.text};
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
const LeafContainer = styled.div`
  width: auto;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;

  img{
    width: auto;
    height: 13rem;
    object-fit: cover;
    border-radius: 30px ;
    margin-left: 0.2rem;
    @media(max-width: 70em) {
      width: auto;
      height: 10.5rem;
    }
    @media(max-width: 48em) {
      width: auto;
      height: 10rem;
    }
    @media(max-width: 30em) {
      width: auto;
      height: 9rem;
    }
  }
`

const procesoCultivo = [
    {
        id:"1",
        title:"Viales o Micelio liquido",
        subText:"Micelio liquido es la especie del hongo en crecimiento en un medio de cultivo liquido. (Mi medio liquido favorito es 2% malta y 2% maple del total de agua, todo ello esterilizado 20 minutos a 15psi.)"
    },
    {
        id:"2",
        title:"Grano esteril",
        subText:"El grano esteril no es mas que arroz u otro grano a medio coser para asi poder facilitar la colonizacion del hongo, todo esto en una bolsa de cultivo y esterilizada a olla a presion durante 90 minutos."
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
                <SubTitle>{title}</SubTitle>
                <LeafContainer>
                    <Box>
                        <Text>{subText}</Text>
                    </Box>
                    <img src={img1} alt="b+ leu"/>
                </LeafContainer>

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
                    y:'-15%',
                    scrollTrigger:{
                        id: `section.${index + 1}`,
                        trigger:el,
                        start:'top center+=50px',
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
      <Title> Mapa de cultivo</Title>
        <Container img={img1}>
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
