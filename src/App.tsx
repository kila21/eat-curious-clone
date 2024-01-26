import { useState } from "react";
import styled from "styled-components";

import { MobileMenu } from "./components/navigation/MobileMenu";
import { Navigation } from "./components/navigation/Navigation";
import { Logo } from "./svg-components/Logo";
import { Header } from "./components/header/Header";
import { Carousel } from "./carousel/Carousel";

import data from "./data/home-content-data.json";
import { HomeContent } from "./shared/HomeContent";
import { Benefits } from "./components/benefits/Benefits";
import { HomePageProducts } from "./components/homePage/HomePageProducts";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BurgerBar $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerBar>
      <Logo />
      <MobileMenu isOpen={isOpen}></MobileMenu>
      <Header></Header>
      <Navigation />
      <Carousel />
      <div style={{ position: "relative", marginTop: "200px" }}>
        {data &&
          data.map((comp, index) => (
            <HomeContent
              key={index + "content"}
              title={comp.title}
              text={comp.text}
              img={comp.img}
              color={comp.color}
              backgroundColor={comp.backgroundColor}
              index={comp.index}
              left={index % 2 === 0 ? true : false}
            />
          ))}
      </div>
      <Benefits />
      <HomePageProducts />
    </>
  );
}

export default App;

const BurgerBar = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    z-index: 1000;
    width: 40px;
    height: 40px;
    background-color: ${(props) =>
      props.$isOpen ? props.theme.colors.black : props.theme.colors.pink};

    border-radius: 10px;
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > span {
      width: 20px;
      height: 2px;
      background-color: ${(props) =>
        props.$isOpen ? props.theme.colors.white : props.theme.colors.black};
      margin-bottom: 5px;
    }

    & > :nth-child(1),
    :nth-child(3) {
      opacity: ${(props) => (props.$isOpen ? 0 : 1)};
    }
  }
`;
