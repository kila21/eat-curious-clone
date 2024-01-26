import { Header } from "./components/header/Header";
import { Carousel } from "./carousel/Carousel";

import data from "./data/home-content-data.json";
import { HomeContent } from "./shared/HomeContent";
import { Benefits } from "./components/benefits/Benefits";
import { HomePageProducts } from "./components/homePage/HomePageProducts";
import { FooterCarousel } from "./carousel/FooterCarousel";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <div style={{ position: "relative", marginTop: "200px" }}>
        {data &&
          data.map((comp, index) => (
            <HomeContent
              key={index + "content"}
              title={comp.title}
              text={comp.text}
              img={comp.img}
              color={comp.color}
              backgroundColor={comp.backgroundColor}
              index={comp.index}
              left={index % 2 === 0 ? true : false}
            />
          ))}
      </div>
      <Benefits />
      <HomePageProducts />
      <Footer />
      <FooterCarousel bc={"#ff73b5"} />
    </>
  );
}

export default App;
