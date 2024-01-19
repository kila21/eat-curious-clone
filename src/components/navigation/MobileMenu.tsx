import styled from "styled-components";

import { Logo } from "../../svg-components/Logo";

export const MobileMenu = (props: { isOpen: boolean }) => {
  return props.isOpen ? (
    <MobileMenuContainer>
      <Logo />

      <MobileMenuList>
        <MobileMenuItem>
          <a href="#">Products</a>
        </MobileMenuItem>

        <MobileMenuItem>
          <a href="#">Contact</a>
        </MobileMenuItem>
      </MobileMenuList>

      <MobileMenuIcons>
        <MobileMenuIconsItem $url="./svg/instagram.svg">
          <a target="_blank" href="https://www.instagram.com/eat_curious/"></a>
        </MobileMenuIconsItem>

        <MobileMenuIconsItem $url="./svg/facebook.svg">
          <a target="_blank" href="https://www.facebook.com/eatcurious/"></a>
        </MobileMenuIconsItem>

        <MobileMenuIconsItem $url="./svg/linkedin.svg">
          <a
            target="_blank"
            href="https://uk.linkedin.com/company/eat-curious"
          ></a>
        </MobileMenuIconsItem>
      </MobileMenuIcons>
    </MobileMenuContainer>
  ) : (
    <></>
  );
};

const MobileMenuContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.pink};
    & > svg {
      width: 120px;
    }
  }
`;

const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

const MobileMenuItem = styled.li`
  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    font-size: 12vw;
    font-weight: 900;
    text-transform: uppercase;
  }
`;

const MobileMenuIcons = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const MobileMenuIconsItem = styled.li<{ $url: string }>`
  list-style: none;
  & > a {
    width: 25px;
    height: 25px;
    display: block;
    background-image: ${(props) => `url(${props.$url})`};
    background-size: cover;
  }
`;
