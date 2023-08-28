import Product from "./Product";

const Products = () => {
  return (
    <div className="py-16 px-6" id="products">
      <h1 className="text-center text-2xl text-custom-black font-black">
        Choose your <span className="text-palette-red">Burger</span>
      </h1>
      <div>
        <Product
          name="Double Trouble"
          price="150"
          image="/img/doubleTrouble.png"
        />
        <Product name="Black Mamba" price="160" image="/img/blackMamba.png" />
        <Product name="Vege Mix" price="130" image="/img/vegeMix.png" />
        <Product name="Burg Khalifa" price="170" image="/img/burgKalifa.png" />
        <Product name="Meat Monster" price="160" image="/img/meatMonster.png" />
        <Product name="Say Cheese" price="160" image="/img/sayCheese.png" />
        <Product
          name="Simply Boring"
          price="120"
          image="/img/simplyBoring.png"
        />
      </div>
    </div>
  );
};
export default Products;
