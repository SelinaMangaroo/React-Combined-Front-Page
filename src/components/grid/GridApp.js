import React, { Component } from "react";
import GridList from "./GridList";

class GridApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets: this.props.data,
      items: this.props.data[0].items,
      mode: this.props.mode,
    };
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        <div className="container">
          <GridList data={this.state.items} />
        </div>
      </div>
    );
  }
}

export default GridApp;
