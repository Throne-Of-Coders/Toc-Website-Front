import React from "react";
import tw from "tailwind-styled-components";
//Images
import webDev from "../assets/webDev.png";
import mobileDev from "../assets/mobileDev.png";
import cloudIll from "../assets/cloudIll.png";
const ServiceWrapper = tw.footer`
flex 
flex-col
w-full
align-center
justify-center
mt-16
bg-lightGray
py-4
`;
const HeaderContainer = tw.header`
flex 
flex-row
w-full
self-center
align-center
justify-center
`;
const HeaderText = tw.h1`
font-poppins
font-bold
text-2xl
text-darkBlue
`;
const ServiceItemContainer = tw.div`
flex 
flex-col
items-center
justify-center 
w-full
h-full
py-6
`;
const ServiceItem = tw.div`
flex 
flex-col
items-center
justify-center 
w-1/2
p-4
my-4
`;
const ItemHeader = tw.h1`
font-poppins
text-3xl
text-darkGray
drop-shadow-md
`;
const ItemIcon = tw.img`
h-40
w-40
`;
const TextContainer = tw.div`
flex
flex-col
w-full
h-full
items-center
justify-center 
`;
const ItemText = tw.h1`
font-poppins
font-bold
text-md
text-lightGray
py-2
drop-shadow-md
`;

export const Services = () => {
  return (
    <ServiceWrapper>
      <HeaderContainer>
        <HeaderText>OUR SERVICES</HeaderText>
      </HeaderContainer>
      <ServiceItemContainer>
        <ServiceItem className="boxShadow bg-gradient-to-r from-lightBlue to-darkBlue self-start rounded-r-[15px]">
          <ItemHeader>Web development</ItemHeader>
          <div className="flex flex-row py-1">
            <ItemIcon src={webDev}></ItemIcon>
            <TextContainer>
              <ItemText>
                <span className="text-purple text-lg">
                  Expert Web Development:
                </span>{" "}
                Custom, responsive websites for a strong online impact.
              </ItemText>
              <ItemText>
                <span className="text-purple text-lg">Dynamic Websites:</span>{" "}
                User-friendly, cross-device experiences for your audience.
              </ItemText>
              <ItemText>
                <span className="text-purple text-lg">
                  Versatile Web Solutions:
                </span>{" "}
                Secure, scalable sites for business growth and engagement.
              </ItemText>
            </TextContainer>
          </div>
        </ServiceItem>
        <ServiceItem className="boxShadow bg-gradient-to-r from-purple to-pink self-end rounded-l-[15px]">
          <ItemHeader>Mobile development</ItemHeader>
          <div className="flex flex-row py-1">
            <ItemIcon src={mobileDev}></ItemIcon>
            <TextContainer>
              <ItemText>
                <span className="text-lightBlue text-lg">
                  Innovative Mobile Apps:
                </span>{" "}
                Tailored, high-performance applications for iOS and Android.
              </ItemText>
              <ItemText>
                <span className="text-lightBlue text-lg">
                  Connect Anytime, Anywhere:{" "}
                </span>{" "}
                Engaging mobile solutions to reach your audience.
              </ItemText>
              <ItemText>
                <span className="text-lightBlue text-lg">
                  Responsive Mobile Experience:
                </span>{" "}
                Seamless, user-centric apps with cutting-edge technology.
              </ItemText>
            </TextContainer>
          </div>
        </ServiceItem>

        <ServiceItem className="boxShadow bg-gradient-to-r from-pink to-purple self-start rounded-r-[15px]">
          <ItemHeader>Cloud Consulting</ItemHeader>
          <div className="flex flex-row py-1">
            <ItemIcon src={cloudIll}></ItemIcon>
            <TextContainer>
              <ItemText>
                <span className="text-lightBlue text-lg ">
                  Expert AWS Consulting:
                </span>{" "}
                Optimized, secure cloud solutions for your business.
              </ItemText>
              <ItemText>
                <span className="text-lightBlue text-lg">
                  Cloud Excellence:
                </span>{" "}
                Tailor-made AWS strategies for maximum efficiency.
              </ItemText>
              <ItemText>
                <span className="text-lightBlue text-lg">
                  Maximize Your Cloud:
                </span>
                From migration to management, we optimize your AWS use.
              </ItemText>
            </TextContainer>
          </div>
        </ServiceItem>
      </ServiceItemContainer>
    </ServiceWrapper>
  );
};
