import styled from "styled-components";

export const HomePageProductsCard = (props: {
  img: string;
  index: number;
  name: string;
  backgroundColor: string;
}) => {
  return (
    <HomePageProductsCardStyled $bc={props.backgroundColor}>
      <CardTitle>{props.name}</CardTitle>

      <CardImage src={props.img} />
    </HomePageProductsCardStyled>
  );
};

const HomePageProductsCardStyled = styled.div<{ $bc: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props) => props.$bc};
  border-radius: 20px;
  border: 1px solid black;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 45%;
    margin-right: 20px;
  }
  @media (min-width: 1025px) {
    width: 30%;
    margin-right: 20px;
    min-height: 400px;
  }
  @media (min-width: 2000px) {
    min-height: 700px;
  }
`;

const CardTitle = styled.h3`
  margin-top: 20px;
  font-size: 13vw;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.black};

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 7vw;
  }
  @media (min-width: 1025px) {
    font-size: 5vw;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  bottom: -60%;
  left: 0;

  @media (min-width: 1025px) {
    bottom: -80%;
  }
`;
