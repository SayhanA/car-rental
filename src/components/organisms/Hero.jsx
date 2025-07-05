import HeroSearchForm from "../molicules/HeroSearchForm";

export function Hero() {
  return (
    <section className="text-text-dark relative container mx-auto h-[90vh]">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
          Find Your Perfect
          <span className="text-primary block">Rental Car</span>
        </h1>
        {/* <p className="text-text-lite mb-8 max-w-4xl text-xl">
          Choose from our wide selection of premium vehicles for your next
          adventure. Best prices guaranteed with 24/7 customer support.
        </p> */}

        <HeroSearchForm />
      </div>
    </section>
  );
}
