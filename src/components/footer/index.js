import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <Link to="/categories"><button>Categories</button></Link>
        <Link to="/locations"><button>Locations</button></Link>
      </div>
    )
  }
}

export default Footer;
