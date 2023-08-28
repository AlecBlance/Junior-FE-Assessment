import Message from "./Message";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div
      id="home"
      className="relative bg-custom-header-image bg-cover h-screen bg-right"
    >
      <div className="bg-black/70 py-5 px-6 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex-col flex">
        <Navigation />
        <Message />
      </div>
    </div>
  );
};
export default Header;
