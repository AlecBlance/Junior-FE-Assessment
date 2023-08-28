const Message = () => {
  return (
    <div className="grow flex flex-col items-center justify-center md:items-start">
      <div className="text-center md:text-left">
        <h1 className="font-black text-white-red text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          Get a Grip
        </h1>
        <h1 className="font-black text-white-red text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          on <span className="text-palette-red">Flavor</span>
        </h1>
      </div>
      <div className="text-center my-12 md:w-1/2 xl:w-5/12 md:text-left">
        <p className="text-white-red lg:text-lg">
          A handful of delicious burgers within your reach. Have a firm grip at
          this unforgettable taste. Available right now at this very site!
        </p>
      </div>
      <div>
        <button className="transition duration-300 ease-in-out hover:scale-110 bg-palette-red text-white-red px-4 py-3 rounded-3xl text-sm font-semibold">
          Order Now
        </button>
      </div>
    </div>
  );
};
export default Message;
