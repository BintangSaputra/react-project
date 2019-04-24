import React from "react";
import "./index.css";

import { AwesomeButton } from "react-awesome-button";
import { Carousel } from "react-bootstrap";
import Form from "../componentForm/form";

import City from "./images/city.jpeg";
import City2 from "./images/city2.jpeg";
import City3 from "./images/city3.jpeg";

import "react-awesome-button/dist/themes/theme-rickiest.css";

class Body extends React.Component {
  render() {
    const time = () => {
      return new Date().getHours();
    };

    return (
      <div>
        <form className="search">
          <input className="input" type="text" placeholder="search" />
          <div className="buttons">
            <div className="button2">
              <AwesomeButton size="medium" type="primary">
                Search
              </AwesomeButton>
            </div>
          </div>
        </form>

        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={City2}
                alt="First slide"
                height={"500px"}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={City}
                alt="Third slide"
                height={"500px"}
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={City3}
                alt="Third slide"
                height={"500px"}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          ;
        </div>
      </div>
    );
  }
}

export default Body;
