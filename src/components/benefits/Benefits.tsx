import styled from "styled-components";

export const Benefits = () => {
  const data: { img: string; title: string; text: string }[] = [
    {
      img: "https://eat-curious.com/wp-content/uploads/2022/12/home-9.png",
      title: "Plant based",
      text: "Plant-protein yumminess, suitable for everyone.",
    },
    {
      img: "https://eat-curious.com/wp-content/uploads/2022/12/home-11.png",
      title: "Real ingredients",
      text: "If we don’t know exactly what an ingredient is, we don’t include it.",
    },
    {
      img: "https://eat-curious.com/wp-content/uploads/2022/12/home-12.png",
      title: "unreal texture",
      text: "It’s not meat. No really, it’s not!",
    },
    {
      img: "https://eat-curious.com/wp-content/uploads/2022/12/home-10.png",
      title: "Bland is banned",
      text: "Foodies unite, because here flavour rules.",
    },
  ];

  return (
    <BenefitsStyled>
      <h2>
        Features & <br />
        Benefits
      </h2>
      <br />
      {data &&
        data.map((item, index) => (
          <SingleBenefit key={index + " " + item}>
            <SingleBenefitImage src={item.img} alt={item.title} />
            <SingleBenefitTitle>{item.title}</SingleBenefitTitle>
            <SingleBenefitText>{item.text}</SingleBenefitText>
          </SingleBenefit>
        ))}
    </BenefitsStyled>
  );
};

const BenefitsStyled = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-wrap: wrap;
  position: relative;

  & > h2 {
    font-size: 7vw;
    font-weight: 900;
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  @media (max-width: 1024px) {
    padding-top: 250px;
  }

  @media (min-width: 1025px) {
    padding-top: 30%;
  }
`;

const SingleBenefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 400px;
  text-transform: uppercase;

  @media (max-width: 500px) {
    min-height: 200px;
  }

  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 1024px) {
    width: 25%;
    min-height: 500px;
  }
`;

const SingleBenefitImage = styled.img`
  margin-bottom: 50px;
  width: 40%;
`;

const SingleBenefitTitle = styled.h5`
  font-family: "ObviouslyNarrow", Helvetica, sans-serif;
  font-size: 3vw;
  font-weight: 600;
`;

const SingleBenefitText = styled.p`
  width: 70%;
  font-weight: 300;
  font-size: 2vw;
  margin-top: 30px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.black};
  text-align: center;
`;
