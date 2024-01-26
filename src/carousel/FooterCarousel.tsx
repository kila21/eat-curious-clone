import styled, { keyframes } from "styled-components";

export const FooterCarousel = (props: { bc: string }) => {
  const data: string[] = [
    "100% Plant Based",
    "Dairy Free",
    "Packed With Flavour",
  ];
  console.log(data, props);

  return (
    <FooterCarouselStyled $bc={props.bc}>
      <div className="footer-carousel">
        {data &&
          data.map((item) => {
            return <span>{item}</span>;
          })}
      </div>

      <div className="footer-carousel second">
        {data &&
          data.map((item) => {
            return <span>{item}</span>;
          })}
      </div>
    </FooterCarouselStyled>
  );
};

const animate = keyframes`
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-120%);
    }
`;

const animate2 = keyframes`
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-120%);
    }
`;

const FooterCarouselStyled = styled.div<{ $bc: string }>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 50px;
  display: flex;
  background-color: ${(props) => props.$bc};
  overflow: hidden;

  .footer-carousel {
    animation: ${animate} 10s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    & > span {
      min-width: 100px;
      margin-right: 20px;
      font-weight: 800;
      font-family: "Obviously", Helvetica, sans-serif;
      white-space: nowrap;
      color: ${(props) => props.theme.colors.black};
    }

    .second {
      animation: ${animate2} 20s linear infinite;
    }
  }
`;
