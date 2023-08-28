const Message = () => {
  return (
    <div className="grow flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="font-black text-white-red text-6xl">Get a Grip</h1>
        <h1 className="font-black text-white-red text-6xl">
          on <span className="text-palette-red">Flavor</span>
        </h1>
      </div>
      <div className="text-center my-12">
        <p className="text-white-red">
          A handful of delicious burgers within your reach. Have a firm grip at
          this unforgettable taste.
        </p>
      </div>
      <div>
        <button className="bg-palette-red text-white-red px-4 py-3 rounded-3xl text-sm font-semibold">
          Order Now
        </button>
      </div>
    </div>
  );
};
export default Message;
