import { useEffect, useState } from "react";
import styled from "styled-components";
import productsData from "../../data/products.json";

interface ProductDataType {
  index: number;
  name: string;
  img: string;
  backgroundColor: string;
  page: {
    variety: VarietyType[];
    ingredients: string;
    allergens: string;
    storage: string;
    instructions: string;
    weights: string;
    case: string;
  };
}

interface VarietyType {
  name: string;
  text: string;
  image: string;
  backgroundColor: string;
}

export const ProductsItem = () => {
  const [data, setData] = useState<ProductDataType>();

  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    const index = localStorage.getItem("i");
    productsData.map((item: ProductDataType) => {
      if (item.index === +index!) {
        setData(item);
      }
    });

    // return localStorage.clear();
  }, []);

  return (
    <ProductsItemStyled>
      <ProductsHeaderContainer>
        <ItemVariety>
          {data &&
            data.page.variety.map((v: VarietyType, index: number) => (
              <VarietyButton
                onClick={() => setIsActive(index)}
                $active={index === isActive ? true : false}
                $bc={v.backgroundColor}
              >
                {v.name}
              </VarietyButton>
            ))}
        </ItemVariety>
        <h2>{data?.name}</h2>
      </ProductsHeaderContainer>
    </ProductsItemStyled>
  );
};

const ProductsItemStyled = styled.div`
  width: 100%;
  min-height: 100%;
  margin-top: 150px;
`;

const ProductsHeaderContainer = styled.div`
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
    width: 50%;
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
