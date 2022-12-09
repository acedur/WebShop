import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import "./Categories.css";

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData([...data, ...json]));
    // eslint-disable-next-line
  }, []);

  if (data.length === 0) {
    return (
      <div className="categoriesContainer navBorder">
        <Loading />
      </div>
    );
  }
  return (
    <div className="categoriesContainer navBorder">
      {data.map((item) => {
        return (
          <div className="categoriesBtn" key={item}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
