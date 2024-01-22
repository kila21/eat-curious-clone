import styled, { useTheme } from "styled-components";

import { SharedButton } from "../../shared/Button";

export const Navigation = () => {
  const theme = useTheme();

  return (
    <NavigationContainerStyled>
      <NavigationList $left={true}>
        <NavigationListItem>
          <a href="#">about</a>
        </NavigationListItem>

        <NavigationListItem>
          <a href="#">products</a>
        </NavigationListItem>
      </NavigationList>

      <NavigationList $left={false}>
        <NavigationListItem>
          <a href="#">recipies</a>
        </NavigationListItem>

        <SharedButton
          background={theme.colors.pink}
          text="contact us"
          textColor={theme.colors.black}
          fontSize="18px"
        />
      </NavigationList>
    </NavigationContainerStyled>
  );
};

const NavigationContainerStyled = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    position: fixed;
    top: 0;
    align-items: center;
    width: 100%;
    height: 100px;
  }
`;

const NavigationList = styled.ul<{ $left: boolean }>`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  position: absolute;
  left: ${(props) => (props.$left ? "20px" : "none")};
  right: ${(props) => (props.$left ? "none" : "20px")};
`;

const NavigationListItem = styled.li`
  list-style: none;
  cursor: pointer;
  & > a {
    font-family: "ObviouslyNarrow", Helvetica, sans-serif;
    font-size: 18px;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
