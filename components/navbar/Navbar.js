import React, { Component } from "react";
import "./navbar.less";
import "../../style.less";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar-wrap">
        <div className="viewport cf">
          <div className="f-l" id="logo" href="/">
            Shyam Furniture Store
          </div>
          <div id="shyamNumber" className="f-r">
            +91-9901573751
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
