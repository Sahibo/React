import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "../store/reducer";

export function Catalog() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.categoriesArr);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  console.log(data);
  return (
    <div className="category-container">
      <ul>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((category, index) => <li key={index}>{category.name}</li>)
        ) : (
          <p>Error</p>
        )}
      </ul>
    </div>
  );
}
