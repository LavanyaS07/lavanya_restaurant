import React, { Component } from "react";
import { STARTERS, MAINCOURSE, NOOFITEMS } from "./OrderBooking";

export const TOTALAMMOUNT = "TOTALAMMOUNT";

export default class CalPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: ""
    };
  }

  calPay() {
    let total = this.state.total;

    if (STARTERS === "Bacon rings" && MAINCOURSE === "Biryani") {
      // this.state.total = NOOFITEMS * 370;
      this.setState({ total: NOOFITEMS * 370 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    } else if (STARTERS === "Biryani" && MAINCOURSE === "Bacon rings") {
      this.setState({ total: NOOFITEMS * 50 });
      sessionStorage.setItem(TOTALAMMOUNT, total);
    }
  }

  render() {
    return <div />;
  }
}