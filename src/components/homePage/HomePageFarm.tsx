import styled from "styled-components";

export const HomePageFarm = () => {
  return (
    <HomePageFarmStyled>
      <div className="farm-content-container">
        <FarmTitle>We're growing more than plants...</FarmTitle>
        <FarmText>
          We’re here to grow a positive, curious and thoughtful attitude to
          plant-based food. Which is why we put curiosity at the heart of
          everything we do. So much so, we’ve built our own vertical farm – a
          near-off-grid, plant playground where we’re researching how to add
          even more flavour, nutrition and sustainability to the way we all eat.
        </FarmText>
        <FarmButton>Visit Syan Farms</FarmButton>
      </div>
      <FarmImage
        src="https://eat-curious.com/wp-content/uploads/2023/07/home-54-1024x576.jpg"
        alt="farm"
      />
    </HomePageFarmStyled>
  );
};

const HomePageFarmStyled = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  & > .farm-content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1025px) {
    position: relative;
    min-height: 600px;
    justify-content: flex-end;
    & > .farm-content-container {
      width: 30%;
      margin-right: 30px;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
  }
`;

const FarmTitle = styled.h4`
  font-family: "ObviouslyNarrow", Helvetica, sans-serif;
  font-weight: 800;
  font-size: 40px;

  @media (min-width: 1440px) {
    font-size: 70px;
  }
`;

const FarmText = styled.p`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`;

const FarmButton = styled.div`
  position: relative;
  width: 150px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.pink};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  text-transform: uppercase;
  font-family: "ObviouslyNarrow", Helvetica, sans-serif;
  font-size: 20px;
  margin-top: 50px;
`;

const FarmImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (min-width: 1025px) {
    width: 30%;
    position: absolute;
    top: 3%;
    left: 5%;
  }
`;
