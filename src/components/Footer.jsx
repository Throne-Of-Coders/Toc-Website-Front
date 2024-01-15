import React from "react";
import tw from "tailwind-styled-components";

//images

const FooterWrapper = tw.footer`
  flex 
  flex-row
  py-8
  w-full
  align-center
  justify-around
  bg-[#070f24]
  space-x-2
  md:px-4
  px-2
`;

const FooterItem = tw.div`
xl:flex-1
text-center
px-2
`;

const ItemTitle = tw.h1`
font-poppins
text-[#3380a5]
text-left
sm:text-[14px]
md: text-[8px]
lg:text-[17px]

`;
const SubItemContainer = tw.ul`
py-1
text-left
`;
const SubItem = tw.li`
sm:text-[12px]
md: text-[8px]
lg:text-[15px]
font-poppins
font-light
text-white
cursor-pointer
`;
const ImageContainer = tw.div`
flex 
flex-col
align-center
justify-around
`;
const Icon = tw.img`
w-[17px]
h-[17px]
object-contain
cursor-pointer
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItem>
        <ItemTitle>Home</ItemTitle>
        <SubItemContainer>
          <SubItem>About Us</SubItem>
          <SubItem>Our Services</SubItem>
          <SubItem>Contact Us</SubItem>
        </SubItemContainer>
      </FooterItem>
      <FooterItem>
        <ItemTitle>Abouts us</ItemTitle>
        <SubItemContainer>
          <SubItem> Our Mission</SubItem>
          <SubItem>Team </SubItem>
          <SubItem>Careers </SubItem>
          <SubItem>Company History</SubItem>
        </SubItemContainer>
      </FooterItem>
      <FooterItem>
        <ItemTitle>Services</ItemTitle>
        <SubItemContainer>
          <SubItem>Web Development </SubItem>
          <SubItem>App Development</SubItem>
          <SubItem>UI/UX Design </SubItem>
          <SubItem>Cloud Solutions</SubItem>
        </SubItemContainer>
      </FooterItem>
      <FooterItem>
        <ItemTitle>Contact</ItemTitle>
        <SubItemContainer>
          <SubItem>Get in Touch</SubItem>
          <SubItem>Support</SubItem>
          <SubItem>Feedback</SubItem>
        </SubItemContainer>
      </FooterItem>
      <FooterItem>
        <ItemTitle>FAQ</ItemTitle>
        <SubItemContainer>
          <SubItem>General Queries</SubItem>
          <SubItem>Pricing and Plans</SubItem>
          <SubItem>Technical Support</SubItem>
          <SubItem>Privacy and Policy</SubItem>
        </SubItemContainer>
      </FooterItem>
      <ImageContainer>{/* SOCIAL MEDIA */}</ImageContainer>
    </FooterWrapper>
  );
};
