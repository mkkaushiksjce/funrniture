import React, { Component } from "react";

import ImageGallery from "react-image-gallery";

import { render } from "react-dom";
import Hello from "./Hello";

import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBullets: false
    };
  }

  render() {
    return <div>Hello</div>;
  }
}

render(<App />, document.getElementById("root"));
