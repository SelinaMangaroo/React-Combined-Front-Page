import React, { Component } from "react";
import GridList from "./GridList";

class GridApp extends Component {
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
        <div className="container">
          {this.state.isLoading ? (
            <h2 style={{ textAlign: "center" }}>Loading...</h2>
          ) : (
            <GridList data={this.state.items} />
          )}
        </div>
      </div>
    );
  }
}

export default GridApp;
