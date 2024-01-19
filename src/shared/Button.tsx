import styled from "styled-components";
import { ButtonProps } from "../PropTypes/ButtonProps";

export const SharedButton = (props: ButtonProps) => {
  return (
    <SharedButtonStyled
      $bc={props.background}
      $textColor={props.textColor}
      $fs={props.fontSize}
    >
      {props.text}
    </SharedButtonStyled>
  );
};

const SharedButtonStyled = styled.button<{
  $textColor: string;
  $bc: string;
  $fs: string;
}>`
  background-color: ${(props) => props.$bc};
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.$fs};
  font-family: "ObviouslyNarrow", Helvetica, sans-serif;
  font-weight: 800;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  padding: 10px;
`;
