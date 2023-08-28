import { useState } from "react";

const Navigation = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <h1 className="font-black text-palette-red text-2xl">GripBites</h1>
        <div className="space-y-1.5" onClick={() => setCollapse(!collapse)}>
          <div className="w-8 h-0.5 bg-white-red"></div>
          <div className="w-8 h-0.5 bg-white-red"></div>
          <div className="w-8 h-0.5 bg-white-red"></div>
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
