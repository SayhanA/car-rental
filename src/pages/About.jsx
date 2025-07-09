import { FaFacebook, FaTwitter } from "react-icons/fa";
import team from "../assets/images/team.jpg"; // Example image, replace with your actual image path
import Button from "../components/atoms/Button";
import HeroTitle from "../components/atoms/HeroTitle";
import TextXL from "../components/atoms/TextXL";

const About = () => {
  return (
    <>
      <section className="bg-bg-secondary h-[91vh]">
        <div className="container mx-auto flex h-full flex-col items-center justify-center">
          <p className="border-text-lite text-text-lite w-fit rounded-full border px-5 py-1 text-sm">
            About Us
          </p>
          <HeroTitle className="mt-5 mb-14">
            Reliable Car Rentals for Every Journey
          </HeroTitle>

          <TextXL className="max-w-[801px] text-center">
            At RideKroy, we make vehicle rental simple, affordable, and
            stress-free. Whether you're heading out for business, travel, or
            daily commuting — choose from our wide range of well-maintained
            vehicles and enjoy flexible pricing, easy booking, and excellent
            customer support.
          </TextXL>

          <div className="mt-20 flex flex-wrap justify-center gap-4">
            <a
              href="https://facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                aria-label="Visit our Facebook page"
                className="group-hover:text-white"
              >
                <FaFacebook className="mr-2 text-blue-600 group-hover:text-white" />
                Facebook
              </Button>
            </a>

            <a
              href="https://twitter.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                aria-label="Visit our Twitter page "
                className="group-hover:text-white"
              >
                <FaTwitter className="mr-2 text-blue-600 group-hover:text-white" />
                Twitter
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto flex flex-col-reverse items-center gap-10 px-4 md:flex-row md:gap-16">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-text-dark mb-6 text-3xl font-bold">
              Our Mission
            </h2>
            <p className="text-text-lite mb-10 text-lg leading-relaxed">
              Our mission is to provide reliable and affordable car rental
              solutions that prioritize customer comfort, safety, and
              satisfaction. We strive to make mobility easier by offering a wide
              range of vehicles for all types of journeys — from daily commutes
              to weekend adventures.
            </p>

            <h2 className="text-text-dark mb-6 text-3xl font-bold">
              Our Vision
            </h2>
            <p className="text-text-lite text-lg leading-relaxed">
              We envision becoming the most trusted and innovative car rental
              company in the region, known for our exceptional service, vehicle
              quality, and commitment to a seamless customer experience.
            </p>
          </div>

          {/* Side Image */}
          <div className="w-full md:w-1/2">
            <img
              src={team} // Replace with your actual image path
              alt="Car rental mission"
              className="h-auto w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
          <p className="text-text-lite mb-4 text-lg">
            Have questions or need assistance? Contact us anytime!
          </p>
          <Button
            onClick={() => (window.location.href = "/contact")}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Contact Us
          </Button>
        </div>
      </section>
      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-2xl font-bold">Join Our Team</h2>
          <p className="text-text-lite mb-4 text-lg">
            We are always looking for passionate individuals to join our team.
          </p>
          <Button
            onClick={() => (window.location.href = "/careers")}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Careers
          </Button>
        </div>
      </section>
      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-2xl font-bold">Follow Us</h2>
          <p className="text-text-lite mb-4 text-lg">
            Stay updated with our latest news and offers.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-bg-secondary py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-2xl font-bold">Customer Testimonials</h2>
          <p className="text-text-lite mb-4 text-lg">
            "RideKroy made my trip so much easier! The car was in great
            condition and the service was excellent." - Jane Doe
          </p>
          <p className="text-text-lite mb-4 text-lg">
            "I love how affordable and convenient RideKroy is. Highly
            recommend!" - John Smith
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
