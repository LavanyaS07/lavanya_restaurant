import React, { Component } from "react";
import { Link } from "react-router-dom";
import thankyouimg from "../resources/back7edit.jpg";
import { json } from "body-parser";

class ThankYouMessage extends Component {
  render() {
    return (
      <div>
        <center>
          {/* <h2> You will get the affirmation message by SMS and Email Soon.</h2> */}
          <img src={thankyouimg} width="1000" height="500"/>
          <Link
            to="/"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: 15,
              paddingRight: 15,
              fontSize: 30
            }}
          >
            {" "}
            Go to Home{" "}
          </Link>
        </center>
      </div>
    );
  }
}

export default ThankYouMessage;