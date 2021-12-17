import React from "react";
import "../styles/category.css";
import { useGetBrandsQuery } from "../services/productsApi";
import { Link } from "react-router-dom";
// import ScrollAnimation from "react-animate-on-scroll";

export default function BrandsComp() {
  const { data = [] } = useGetBrandsQuery();

  return data.map((brands) => {
    return (
      <div>
        <Link to={`/products/filter/${brands.name}`}>
          <div className="single-category">
            <h3 className="category-comp-titles">
              {brands.name.toUpperCase()}
            </h3>
            <img src={brands.image} style={{ width: "300px" }} />
          </div>
        </Link>
      </div>
    );
  });
}
