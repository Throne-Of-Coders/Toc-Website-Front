import React from "react";
import tw from "tailwind-styled-components";

//images
import logo from "../../assets/logo.jpeg";

const MainNavContainer = tw.div`
flex
items-center
bg-[#070f24]
h-[90px]`;
const LogoContainer = tw.div`
w-1/5
h-full
mx-4
md:mx-8
lg:mx-12
cursor-pointer
`;
const Logo = tw.img`
object-contain
w-[90px]
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
    <MainNavContainer className="boxShadow">
      <LogoContainer>
        <Logo src={logo} />
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
