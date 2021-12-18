import React from "react";
import "../styles/category.css";
import { useGetCategoriesQuery } from "../services/productsApi";
import { Link } from "react-router-dom";
// import ScrollAnimation from "react-animate-on-scroll";

export default function CategoriesComp() {
  const { data = [] } = useGetCategoriesQuery();

  return data.map((categories) => {
    return (
      <div>
        <Link to={`/products/categoryfilter/${categories.name}`}>
          <div className="single-category">
            <h3 className="category-comp-titles">
              {/* {categories.name.toUpperCase()} */}
            </h3>
            <img src={categories.image} style={{ width: "150px" }} />
          </div>
        </Link>
      </div>
    );
  });
}
