import { AddToCartIcon } from "./Icons";

const Products = ({ products }) => {
  return (
    <main>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.slice(0,10).map((product) => (
          <li key={product.id} className="bg-black rounded-md p-4 w-96">
            <img src={product.thumbnail} alt={product.title} className="w-full aspect-video"/>
            <div className="flex flex-col justify-center items-center pt-2 space-y-4">
              <h3>
                <span className="font-bold">{product.title}</span> - <span>${product.price}</span>
              </h3>
              <button className="bg-blue-700 rounded-md p-3 hover:bg-blue-800">
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
