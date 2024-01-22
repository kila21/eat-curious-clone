import styled, { keyframes } from "styled-components";

export const Carousel = () => {
  const images = [
    "https://eat-curious.com/wp-content/uploads/2023/02/home-19-473x206.jpg",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-27-473x356.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-29-439x473.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-30-473x434.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-31-473x349.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-32-473x473.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-33-473x123.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-34.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-35-468x473.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-37-473x473.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-38.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-39.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-40-473x467.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-41-473x473.png",
    "https://eat-curious.com/wp-content/uploads/2023/02/home-42-463x473.png",
  ];
  return (
    <CarouselStyled>
      {images &&
        images.map((item, index) => (
          <CarouselImage
            key={"image" + index}
            src={item}
            alt="caorusel image"
          />
        ))}
    </CarouselStyled>
  );
};

const animation = keyframes`
    0% {
        transform: translate(0, 0);
    }
    
    100% {
        transform: translate(-100%, 0);
    }
`;

const CarouselStyled = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: inherit;
  animation: ${animation} 25s linear infinite;
`;

const CarouselImage = styled.img`
  margin-right: 5rem;
`;
