import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import { products } from "./mocks/products.json";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900 text-white">
      {/* <Header />
      <Cart />   */}
      <Products products={products}/>
    </div>
  );
}

export default App;
