import ReviewCarousal from "../atoms/ReviewCarousal";
import SectionDescripton from "../atoms/SectionDescripton";
import SectionTitle from "../atoms/SectionTitle";

const CustomerSays = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto">
        <SectionTitle className="mx-auto block w-fit">
          What Our Customers Say
        </SectionTitle>
        <SectionDescripton className="mx-auto mt-4 text-center">
          Discover why discerning travelers choose StayVenture for their luxury
          accommodations around the world.
        </SectionDescripton>

        <ReviewCarousal />
      </div>
    </section>
  );
};

export default CustomerSays;
