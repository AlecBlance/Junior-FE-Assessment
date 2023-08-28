import { useState } from "react";

const Navigation = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <h1 className="font-black text-palette-red text-2xl">GripBites</h1>
        <div
          className="md:hidden space-y-1.5"
          onClick={() => setCollapse(!collapse)}
        >
          <div className="w-8 h-0.5 bg-white-red"></div>
          <div className="w-8 h-0.5 bg-white-red"></div>
          <div className="w-8 h-0.5 bg-white-red"></div>
        </div>
        <div className="hidden md:w-4/6 lg:w-3/6 xl:w-5/12 2xl:w-4/12 md:flex text-white-red items-center font-semibold">
          <ul className="list-none flex w-full justify-between">
            <li>
              <a href="#home" className="text-palette-red">
                Home
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="hover:text-palette-red transition duration-300 ease-in-out"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-palette-red transition duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#fun"
                className="hover:text-palette-red transition duration-300 ease-in-out"
              >
                Fun Fact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-palette-red transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {collapse && (
        <div className="bg-white-red rounded-lg mt-3 absolute w-full">
          <ul onClick={() => setCollapse(!collapse)}>
            <a href="#home">
              <li className="p-3 border-b-2 border-custom-black/10">Home</li>
            </a>
            <a href="#products">
              <li className="p-3 border-b-2 border-custom-black/10">
                Products
              </li>
            </a>
            <a href="#">
              <li className="p-3 border-b-2 border-custom-black/10">About</li>
            </a>
            <a href="#">
              <li className="p-3 border-b-2 border-custom-black/10">
                Fun Fact
              </li>
            </a>
            <a href="#">
              <li className="p-3 border-b-2 border-custom-black/10">Contact</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navigation;
