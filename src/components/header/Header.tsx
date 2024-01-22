import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderTitle $transform={false}>
        meat
        <span>-</span>
        free
      </HeaderTitle>
      <HeaderImage src="https://eat-curious.com/wp-content/uploads/2023/07/Afro-Fusion-Spice-Bowl-473x473.png" />
      <HeaderTitle $transform={true}>Your Mind</HeaderTitle>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const HeaderTitle = styled.h1<{ $transform: boolean }>`
  font-size: 17vw;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  font-family: "Rubik", sans-serif;
  font-weight: 800;
  margin: 0 20px;
  text-align: center;
  transform: ${(props) => (props.$transform ? "translate(0, -45%)" : "none")};
  & > span {
  }

  @media (max-width: 768px) {
    font-size: 30vw;
    flex-direction: column;
    letter-spacing: -0.2rem;
    /* width: 80%; */
    & > span {
      visibility: hidden;
      height: 0;
    }
  }
`;

const HeaderImage = styled.img`
  width: 40%;
  transform: translate(0, -15%);
  @media (max-width: 768px) {
    width: 80%;
  }
`;
