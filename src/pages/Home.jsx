import ClientSection from "../components/molicules/ClientsSection";
import CustomerSays from "../components/molicules/CustomerSays";
import NewsletterSection from "../components/molicules/NewsLetter";
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
      <NewsletterSection />
      <ClientSection />
    </div>
  );
};

export default Home;
