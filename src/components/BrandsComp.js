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
        <Link to={`/products/brandfilter/${brands.name}`}>
          <div className="single-brand">
            {/* <h3 className="brand-comp-titles">{brands.name.toUpperCase()}</h3> */}
            <img src={brands.image} style={{ width: "120px" }} />
          </div>
        </Link>
      </div>
    );
  });
}
