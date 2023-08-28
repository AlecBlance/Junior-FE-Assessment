/* eslint-disable react/prop-types */
const Product = ({ name, price, image }) => {
  return (
    <div className="flex shadow-lg rounded-lg items-center py-3 mt-5">
      <img src={image} alt="Double trouble" className="w-24 mb-3" />
      <div>
        <h1 className="font-black text-custom-black">{name}</h1>
        <p className="font-black text-palette-red text-lg">Php {price}</p>
      </div>
    </div>
  );
};
export default Product;
