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
    const images = [
      {
        original: "https://drive.google.com/file/d/1KMI8AQ4ekUZrM2-ZrssJJOD70KgBTfcp/view",
        thumbnail: "https://via.placeholder.com/25x25?text=1",
        description: "test"
      },
      {
        original: "https://via.placeholder.com/600x400?text=2",
        thumbnail: "https://via.placeholder.com/25x25?text=2"
      },
      {
        original: "https://via.placeholder.com/600x400?text=3",
        thumbnail: "https://via.placeholder.com/25x25?text=3"
      },
      {
        original: "https://via.placeholder.com/600x400?text=4",
        thumbnail: "https://via.placeholder.com/25x25?text=4"
      },
      {
        original: "https://via.placeholder.com/600x400?text=5",
        thumbnail: "https://via.placeholder.com/25x25?text=5"
      },
      {
        original: "https://via.placeholder.com/600x400?text=6",
        thumbnail: "https://via.placeholder.com/25x25?text=6"
      },
      {
        original: "https://via.placeholder.com/600x400?text=7",
        thumbnail: "https://via.placeholder.com/25x25?text=7"
      },
      {
        original: "https://via.placeholder.com/600x400?text=8",
        thumbnail: "https://via.placeholder.com/25x25?text=8"
      },
      {
        original: "https://via.placeholder.com/600x400?text=9",
        thumbnail: "https://via.placeholder.com/25x25?text=9"
      },
      {
        original: "https://via.placeholder.com/600x400?text=10",
        thumbnail: "https://via.placeholder.com/25x25?text=10"
      },
      {
        original: "https://via.placeholder.com/600x400?text=11",
        thumbnail: "https://via.placeholder.com/25x25?text=11"
      },
      {
        original: "https://via.placeholder.com/600x400?text=12",
        thumbnail: "https://via.placeholder.com/25x25?text=12"
      },
      {
        original: "https://via.placeholder.com/600x400?text=13",
        thumbnail: "https://via.placeholder.com/25x25?text=13"
      },
      {
        original: "https://via.placeholder.com/600x400?text=14",
        thumbnail: "https://via.placeholder.com/25x25?text=14"
      },
      {
        original: "https://via.placeholder.com/600x400?text=15",
        thumbnail: "https://via.placeholder.com/25x25?text=15"
      },
      {
        original: "https://via.placeholder.com/600x400?text=16",
        thumbnail: "https://via.placeholder.com/25x25?text=16"
      },
      {
        original: "https://via.placeholder.com/600x400?text=17",
        thumbnail: "https://via.placeholder.com/25x25?text=17"
      },
      {
        original: "https://via.placeholder.com/600x400?text=18",
        thumbnail: "https://via.placeholder.com/25x25?text=18"
      },
      {
        original: "https://via.placeholder.com/600x400?text=19",
        thumbnail: "https://via.placeholder.com/25x25?text=19"
      },
      {
        original: "https://via.placeholder.com/600x400?text=20",
        thumbnail: "https://via.placeholder.com/25x25?text=20"
      },
      {
        original: "https://via.placeholder.com/600x400?text=21",
        thumbnail: "https://via.placeholder.com/25x25?text=21"
      },
      {
        original: "https://via.placeholder.com/600x400?text=22",
        thumbnail: "https://via.placeholder.com/25x25?text=22"
      },
      {
        original: "https://via.placeholder.com/600x400?text=23",
        thumbnail: "https://via.placeholder.com/25x25?text=23"
      },
      {
        original: "https://via.placeholder.com/600x400?text=24",
        thumbnail: "https://via.placeholder.com/25x25?text=24"
      },
      {
        original: "https://via.placeholder.com/600x400?text=25",
        thumbnail: "https://via.placeholder.com/25x25?text=25"
      },
      {
        original: "https://via.placeholder.com/600x400?text=26",
        thumbnail: "https://via.placeholder.com/25x25?text=26"
      },
      {
        original: "https://via.placeholder.com/600x400?text=27",
        thumbnail: "https://via.placeholder.com/25x25?text=27"
      },
      {
        original: "https://via.placeholder.com/600x400?text=28",
        thumbnail: "https://via.placeholder.com/25x25?text=28"
      },
      {
        original: "https://via.placeholder.com/600x400?text=29",
        thumbnail: "https://via.placeholder.com/25x25?text=29"
      },
      {
        original: "https://via.placeholder.com/600x400?text=30",
        thumbnail: "https://via.placeholder.com/25x25?text=30"
      },
      {
        original: "https://via.placeholder.com/600x400?text=31",
        thumbnail: "https://via.placeholder.com/25x25?text=31"
      },
      {
        original: "https://via.placeholder.com/600x400?text=32",
        thumbnail: "https://via.placeholder.com/25x25?text=32"
      },
      {
        original: "https://via.placeholder.com/600x400?text=33",
        thumbnail: "https://via.placeholder.com/25x25?text=33"
      },
      {
        original: "https://via.placeholder.com/600x400?text=34",
        thumbnail: "https://via.placeholder.com/25x25?text=34"
      },
      {
        original: "https://via.placeholder.com/600x400?text=35",
        thumbnail: "https://via.placeholder.com/25x25?text=35"
      },
      {
        original: "https://via.placeholder.com/600x400?text=36",
        thumbnail: "https://via.placeholder.com/25x25?text=36"
      },
      {
        original: "https://via.placeholder.com/600x400?text=37",
        thumbnail: "https://via.placeholder.com/25x25?text=37"
      },
      {
        original: "https://via.placeholder.com/600x400?text=38",
        thumbnail: "https://via.placeholder.com/25x25?text=38"
      },
      {
        original: "https://via.placeholder.com/600x400?text=39",
        thumbnail: "https://via.placeholder.com/25x25?text=39"
      },
      {
        original: "https://via.placeholder.com/600x400?text=40",
        thumbnail: "https://via.placeholder.com/25x25?text=40"
      }
    ];

    return (
      <div>
        <ImageGallery
          items={images}
          showBullets={false}
          slideOnThumbnailHover={true}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
