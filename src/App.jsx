import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import { CartProvider } from "./context/cart";
import { useFilters } from "./hooks/useFilters";
import { products } from "./mocks/products.json";

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <div className="flex flex-col justify-center items-center min-h-screen bg-slate-900 text-white">
        <Header />
        <Cart />
        <Products products={filteredProducts} />
      </div>
    </CartProvider>
  );
}

export default App;
