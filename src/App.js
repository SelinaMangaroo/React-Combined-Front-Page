import React, { Component } from "react";
import CarouselApp from "./components/carousel/CarouselApp";
import GridApp from "./components/grid/GridApp";
import InteractiveSetApp from "./components/interactive-sets/InteractiveSetsApp";
import data from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "grid",
      data: data,
    };
  }

  render() {
    if (this.state.mode === "grid") {
      return <GridApp mode="grid" data={this.state.data} />;
    } else if (this.state.mode === "carousel") {
      return <CarouselApp mode="carousel" data={this.state.data} />;
    } else {
      return <InteractiveSetApp mode="interactive-sets" />;
    }
  }
}

export default App;
