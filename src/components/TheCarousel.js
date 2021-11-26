import React from "react";
import { Carousel } from "react-bootstrap";

export default function TheCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gq.com/photos/5e0514dc58165e000877d842/master/pass/2020trends.jpg"
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            backgroundColor: "black",
            opacity: "80%",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ color: "orange" }}>First slide label</h3>
          <p style={{ color: "beige" }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.vox-cdn.com/thumbor/xIf33WbsmUs7j3vQQNq66CsE1UY=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22300865/GettyImages_1177471633.jpg"
          alt="Second slide"
        />

        <Carousel.Caption
          style={{
            backgroundColor: "black",
            opacity: "70%",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ color: "beige" }}>Second slide label</h3>
          <p style={{ color: "beige" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.vox-cdn.com/thumbor/xIf33WbsmUs7j3vQQNq66CsE1UY=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22300865/GettyImages_1177471633.jpg"
          alt="Third slide"
        />

        <Carousel.Caption
          style={{
            backgroundColor: "black",
            opacity: "70%",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ color: "beige" }}>Third slide label</h3>
          <p style={{ color: "beige" }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
