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
    const normal_sofas = [
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

    const double_sofas = [
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/1_double.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/2_double.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/3_double.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/4_double.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/5_double.jpg"
        onDragStart={this.handleDragStart}
      />
    ];

    const triple_sofas = [
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/1_three.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/2_three.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/3_three.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/4_three.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/5_three.jpg"
        onDragStart={this.handleDragStart}
      />
    ];

    const sectional_sofas = [
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/1_sectional.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/2_sectional.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/3_sectional.jpg"
        onDragStart={this.handleDragStart}
      />
    ];

    const pouf_sofas = [
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/1_pouf.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/2_pouf.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/3_pouf.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/4_pouf.jpg"
        onDragStart={this.handleDragStart}
      />,
      <img
        src="https://raw.githubusercontent.com/mkkaushiksjce/furniture/master/5_pouf.jpg"
        onDragStart={this.handleDragStart}
      />
    ];

    return (
      <div>
        <AliceCarousel mouseTracking items={normal_sofas} />
        <AliceCarousel mouseTracking items={double_sofas} />
        <AliceCarousel mouseTracking items={triple_sofas} />
        <AliceCarousel mouseTracking items={sectional_sofas} />
        <AliceCarousel mouseTracking items={pouf_sofas} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
