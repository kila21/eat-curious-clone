import styled from "styled-components";
import data from "../../data/products.json";
// import { useState } from "react";

export const Products = () => {
  const arrayOfProductNames = [
    ...data.map((item) => {
      return {
        ...item,
        name: item.name.split("Curious ").join(""),
      };
    }),
  ];

  // const [hoveredItem, setHoveredItem] = useState<string>("");

  const handleMouseEnter = (bColor: string, image: string) => {
    document.body.style.backgroundColor = bColor; // Change this to your desired background color

    // for backgound images when hovering li items
    if (window.innerWidth > 1024) {
      const grid = document.getElementById("product-grid");
      if (grid) {
        grid.childNodes.forEach((item) => {
          if (item instanceof HTMLElement) {
            item.style.display = "block";
            item.style.backgroundImage = `url("${image}")`;
            item.style.scale = "0.7";
          }
        });
      }
    }
  };

  const handleMouseLeave = () => {
    document.body.style.backgroundColor = ""; // Reset to default background color
    if (window.innerWidth > 1024) {
      const grid = document.getElementById("product-grid");
      if (grid) {
        grid.childNodes.forEach((item) => {
          if (item instanceof HTMLElement) {
            item.style.display = "none";
          }
        });
      }
    }
  };

  return (
    <ProductsStyled>
      <ProductList>
        {arrayOfProductNames &&
          arrayOfProductNames.map((item) => (
            <ProductListItem
              key={`product list item: ${item.name}`}
              onMouseEnter={() =>
                handleMouseEnter(item.backgroundColor, item.img)
              }
              onPointerEnter={() =>
                handleMouseEnter(item.backgroundColor, item.img)
              }
              onPointerCancel={handleMouseLeave}
              onMouseLeave={handleMouseLeave}
            >
              <a href={`/product/${item.name}`}>{item.name}</a>
            </ProductListItem>
          ))}
      </ProductList>
      <div
        id="product-grid"
        style={{ transition: "background-image s ease-in" }}
      >
        {/* top images */}
        <ProductBackImages $top={"-10%"} $left={"-10%"} />
        <ProductBackImages $top={"-10%"} $left={"20%"} />
        <ProductBackImages $top={"-10%"} $left={"60%"} />
        <ProductBackImages $top={"-10%"} $left={"85%"} />

        {/* bottom images */}
        <ProductBackImages $top={"85%"} $left={"-20px"} />
        <ProductBackImages $top={"85%"} $left={"25%"} />
        <ProductBackImages $top={"85%"} $left={"60%"} />
        <ProductBackImages $top={"80%"} $left={"85%"} />

        {/* side images */}
        <ProductBackImages $top={"40%"} $left={"-10%"} />
        <ProductBackImages $top={"40%"} $left={"82%"} />
      </div>
    </ProductsStyled>
  );
};

const ProductsStyled = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 5vw;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ProductListItem = styled.li`
  z-index: 2;
  list-style: none;
  & > a {
    color: ${(props) => props.theme.colors.white};
    font-family: "ObviouslyNarrow", Helvetica, sans-serif;
    outline: none;
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
  }
`;

const ProductBackImages = styled.span<{
  $top: string;
  $left: string;
}>`
  position: absolute;
  top: ${(props) => props.$top || 0};
  left: ${(props) => props.$left || 0};
  background-position: center;
  background-size: cover;
  min-width: 300px;
  height: 300px;
  display: none;
  transition: all 0.4s cubic-bezier(0.5, 1.51, 0.55, 0.89);
  -webkit-transition: all 0.4s cubic-bezier(0.5, 1.51, 0.55, 0.89);
`;
