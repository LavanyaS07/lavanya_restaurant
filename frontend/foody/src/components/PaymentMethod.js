import React, { Component } from "react";

import visalogo from "../resources/visalogo.png";
import masterlogo from "../resources/masterlogo.png";
import {STARTERS, MAINCOURSE, NOOFITEMS } from "./OrderBooking";


export const TOTAL = "TOTAL";

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "",

     starters: "",
      maincourse: "",
      noofitems: "",
      total: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //setting the state value to session storage value



    this.setState({ starters: sessionStorage.getItem(STARTERS) });
    this.setState({ maincourse: sessionStorage.getItem(MAINCOURSE) });
    this.setState({ noofitems: sessionStorage.getItem(NOOFITEMS) });
    this.setState({ total: sessionStorage.getItem(NOOFITEMS) * 250 });
    this.setState({
    });
    this.setState({
      total:
        sessionStorage.getItem(NOOFITEMS) * 250 -
        sessionStorage.getItem(NOOFITEMS) * 250 * (10 / 100)
    });
  }

  handleChange(e) {
    this.setState({
      method: e.target.value
    });

    let total = this.state.total;
    sessionStorage.setItem(TOTAL, total);
  }
  handleSubmit(e) {
    e.preventDefault();
    let method = this.state.method;

    if (method === "creditcard") {
      this.props.history.push(`/sbipg`);
    } else if (method === "mobile") {
      this.props.history.push(`/submitPaymentDetail`);
    }
    if(this.componentDidMount()){
      fetch("http://localhost:9955/orders/addOrder", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json",
          "Access-Control-Allow-Origin": "*"
          
        },
        "body": JSON.stringify({
          itemid: this.state.itemid,
          starters: this.state.starters,
          maincourse: this.state.maincourse,
          noofitems: this.state.noofitems,
        })
      })
      .then(response => response.json())
      .then(response => {
       alert("Your order is not booked")
      })
      .catch(err => {
        alert("Your order is successfully booked")
      });
    }

  }
  

  render() {
    return (
      <div style={{ backgroundColor: "#D3D3D3" }}>
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card" style={{ width: 600 }}>
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ backgroundColor: " black " }}
              >
                <strong style={{ color: "white" }}>
                  {" "}
                  <h5>Your Details</h5>
                  <h6>
                    {" "}
                      Starters     :{" "}
                    <input
                      type="text"
                      value={this.state.starters}
                      readOnly
                      style={{ backgroundColor: "white" }}
                    />{" "}
                  </h6>
                  <h6>
                    {" "}
                    Maincourse:{" "}
                    <input
                      type="text"
                      value={this.state.maincourse}
                      readOnly
                      style={{ backgroundColor: "white" }}
                    />
                  </h6>
                  <h6>
                    {" "}
                    No of Items:{" "}
                    <input
                      type="text"
                      value={this.state.noofitems}
                      readOnly
                      style={{ backgroundColor: "white" }}
                    />
                  </h6>{" "}
              
                  <h6>
                   {" "}
                    Your TotalBill:{" "}
                    <input
                      type="text"
                      value={this.state.total}
                      readOnly
                      style={{ backgroundColor: "white" }}
                    />
                  </h6>
                  Select the Payment Method
                  <br />
                </strong>
              </h5>

              <div className="card-body px-lg-5">
                <form
                  className="text-center"
                  style={{ color: "black" }}
                  onSubmit={this.handleSubmit}
                >
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="creditcard"
                      name="method"
                      value="creditcard"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="creditcard">
                      Credit Card
                      <div>
                        <img src={visalogo} width="50" height="20" alt="" />
                        <img src={masterlogo} width="50" height="22" alt="" />
                      </div>
                    </label>
                  </div>
                  <div className="custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="mobilenum"
                      name="method"
                      value="mobile"
                      onChange={this.handleChange}
                    />
                    <label className="custom-control-label" for="mobilenum">
                      Mobile Number (Payment will added to the mobile bill)
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-dark btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    NEXT
                  </button>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default PaymentMethod;