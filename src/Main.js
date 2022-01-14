import React, { Component } from "react";
import "./Main.css";
import SearchComp from "./SearchComp";
import CompA from "./CompA";
import CompB from "./CompB";
import CompC from "./CompC";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noPass: null,
      maxCap: 200,
      minPass: 11,
    };
    this.handler = this.handler.bind(this);
  }
  handler(n) {
    this.setState({ ...this.state, noPass: n });
  }
  render() {
    return (
      <>
        <SearchComp
          maxCap={this.state.maxCap}
          minPass={this.state.minPass}
          handler={this.handler}
        />
        <div className="heading">
          <h4>Aeroplane-Front</h4>
        </div>
        <div className="comp">
          <CompA noPass={this.state.noPass} />
          <CompB noPass={this.state.noPass} />
          <CompC noPass={this.state.noPass} />
        </div>
      </>
    );
  }
}
export default Main;
