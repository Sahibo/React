import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent, handleSort  } from "../store/reducer";
import "./styles/Catalog.css";

export function Catalog() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.products.categoriesArr);
  let [sortByPrice, setSortByPrice] = useState({ increase: 'Sort by price to increase', decrease: 'Sort by price to decrease' })
  let [sortByCategory, setSortByCategory] = useState('')

  useEffect(() => {
    dispatch(fetchContent());

  }, []);

  console.log(data);
  return (
    <div className="catalog-container">
      <div className="categories-container">
        <ul className="categories-list">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((category, index) => (
              <li className="category" key={index}>
                {category.name}
              </li>
            ))
          ) : (
            <p>Error</p>
          )}
        </ul>
      </div>

      <ul>
        <select onChange={(e) => dispatch(handleSort(e.target.value))}>
          <option value={sortByPrice.increase}>{sortByPrice.increase}</option>
          <option value={sortByPrice.decrease}>{sortByPrice.decrease}</option>
        </select>

        



        {Array.isArray(data) && data.length > 0 ? (
          data.map((category, categoryIndex) => (
            <li key={categoryIndex}>
              {category.name}
              {category.subcategories.map((subcategory, subcategoryIndex) => (
                <div key={subcategoryIndex}>
                  <h3>{subcategory.name}</h3>
                  <ul>
                    {subcategory.products.map((product, productIndex) => (
                      <li key={productIndex}>
                        {product.name} - Price: {product.price}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </li>
          ))
        ) : (
          <p>Error</p>
        )}

      </ul>

    </div>
  );
}
