import styled from "styled-components";

import { HomeContentProps } from "../PropTypes/HomeContentProps";

export const HomeContent = (props: HomeContentProps) => {
  return (
    <HomeContentStyled
      $bc={props.backgroundColor}
      $color={props.color}
      $index={props.index}
    >
      <HomeContentTitle $left={props.left}>{props.title}</HomeContentTitle>
      <HomeContentImage $left={props.left} src={props.img} alt={props.title} />
      <HomeContentText $left={props.left}>{props.text}</HomeContentText>
    </HomeContentStyled>
  );
};

const HomeContentStyled = styled.section<{
  $bc: string;
  $color: string;
  $index: number;
}>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.$bc};
  color: ${(props) => props.$color};
  position: sticky;
  bottom: 0;
  z-index: ${(props) => props.$index};

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const HomeContentTitle = styled.h3<{ $left: boolean }>`
  text-align: center;
  font-family: "ObviouslyNarrow", Helvetica, sans-serif;
  font-weight: 800;
  position: absolute;
  font-size: 56px;
  color: inherit;

  left: ${(props) => (props.$left ? "5%" : "")};
  right: ${(props) => (props.$left ? "" : "5%")};
  top: 15%;
  width: 30%;

  @media (max-width: 1024px) {
    position: static;
    font-size: 48px;
    padding-top: 50px;
    width: 80%;
  }

  @media (min-width: 1600px) {
    font-size: 70px;
  }
`;

const HomeContentImage = styled.img<{ $left: boolean }>`
  width: 50%;
  height: 60%;
  position: absolute;
  left: ${(props) => (props.$left ? "" : "5%")};
  right: ${(props) => (props.$left ? "5%" : "")};
  top: 20%;

  @media (max-width: 1024px) {
    position: static;
    width: 70%;
    height: 60%;
  }
`;

const HomeContentText = styled.p<{ $left: boolean }>`
  font-family: "Rubik", Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  line-height: 1.6;

  position: absolute;
  left: ${(props) => (props.$left ? "5%" : "")};
  right: ${(props) => (props.$left ? "" : "5%")};
  top: 50%;
  width: 30%;

  @media (max-width: 1024px) {
    position: static;
    width: 80%;
    padding-bottom: 50px;
  }

  @media (min-width: 1600px) {
    font-size: 25px;
  }
`;
