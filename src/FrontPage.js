import React, { Component } from "react";
import axios from "axios";
import CarouselApp from "./components/carousel/CarouselApp";
import GridApp from "./components/grid/GridApp";
import InteractiveSetApp from "./components/interactive-sets/InteractiveSetsApp";
import data from "./data";

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode,
      data: data,
      items: [],
      endpoint: this.props.endpoint,
    };
  }

  componentDidMount() {
    const endpoint = this.props.endpoint;
    axios.get(endpoint).then((response) => {
      this.setState({
        items: response.data,
      });
      console.log(this.state.items);
    });
  }

  render() {
    if (this.state.mode === "grid") {
      return <GridApp mode="grid" data={this.state.data} />;
    } else if (this.state.mode === "carousel") {
      return <CarouselApp mode="carousel" data={this.state.data} />;
    } else {
      return (
        <InteractiveSetApp mode="interactive-sets" data={this.state.data} />
      );
    }
  }
}

export default FrontPage;
