import styled from "styled-components";
import { Rolling } from "../../svg-components/Rolling";
import { HomePageProductsCard } from "./HomePageProductsCard";
import products from "../../data/products.json";
import { HomePageFarm } from "./HomePageFarm";

export const HomePageProducts = () => {
  return (
    <HomePageProductsStyled>
      <HiddenContainer>
        <Rolling />
      </HiddenContainer>

      <div className="products-cont">
        {products &&
          products.map((item) => (
            <HomePageProductsCard
              key={`card ${item.index}, ${item.name}`}
              index={item.index}
              name={item.name}
              backgroundColor={item.backgroundColor}
              img={item.img}
            />
          ))}
      </div>
      <ProductsButton type="submit">View all</ProductsButton>
      <HomePageFarm />
    </HomePageProductsStyled>
  );
};

const HomePageProductsStyled = styled.div`
  /* background-color: ${(props) => props.theme.colors.black}; */

  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  > .products-cont {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 1;
  }
`;

const HiddenContainer = styled.div`
  z-index: 0;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: 200px;
    width: 150vw;
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 150%;
    padding-top: 138%;
  }

  & > svg {
    z-index: 100;
    width: 100%;
    height: auto;
    position: relative;
    padding: 50px 30px;
    & > path {
      fill: white;
    }
  }

  @media (min-width: 1600px) {
    &::before {
      padding-top: 100%;
    }
  }
`;

const ProductsButton = styled.button`
  z-index: 1;
  width: 120px;
  height: 48px;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  /* padding: 0 5px; */
  margin-bottom: 50px;
  border: 1px solid black;
  background-color: ${(props) => props.theme.colors.pink};
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: -1px;
`;
