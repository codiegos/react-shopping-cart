import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

const Filters = () => {
  const { filters,setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };
  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="flex justify-evenly items-center font-bold">
      <div className="flex gap-4">
        <label htmlFor={minPriceFilterId}>Minimum Price:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters?.minPrice}</span>
      </div>
      <div className="flex gap-4">
        <label htmlFor={categoryFilterId}>Category:</label>
        <select
          id={categoryFilterId}
          className="border rounded-lg font-normal focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600"
          onChange={handleChangeCategory}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
