import Product from "./Product";

const Products = () => {
  return (
    <div className="py-16 px-6" id="products">
      <h1 className="text-center text-2xl text-custom-black font-black md:mb-12 md:text-4xl">
        Choose your <span className="text-palette-red">Burger</span>
      </h1>
      <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-x-5 md:gap-y-16">
        <Product
          name="Double Trouble"
          price="150"
          image="/img/doubleTrouble.png"
          first={true}
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
