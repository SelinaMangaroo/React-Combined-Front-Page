import React, { Component } from "react";
import "./Carousel.css";
import CarouselComponent from "./CarouselComponent";

class CarouselApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: this.props.data,
      items: this.props.data[0].items,
      mode: this.props.mode,
    };
  }

  render() {
    return (
      <div className="App">
        <CarouselComponent data={this.state.items} />
      </div>
    );
  }
}

export default CarouselApp;
