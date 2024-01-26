import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterMenuIcons>
        <FooterMenuIconsItem $url="./svg/instagram.svg">
          <a target="_blank" href="https://www.instagram.com/eat_curious/"></a>
        </FooterMenuIconsItem>

        <FooterMenuIconsItem $url="./svg/facebook.svg">
          <a target="_blank" href="https://www.facebook.com/eatcurious/"></a>
        </FooterMenuIconsItem>

        <FooterMenuIconsItem $url="./svg/linkedin.svg">
          <a
            target="_blank"
            href="https://uk.linkedin.com/company/eat-curious"
          ></a>
        </FooterMenuIconsItem>
      </FooterMenuIcons>

      <Credits>© Eat Curious 2024 | Cloned by Luka Kilasonia</Credits>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.colors.pink};
`;

const FooterMenuIcons = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const FooterMenuIconsItem = styled.li<{ $url: string }>`
  list-style: none;
  & > a {
    width: 25px;
    height: 25px;
    display: block;
    background-image: ${(props) => `url(${props.$url})`};
    background-size: cover;
  }
`;

const Credits = styled.div`
  width: 100%;
  height: 70px;
  text-align: center;
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
`;
