const App = () => {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="group bg-card-bg w-full max-w-sm cursor-pointer rounded-xl p-8 px-4 shadow-lg">
        <img
          src="https://www.apple.com/v/watch/br/images/overview/select/product_u2__hedpiz396nue_large.png"
          alt="Car"
          className="mb-4 h-80 w-full rounded-lg object-contain p-5 transition-all ease-in-out group-hover:scale-110"
        />
        <h2 className="text-text-dark mb-2 text-2xl font-bold">
          Tesla Model S
        </h2>
        <p className="text-text-lite mb-4">
          Experience the future of driving with the all-electric Tesla Model S.
          Enjoy comfort, speed, and technology.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-twitter-blue text-lg font-semibold">
            $120/day
          </span>
          <button className="bg-twitter-blue text-text-lite cursor-pointer rounded px-4 py-2 transition hover:bg-blue-700 hover:text-white">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
