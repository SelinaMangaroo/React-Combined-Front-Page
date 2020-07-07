import React, { Component } from "react";
import "./Carousel.css";
import CarouselComponent from "./CarouselComponent";

class CarouselApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.data,
      isLoading: false,
      mode: this.props.mode,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? (
          <h2 style={{ textAlign: "center" }}>Loading...</h2>
        ) : (
          <CarouselComponent data={this.state.items} />
        )}
      </div>
    );
  }
}

export default CarouselApp;
