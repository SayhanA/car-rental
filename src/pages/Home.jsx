import CustomerSays from "../components/molicules/CustomerSays";
import OwnaCar from "../components/molicules/OwnaCar";
import FeaturedCars from "../components/organisms/FeaturedCars";
import HeroHome from "../components/organisms/HeroHome";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <FeaturedCars />
      <OwnaCar />
      <CustomerSays />
    </div>
  );
};

export default Home;
