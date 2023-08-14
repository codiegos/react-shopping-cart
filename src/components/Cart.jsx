import { useId } from "react";
import { useCart } from "../hooks/useCart";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li className="border-b border-gray-600 pb-4 ">
      <img className="aspect-video w-full" src={thumbnail} alt={title} />
      <div>
        <span>{title}</span> - <span>${price}</span>
      </div>
      <footer className="flex justify-center items-center gap-2">
        <span>Qty:{quantity}</span>
        <button
          className="px-1.5 bg-blue-800 hover:bg-blue-900 rounded-full"
          onClick={addToCart}
        >
          +
        </button>
      </footer>
    </li>
  );
}

function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();
  return (
    <>
      <label
        htmlFor={cartCheckboxId}
        className="flex items-center justify-center bg-sky-600 h-8 w-8 z-50 rounded-full cursor-pointer absolute top-2 right-2 hover:scale-110 duration-300"
      >
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden className="peer" />
      <aside className="translate-x-96 w-96 peer-checked:translate-x-0 h-full fixed top-0 right-0 p-8 bg-black/90 duration-500">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>
        <button className="flex w-full justify-center" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}

export default Cart;
