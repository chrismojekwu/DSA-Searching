import React, { Component } from "react";

export default class App extends Component {
  state = {
    input: 0,
    list: [
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5,
    ],
    displayLinear: "",
    displayBinary: "",
  };

  onChangeValue = (num) => {
    this.setState({
      input: num,
    });
  };

  handleLinear = (e) => {
    e.preventDefault();

    let count = 0;

    for (let i = 0; i < this.state.list.length; i++) {
      count++;
      if (+this.state.input === this.state.list[i]) {
        break;
      }
    }

    this.setState({
      displayLinear: count,
    });
  };

  handleBinary = (
    e,
    array = this.state.list.sort(),
    value = this.state.input,
    start,
    end
  ) => {
    e.preventDefault();
    this.setState({
      displayBinary: 0,
    });

    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);

    this.setState({
      displayBinary: this.state.displayBinary++,
    });

    if (item == value) {
      return index;
    } else if (item < value) {
      return this.handleBinary(e, array, value, index + 1, end);
    } else if (item < value) {
      return this.handleBinary(e, array, value, start, index - 1);
    }
  };

  render() {
    return (
      <>
        <div>
          <form>
            <input onChange={(e) => this.onChangeValue(e.target.value)}></input>
            <button onClick={(e) => this.handleLinear(e)}>Linear</button>
            <button onClick={(e) => this.handleBinary(e)}>Binary</button>
          </form>
        </div>
        <div>
          {this.state.displayLinear}
          {this.state.displayBinary}
        </div>
      </>
    );
  }
}
