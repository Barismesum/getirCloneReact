import Header from "components/Header";
import HeroSection from "components/HeroSection";
import Favorites from "components/Favorites";
import Campaigns from "components/Campaigns";
import Card from "components/Card";
import Footer from "components/Footer";
import MobileApp from "components/MobileApp";
import Categories from "components/Categories";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <div className="container mx-auto">
      <Favorites />
      <MobileApp />
      <Card />
      </div>
      <Footer />
    </>
  );
}

export default App;
