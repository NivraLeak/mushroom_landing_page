import React, {useLayoutEffect, useRef} from 'react'
import styled from "styled-components";
import Accordion from "../Accordion";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from "gsap";
const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${props=>props.theme.text};
  position: relative;
  color: ${props => props.theme.body};
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: ${props=> props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props=>props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${props=>props.theme.body};
  width: fit-content;
  
  @media (max-width: 48em){
    font-size: ${props => props.theme.fontxl};
  }
`
const Container = styled.div`
  
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;
  
  @media (max-width: 64em){
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
    
    &>*:last-child{
      &>*:first-child{
      margin-top: 0;
      }
    }
  } 
`;
const ContainerTermn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  width: 50%;
  height: auto;
  padding-top: 5rem;
  text-align: center;
  
  h3{
    text-align: center;
  }
`;

const Box = styled.div`
 width: 45%;
  @media (max-width: 64em){
    width: 90%;
    align-self: center;
  }
`;

const Item = styled.div`
  width: fit-content;
  height: auto;
  padding: 1rem;
  color: ${props=> props.theme.body};
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.1)`};
  margin: 1rem;
  position: relative;
  z-index: 5;
  backdrop-filter: blur(2px);

  border: 1px solid ${props=> props.theme.body};
  border-radius: 20px;
  transition: all 0.4s ease;
  &:hover{
    transform: scale(1.2);
  }
  
  @media (max-width: 30em){
    width: 70vw;
  }
`;

const Faq = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;

        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom bottom',
            pin:true,
            pinSpacing:true,
            scrub: true
        })

        return () => {
            ScrollTrigger.kill();
        }
    },[]);


  return (
    <Section ref={ref} id="faq">
      <Title>Pedidos / Envios</Title>
        <ContainerTermn>
            <Item>  <h3>Solo se enviará por sucursales de Shalom </h3> </Item>
            <Item>  <h3>Si desea otro metodo de envio, será por cuenta suya</h3> </Item>
            <Item>  <h3>Envios solo a nivel nacional de Perú </h3> </Item>
            <Item>  <h3>Si deseas reservar un producto, puedes hacerlo aportando el 50% del precio total</h3> </Item>
            <Item>  <h3>No hay stock fijo, pregunta primero</h3>  </Item>
        </ContainerTermn>
      <Container>
        <Box>
            <Accordion title="¿Cuanto rinde la producción?">
                    Esto dependerá principalmente de la cantidad de nutrientes y rasgos distintivos de la especie.
                   <br/>
                    - Un kit conformado por 1L de grano colonizado y 2L de sustrato podran rendir en un 1° flush o cosecha un total de 400-500 gramos en fresco.<br/>
                    - Tambien dependerá de las condiciones climaticas (90% humedad, oxigeno, 22°C - 24°C). <br/>
                    - Si tu especie es productora podrá rendir hasta un quinto flush o cosecha. <br/>
                    - Las especie provenientes de una mutacion de Melmac normalmente producen 2 flushes.<br/>
            </Accordion>
            <Accordion title="¿Como se realizan los envios?">
                    Los envios se realizarán por la agencia de shalom <br/>
                    - Luego de completar tu pago se agendará tu pedido para su envio. <br/>
                    - Podras recoger tu pedido en un plazo maximo de 2 dias luego de completar tu pago y recepcionar tu pedido en una agencia shalom<br/>
                    - Si deseas otro metodo de envio, será por cuenta tuya.<br/>
            </Accordion>
            <Accordion title="¿Que es lo que debo hacer una vez tenga mi kit automatico?">
                Primero tienes que verificar si el kit llego en optimas condiciones.<br/>
                - Luego deberas dejarlo en reposo en un lugar seguro, se recomienda encima de un mueble en una habitación cerrada. <br/>
                - Debes dejarlo en reposo sin abrir hasta que visualices honguitos en la superficie (Esto puede demorar entre 7 - 10 dias)<br/>
                - Una vez visualices primordios (Honguitos pequeños) en la superficie, deberas abrir y cerrar inmediatamente la bolsa, esto 1 vez por dia hasta el dia de su cosecha. <br/>
            </Accordion>
        </Box>
        <Box>
            <Accordion title="¿Que es el peso en fresco?">
                Los hongos son un 90% de humedad e incluso a veces hasta un 93% y esto se vera reflejado en tu produccion al deshidratar tus frutos. <br/>
                - Para calcular tus gramos en seco solo tienes que multiplicar tu peso en fresco x 0.1 <br/>
                - Por ejemplo una cosecha mia fue de 372 gramos en fresco esto seria 37.2 gramos en seco = 372 x 0.1. <br/>
                - Recuerda, cada especie es distinta por lo que el valor 0.1, equivalente al 10%, no siempre será exacto y esto podria variar entre un 7% - 12%
            </Accordion>
            <Accordion title="¿Como detecto contaminaciones?">
                El micelio es blanco de por si y con un olor particular, pero al ser manipulado puede oxidarse y tornarse de un color azul verdoso. <br/>
                - El azul verdoso significa que contiene pcylosivina, pero otro color como verde, rojo o negro seran signo de contaminantes y deberá ser totalmente desechado ni bien es detectada
            </Accordion>
            <Accordion title="¿Puedo recuperar un pan de setas contaminado?">
                No puedes salvar en su totalidad un pan de setas contaminado, lo maximo que podras hacer es reducir el tiempo de colonizacion del contaminante, esto bajo tu propio riesgo, puesto que estarias cultivando una especie que podria contaminarte tambien.
            </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq
