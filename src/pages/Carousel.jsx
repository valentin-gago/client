import CarouselImg1 from "./assets/concierto1.jpg";
import CarouselImg2 from "./assets/concierto2.jpg";
import CarouselImg3 from "./assets/concierto3.jpg";
import CarouselImg4 from "./assets/feel-music.jpg";
import CarouselImg5 from "./assets/port.jpg";

import { Carousel } from "react-bootstrap";
import React from "react";

const Carrousel = () => {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={CarouselImg1} alt="First slide" />
          <Carousel.Caption>
            <h2>Feel Music</h2>
            <p>Surround Sound</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={CarouselImg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>Feel Music</h2>
            <p>The Music That Motivates You</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={CarouselImg3} alt="Third slide" />
          <Carousel.Caption>
            <h2>Feel Music</h2>
            <p>Enjoy Your Best Artists</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={CarouselImg4} alt="Third slide" />
          <Carousel.Caption interval={1000}>
            <h2>Feel Music</h2>
            <p>Let The Sound Accompany You Wherever You Go</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={CarouselImg5} alt="Third slide" />
          <Carousel.Caption interval={1000}>
            <h2>Feel Music</h2>
            <p>Music Is Life</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Carrousel;