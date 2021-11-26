import React from "react";
import { useGetCategoriesQuery } from "../services/productsApi";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default function CategoriesComp() {
  const { data = [], isLoading } = useGetCategoriesQuery();

  return data.map((categories) => {
    return (
      <div>
        <Link to={`/products/filter/${categories.name}`}>
          <div className="single-category">
            {/* <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-female-shoes-on-feet-royalty-free-image-912581410-1563805834.jpg?crop=1.00xw:0.752xh;0,0.127xh&resize=1200:*" /> */}

            <h3 className="category-comp-titles">
              {categories.name.toUpperCase()}
            </h3>

            {/* <h1>{categories.name}</h1> */}
          </div>
        </Link>
      </div>
    );
  });
}
