import { useState } from "react";
import styled from "styled-components";

import { ProductItemProps } from "../../PropTypes/ProductItemProps";
import { VarietyType } from "../../PropTypes/VarietyType";

export const ProductItemHeader = (props: ProductItemProps) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <ProductItemHeaderStyled>
      <ProductsHeaderTitle>
        <ItemVariety>
          {props.variety &&
            props.variety.map((v: VarietyType, index: number) => (
              <VarietyButton
                key={v.name + index}
                onClick={() => setIsActive(index)}
                $active={index === isActive ? true : false}
                $bc={v.backgroundColor}
              >
                {v.name}
              </VarietyButton>
            ))}
        </ItemVariety>
        <h2>{props?.title}</h2>
      </ProductsHeaderTitle>
      <ProductHeaderImage src={props.variety?.[isActive].image} />
      <ProductHeaderText>{props.variety?.[isActive].text}</ProductHeaderText>
    </ProductItemHeaderStyled>
  );
};

const ProductItemHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  @media (min-width: 1025px) {
    align-items: flex-start;
  }
`;

const ProductsHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > h2 {
    text-transform: uppercase;
    font-weight: 900;
    margin-top: 20px;
    font-size: 3rem;
    text-align: center;
    font-family: "Obviously", Helvetica, sans-serif;
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 1025px) {
    width: 40%;
    justify-content: space-around;
    & > h2 {
      font-size: 5rem;
    }
  }
  @media (min-width: 1600px) {
    min-height: 600px;
    justify-content: space-evenly;
  }
`;

// buttons container
const ItemVariety = styled.div`
  display: flex;
`;

const VarietyButton = styled.button<{ $bc: string; $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? props.$bc : "rgba(255, 246, 246, 0.1)"};

  color: ${(props) =>
    props.$active ? props.theme.colors.black : props.theme.colors.white};

  font-family: "ObviouslyNarrow", Helvetica, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 900;
  border: none;
  padding: 0 10px;
  margin-right: 1px;
  cursor: pointer;
  min-height: 40px;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:nth-last-child() {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const ProductHeaderImage = styled.img`
  width: 80%;

  @media (min-width: 1025px) {
    position: absolute;
    right: 5%;
    width: 30%;
  }
`;

const ProductHeaderText = styled.p`
  width: 80%;
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  margin-top: 30px;
  line-height: 1.8;

  @media (min-width: 1025px) {
    width: 40%;
    margin-left: 50px;
  }
`;
