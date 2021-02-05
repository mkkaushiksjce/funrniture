import React, { Component } from "react";
import { render } from "react-dom";

import "./style.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBullets: false
    };
  }

  handleDragStart = e => {
    e.preventDefault();
  };

  render() {
    const normal = [
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/1.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/2.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/3.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/4.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/5.jpg"
        onDragStart={this.handleDragStart}
      />
    ];

    return (
      <div>
        <AliceCarousel mouseTracking items={normal} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
