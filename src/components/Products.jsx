import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

const Products = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id} className="bg-black rounded-md p-4 w-96">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full aspect-video rounded-md"
              />
              <div className="flex flex-col justify-center items-center pt-2 space-y-4">
                <h3>
                  <span className="font-bold">{product.title}</span> -
                  <span>${product.price}</span>
                </h3>
                <button
                  className={`bg-blue-500 rounded-md p-3 hover:bg-blue-700 ${isProductInCart && "bg-red-500 hover:bg-red-700"}`}
                  onClick={() =>
                    isProductInCart ? removeFromCart(product) : addToCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
