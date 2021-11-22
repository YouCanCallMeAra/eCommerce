import React from "react";
import { Carousel } from "react-bootstrap";

export default function TheCarousel() {
  // const contentStyle = {
  //   height: "800px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  //   backgroundImage: "linear-gradient(red, yellow)",
  //   width: "100%",
  // };

  return (
    // <div>
    //   <Carousel autoplay>
    //     <div>
    //       <img
    //         className="carousel-img"
    //         style={contentStyle}
    //         src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_960_720.jpg"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         className="carousel-img"
    //         style={contentStyle}
    //         src="https://www.frugalandthriving.com.au/wp-content/uploads/2019/04/10-ways-to-save-money-on-clothes.jpeg"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         className="carousel-img"
    //         style={contentStyle}
    //         src="https://cdn.vox-cdn.com/thumbor/xIf33WbsmUs7j3vQQNq66CsE1UY=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22300865/GettyImages_1177471633.jpg"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         className="carousel-img"
    //         style={contentStyle}
    //         src="https://media.gq.com/photos/5e0514dc58165e000877d842/master/pass/2020trends.jpg"
    //       />
    //     </div>
    //   </Carousel>
    // </div>
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
