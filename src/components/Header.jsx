import Filters from "./Filters";

const Header = () => {
  return (
    <header className="w-3/4 py-4">
      <h1 className="text-center text-3xl py-4">React Shop🛒</h1>
      <Filters  />
    </header>
  );
};

export default Header;
