import { useEffect, useState } from "react";
import styled from "styled-components";

import productsData from "../../data/products.json";

import { ProductItemHeader } from "./ProductItemHeader";
import { ProductDataType } from "../../PropTypes/ProductDataType";

export const ProductsItem = () => {
  const [data, setData] = useState<ProductDataType>();

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
      <ProductItemHeader title={data?.name} variety={data?.page.variety} />
    </ProductsItemStyled>
  );
};

const ProductsItemStyled = styled.div`
  width: 100%;
  min-height: 100%;
  margin-top: 150px;
`;
