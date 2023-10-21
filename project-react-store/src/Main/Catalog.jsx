import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent, handleSort } from "../store/reducer";
import "./styles/Catalog.css";

export function Catalog() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.products.categoriesArr);
  let [sortByPrice, setSortByPrice] = useState({
    increase: "Sort by price to increase",
    decrease: "Sort by price to decrease",
  });
  let [productsList, setProductsList] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("Bedroom");
  let [subcategory, setSubcategory] = useState("");
  let [showAll, setShowAll] = useState(true);

  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  const filteredSubcategories = data.find(
    (category) => category.name === selectedCategory
  )?.subcategories;

  const handleCategoryChange = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
    setProductsList([]);
    setShowAll(false);
  };

  const setSelectedSubcategory = (e, subcategory) => {
    e.preventDefault();
    setSubcategory(subcategory);
    setShowAll(false);

    const products =
      data
        .find((category) => category.name === selectedCategory)
        ?.subcategories.find((sub) => sub.name === subcategory)?.products || [];

    setProductsList(products);
  };

  const showAllProducts = (e) => {
    e.preventDefault();
    setShowAll(true);
  };

  return (
    <div className="catalog-container">
      <div className="categories-container">
        <ul className="categories-list">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((category, index) => (
              <li className="category" key={index}>
                <a
                  onClick={(e) => handleCategoryChange(e, category.name)}
                  className="category"
                  href=""
                  key={index}>
                  {category.name}
                </a>
              </li>
            ))
          ) : (
            <p>Error</p>
          )}
        </ul>
      </div>

      <div className="content-container">
        {selectedCategory && filteredSubcategories && (
          <aside className="side-container">
            <ul className="subcategories-list">
              <li className="subcategory">
                <a href="" onClick={(e) => showAllProducts(e)}>
                  Show All
                </a>
              </li>

              {filteredSubcategories.map((subcategory, index) => (
                <li className="subcategory">
                  <a onClick={(e) => setSelectedSubcategory(e, subcategory.name)}
                    href="" key={index}>
                      {subcategory.name}
                    </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <div className="products-outer-container">
          <div className="products-sort">
            <span>{productsList.length} products</span>
            <select onChange={(e) => dispatch(handleSort(e.target.value))} className="select-box">
              <option value={sortByPrice.increase}>
                {sortByPrice.increase}
              </option>
              <option value={sortByPrice.decrease}>
                {sortByPrice.decrease}
              </option>
            </select>
          </div>

          <div className="products-container">
            {showAll ? (
              <div className="products-list">
                  {data.map((category) =>
                    category.subcategories.map((subcategory) =>
                      subcategory.products.map((product, index) => (
                        <div key={index} className="product-item">
                          <p>Name: {product.name}</p>
                          <p>Price: {product.price}</p>
                        </div>
                      ))
                    )
                  )}
              </div>
            ) : productsList.length > 0 ? (
              <div className="products-list">
                  {productsList.map((product, index) => (
                    <div key={index} className="product-item">
                      <p>Name: {product.name}</p>
                      <p>Price: {product.price}</p>
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
