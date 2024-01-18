import { useState } from "react";
import { MobileMenu } from "./components/navigation/MobileMenu";
import styled from "styled-components";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <BurgerBar $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerBar>
      <MobileMenu></MobileMenu>
    </>
  );
}

export default App;

const BurgerBar = styled.div<{ $isOpen: boolean }>`
  z-index: 1;
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.$isOpen ? props.theme.colors.black : props.theme.colors.pink};

  border-radius: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span {
    width: 20px;
    height: 2px;
    background-color: white;
    margin-bottom: 5px;
  }

  & > :nth-child(1),
  :nth-child(3) {
    opacity: ${(props) => (props.$isOpen ? 0 : 1)};
  }
`;
