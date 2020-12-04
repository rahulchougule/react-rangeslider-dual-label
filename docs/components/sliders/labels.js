import React, { Component } from "react";
import Slider from "../../../src/Rangeslider";

class HorizontalCustomLabels extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      horizontal: 50,
      vertical: 50,
    };
  }

  handleChangeHorizontal = (value) => {
    this.setState({
      horizontal: value,
    });
  };

  handleChangeVertical = (value) => {
    this.setState({
      vertical: value,
    });
  };

  render() {
    const { horizontal, vertical } = this.state;
    const topLabels = {
      50: "50cr",
      100: "100cr",
      150: "150cr",
      200: "200cr",
      250: "250cr",
      300: "300cr",
      350: "350cr",
      400: "400cr",
      450: "450cr",
      500: "500cr",
    };
    const bottomLabels = {
      50: "50mth",
      100: "100mth",
      150: "150mth",
      200: "200mth",
      250: "250mth",
      300: "300mth",
      350: "350mth",
      400: "400mth",
      450: "450mth",
      500: "500mth",
    };

    const verticalLabels = {
      10: "Getting started",
      50: "Half way",
      90: "Almost done",
      100: "Complete!",
    };

    const formatCr = (value) => value + " Credits";
    const formatPc = (p) => p + "%";

    return (
      <div className="slider custom-labels">
        <Slider
          min={50}
          max={500}
          value={horizontal}
          labels={topLabels}
          bottomLables={bottomLabels}
          format={formatCr}
          handleLabel={horizontal}
          onChange={this.handleChangeHorizontal}
        />

        <hr />
        {/* <Slider
          value={vertical}
          orientation="vertical"
          labels={verticalLabels}
          handleLabel={vertical}
          format={formatPc}
          onChange={this.handleChangeVertical}
        /> */}
        {/* <div className="value">{formatPc(vertical)}</div> */}
      </div>
    );
  }
}

export default HorizontalCustomLabels;
