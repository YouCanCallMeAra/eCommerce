import React from "react";
import "../styles/category.css";
import { useGetGendersQuery } from "../services/productsApi";
import { Link } from "react-router-dom";
// import ScrollAnimation from "react-animate-on-scroll";

export default function BrandsComp() {
  const { data = [] } = useGetGendersQuery();

  return data.map((genders) => {
    return (
      <div>
        <Link to={`/products/genderfilter/${genders.name}`}>
          <div className="single-gender">
            <h3 className="gender-comp-titles">{genders.name.toUpperCase()}</h3>
            <img src={genders.image} className="gender-comp-img" />
          </div>
        </Link>
      </div>
    );
  });
}
