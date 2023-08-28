const Cta = () => {
  return (
    <div
      id="fun"
      className="bg-custom-header-image-2 bg-cover h-96 bg-center relative lg:bg-bottom"
    >
      <div className="p-7 flex flex-col justify-center items-center bg-black/70 absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
        <h1 className="font-black text-white-red text-3xl text-center lg:text-4xl lg:w-2/3 xl:text-5xl">
          A hand can hold <span className="text-palette-red">5 burgers</span>.
          Don’t believe it? <span className="text-palette-red">Just try</span>!
        </h1>
        <button className="mt-7 bg-palette-red text-white-red px-4 py-3 rounded-3xl text-sm font-semibold">
          Order Now
        </button>
      </div>
    </div>
  );
};
export default Cta;
