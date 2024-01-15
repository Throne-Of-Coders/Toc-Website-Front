import React from "react";
import tw from "tailwind-styled-components";
import { GiStoneThrone } from "react-icons/gi";
import { GiThroneKing } from "react-icons/gi";
//images
import logo from "../../assets/logo.jpeg";

const MainNavContainer = tw.div`
flex
items-center
h-[90px]
`;
const LogoContainer = tw.div`
flex
flex-row
items-center
w-1/5
h-full
mx-4
md:mx-8
lg:mx-12
cursor-pointer
z-20
`;
const Logo = tw.img`
object-contain
w-[90px]
`;
const TextLogo = tw.h1`
flex 
items-center 
justify-center
text-gray
text-sm
md:text-[16px]
px-2
font-poppins
cursor-pointer
font-semibold
text-[#3380a5]
h-full
`;
const ItemContainer = tw.ul`
pr-4
items-center 
justify-end
flex 
flex-row
flex-1 
h-full
space-x-4
lg:pr-12
z-20
`;
const Item = tw.li`
flex 
items-center 
justify-center
text-gray
text-sm
md:text-[14px]
px-2
font-poppins
cursor-pointer
font-semibold
text-[#3380a5]
h-full
`;
export const DefaultNavBar = () => {
  return (
    <MainNavContainer>
      <LogoContainer>
        <GiThroneKing color="#3380a5" size={26} />
        <TextLogo>Throne Of Coders</TextLogo>
      </LogoContainer>
      <ItemContainer>
        <Item>HOME</Item>
        <Item>ABOUT US</Item>
        <Item>SERVICES</Item>
        <Item>CONTACT</Item>
        <Item>FAQ</Item>
      </ItemContainer>
    </MainNavContainer>
  );
};
