import { useState } from "react";
import styled from "styled-components";

interface ProductInstructionsPropsType {
  ingredients: string | undefined;
  allergens: string | undefined;
  weights: string | undefined;
  case: string | undefined;
  instructions: string | undefined;
  storage: string | undefined;
}

export const ProductInstructions = (props: ProductInstructionsPropsType) => {
  const [clicked, setClicked] = useState([false, false, false, false]);

  const accordionNamesArray = [
    "ingredients",
    "allergen",
    "storage",
    "coocking instructions",
  ];

  const handleClick = (index: number) => {
    const newArray = [...clicked];
    newArray[index] = !newArray[index];
    setClicked(newArray);
  };

  return (
    <InstructionsStyled>
      {accordionNamesArray.map((item, index) => (
        <InstructionHeader key={item + index}>
          <div onClick={() => handleClick(index)}>{item}</div>
          <InstructionsText className={clicked[index] ? `isActive` : ""}>
            {index === 0 && props.ingredients}
            {index === 1 && props.allergens}
            {index === 2 && props.storage}
            {index === 3 && props.instructions}
          </InstructionsText>
        </InstructionHeader>
      ))}

      <LastItems>
        <div>weights: </div>
        <div>{props.weights}</div>
      </LastItems>

      <LastItems>
        <div>case: </div>
        <div>{props.case}</div>
      </LastItems>
    </InstructionsStyled>
  );
};

const InstructionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const InstructionHeader = styled.div`
  width: 100%;
  padding-left: 20px;
  border-top: 2px solid rgba(255, 246, 246, 0.1);
  display: block;
  text-transform: uppercase;
  font-weight: 900;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  min-height: 100px;
  white-space: pre-wrap;

  .isActive {
    display: block !important;
  }

  & > div {
    font-size: 2rem;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 20px;
    /* padding-bottom: 20px; */

    &::after {
      content: "+";
      position: absolute;
      top: 30%;
      right: 10%;
    }
  }
`;

const InstructionsText = styled.p`
  display: none;
  margin-top: 30px;
  font-size: 15px;
  font-weight: 300;
  line-height: 2;
  margin-bottom: 20px;
  padding-right: 20px;
`;

const LastItems = styled.div`
  width: 100%;
  padding-left: 20px;
  border-top: 2px solid rgba(255, 246, 246, 0.1);
  display: flex;
  text-transform: uppercase;
  font-weight: 900;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  min-height: 100px;

  & > div {
    font-size: 2rem;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 20px;
  }
`;
