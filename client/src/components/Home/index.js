import React from "react";
import Carousel from "react-bootstrap/Carousel";

const HomePage = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../images/carousel/carousel1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>
              Join a global community of remote workers living and traveling
              around the world
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-200"
            src={require("../../images/carousel/carousel2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <p>
              {" "}
              Join a global community of remote workers living and traveling
              around the world
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-200"
            src={require("../../images/carousel/carousel3.webp")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>
              Join a global community of remote workers living and traveling
              around the world
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <article className="uk-article">
        <h2 className="uk-article-title">
          <strong>What Is A Digital Nomad?</strong>
        </h2>
        <p className="uk-article-meta">
          Digital nomads are remote workers who travel to different locations on
          a regular basis. They use modern technology to work from coffee shops,
          hotels, co-working spaces, or libraries with a WiFi connected laptop
          or smartphone from anywhere in the world.
        </p>
      </article>
    </>
  );
};

export default HomePage;
