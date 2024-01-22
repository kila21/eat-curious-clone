import { useState } from "react";
import styled from "styled-components";

import { MobileMenu } from "./components/navigation/MobileMenu";
import { Navigation } from "./components/navigation/Navigation";
import { Logo } from "./svg-components/Logo";
import { Header } from "./components/header/Header";

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
    </>
  );
}

export default App;

const BurgerBar = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    z-index: 10;
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
