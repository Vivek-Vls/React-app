import React, { Component } from "react";
import "./SearchComp.css";
export default class SearchComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }
  handleOnChange(evt) {
    let a = Math.floor(evt.target.value);
    if (isNaN(a)) {
      alert("Please input digits only");
      this.setState({ value: "" });
      return;
    }
    this.setState({ value: a });
  }
  handleButton() {
    if (this.state.value < this.props.minPass) {
      alert("Minimum no of passengers shoulde be " + this.props.minPass);
      this.setState({ value: "" });
      return;
    } else if (this.state.value > this.props.maxCap) {
      alert(
        "No. of passengers shoulde not be greater than " + this.props.maxCap
      );
      this.setState({ value: "" });
      return;
    } else {
      this.props.handler(this.state.value);
    }
  }
  render() {
    return (
      <>
        <label for="search" className="label">
          <strong> Number of passenger</strong>
        </label>
        <br />
        <table className="Search">
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="search"
                  value={this.state.value}
                  onChange={this.handleOnChange}
                  className="input"
                />
              </td>
              <td>
                <button onClick={this.handleButton} className="button">
                  <strong> Click here to calculate seating !</strong>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
