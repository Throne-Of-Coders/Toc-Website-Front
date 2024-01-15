import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
//images
import IllustrationFigure from "../../assets/Illustartion.png";
import blub from "../../assets/blub.png";
import Devider from "../../assets/devider2.png";
//Data
import { services } from "../../locals/services";
const Container = tw.div`
flex
flex-row
items-center
justify-center
`;
const Blub = tw.img`
absolute
top-0
left-0
z-0
object-contain
w-auto
h-[550px]
object-contain
`;
const Illustration = tw.img`
object-contain
w-auto
h-[450px]
object-contain
z-20
border-b-[2px]
`;
const WelcomeMessage = tw.div`
text-2xl
md:text-2xl
font-bold
mb-4
text-[#2596be]
text-center
font-poppins
whitespace-none
`;
const TextSection = tw.div`
flex
flex-col 
w-[600px]
h-[150px]
items-start
justify-center
z-20
`;
const ServiceName = tw.h1`
flex 
items-center 
justify-center
text-lg
md:text-[40px]
font-poppins
cursor-pointer
font-semibold
text-[#3380a5]
h-full
`;
const ServiceDescription = tw.p`
text-base
text-[#914ebf]
font-poppins
font-light
my-4
whitespace-none
`;
const ButtonsContainer = tw.div`
flex
flex-row
self-center
mt-4
`;

const BlueButton = tw.button`
mx-2  
px-2
py-2
md:px-4
md:h-[35px]
h-[21px]
rounded-[7px]
bg-gradient-to-r from-lightBlue to-darkBlue
self-center
hover:scale-105
`;
const PurpleButton = tw.button`
mx-2  
px-2
py-2
md:px-4
md:h-[35px]
h-[21px]
rounded-[7px]
bg-gradient-to-r from-pink to-purple
self-center
hover:scale-105
`;
const TextButton = tw.p`
text-[11px]
md:text-sm
lg:text-sm
text-white
font-poppins
`;
const DeviderImg = tw.img`
absolute
top-[33rem]
object-contain
w-full
h-auto
object-contain
z-20
`;
export const HeroSection = () => {
  const [currentService, setCurrentService] = useState(services[0]);
  const [serviceIndex, setServiceIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Change the text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentService(services[serviceIndex]);
  }, [serviceIndex]);
  return (
    <Container>
      <Blub src={blub}></Blub>
      <TextSection>
        <WelcomeMessage>
          Throne of Coders: Unleashing Digital Mastery
        </WelcomeMessage>
        <ServiceName>{currentService.name}</ServiceName>
        <ServiceDescription>{currentService.description}</ServiceDescription>
        <ButtonsContainer>
          <BlueButton>
            <TextButton>GET STARTED</TextButton>
          </BlueButton>
          <PurpleButton>
            <TextButton>CONTACT US</TextButton>
          </PurpleButton>
        </ButtonsContainer>
      </TextSection>
      <Illustration src={IllustrationFigure}></Illustration>
      {/* <DeviderImg src={Devider}></DeviderImg> */}
    </Container>
  );
};
