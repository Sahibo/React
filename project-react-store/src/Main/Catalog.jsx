import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent, handleSort } from "../store/reducer";
import "./styles/Catalog.css";

export function Catalog() {
  const dispatch = useDispatch();
  const dataArr = useSelector((state) => state.products.dataArr);
  const [sortByPrice, setSortByPrice] = useState({
    increase: "Sort by price to increase",
    decrease: "Sort by price to decrease",
  });
  const [productsList, setProductsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Bedroom");
  const [subcategory, setSubcategory] = useState("");
  const [showAll, setShowAll] = useState(true);

  const filteredSubcategories = dataArr.find(
    (category) => category.name === selectedCategory
  )?.subcategories;

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  useEffect(() => {
    const selectedCategoryData = dataArr.find(
      (categoryData) => categoryData.name === selectedCategory
    );

    if (selectedCategoryData) {
      const allProducts = selectedCategoryData.subcategories.flatMap(
        (subcategory) => subcategory.products
      );
      setProductsList(allProducts);
    }
  }, [dataArr, selectedCategory]);

  const handleCategoryChange = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
    setShowAll(true);
  };

  const setSelectedSubcategory = (e, subcategory) => {
    e.preventDefault();
    setSubcategory(subcategory);
    setShowAll(false);

    const selectedCategoryData = dataArr.find(
      (categoryData) => categoryData.name === selectedCategory
    );
    const products =
      selectedCategoryData?.subcategories.find(
        (sub) => sub.name === subcategory
      )?.products || [];
    setProductsList(products);
  };

  const showAllProducts = (e) => {
    e.preventDefault();
    setShowAll(true);

    const selectedCategoryData = dataArr.find(
      (categoryData) => categoryData.name === selectedCategory
    );

    if (selectedCategoryData) {
      const allProducts = selectedCategoryData.subcategories.flatMap(
        (subcategory) => subcategory.products
      );
      setProductsList(allProducts);
    }
  };

  const myHandleSort = (e) => {
    const sortedProductsArr = [...productsList];

    if (e.target.value === "Sort by price to increase") {
      sortedProductsArr.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "Sort by price to decrease") {
      sortedProductsArr.sort((a, b) => b.price - a.price);
    }

    setProductsList(sortedProductsArr);
  };

  return (
    <div className="catalog-container">
      <div className="categories-container">
        <ul className="categories-list">
          {Array.isArray(dataArr) && dataArr.length > 0 ? (
            dataArr.map((category, index) => (
              <a
                onClick={(e) => handleCategoryChange(e, category.name)}
                className={`category ${
                  category.name === selectedCategory ? "selected" : ""
                }`}
                href=""
                key={index}
              >
                {category.name}
              </a>
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
                  <a
                    onClick={(e) => setSelectedSubcategory(e, subcategory.name)}
                    href=""
                    key={index}
                  >
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
            <select onChange={(e) => myHandleSort(e)} className="select-box">
              <option value={sortByPrice.increase}>
                {sortByPrice.increase}
              </option>
              <option value={sortByPrice.decrease}>
                {sortByPrice.decrease}
              </option>
            </select>
          </div>

          <div className="products-container">
            {showAll === true || productsList.length > 0 ? (
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
