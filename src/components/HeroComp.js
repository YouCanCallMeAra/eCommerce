import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function HeroComp() {
  return (
    <div className="my-hero-div">
      <h1 style={{ color: "white" }}>shop today</h1>
      <Link to="/products">
        <Button
          variant="warning"
          style={{
            padding: "10px 40px",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0px 8px 20px black",
          }}
        >
          Shop
        </Button>
      </Link>
    </div>
  );
}
