import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//importing the components

import HomeSlider from "./components/HomeSlider";
import OrderBooking from "./components/OrderBooking";
import Register from "./components/Register";
import Login from "./components/Login";
import SignIn from "./components/SignIn"
import PaymentMethod from "./components/PaymentMethod";
import PaytmPG from "./components/PaytmPG";
import SBIBankPG from "./components/SBIBankPG";
import ThankYouMessage from "./components/ThankYouMessage";


//importing the images
import navImage from "./resources/navnew3.jpg";
import itemicon from "./resources/itemicon.png";

function App() {
  return (
    <Router>
      <div className="navImage">
        <a href="">
          <img src={navImage} width="100%" height="170" />
        </a>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" style={{ color: "black" }}>
                Home
              </Link>
            </li> 
          </ul>
        </div>
       
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/register"
                className="nav-link"
                style={{ color: "black" }}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/SignIn"
                className="nav-link"
                style={{ color: "black" }}
              >
                SignIn
              </Link>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/booking"
                className="nav-link"
                style={{ color: "black" }}
              >
                Book Item
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link
                to="/payment"
                className="nav-link"
                style={{ color: "black" }}
              >
                Payment
              </Link>
            </li>
          </ul>
        </div>
        
        
      </nav>

      {/* Switching between components */}
      <Switch>
        <Route path="/" exact component={HomeSlider} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/booking" exact component={OrderBooking} />
        <Route path="/payment" exact component={PaymentMethod} />
        <Route path="/submitPaymentDetail" exact component={PaytmPG} />
        <Route path="/thankyou" exact component={ThankYouMessage} />
        <Route path="/sbipg" exact component={SBIBankPG} />
        

        
       
      </Switch>
      <div
        className="footer"
        style={{ backgroundColor: "black", width: 1365, height: 60 }}
      >
        <center>
          {" "}
          <div>
            <img src={itemicon} width="70" />{" "}
          </div>{" "}
          <div style={{ color: "white" }}></div>
        </center>
      </div>
    </Router>
  );
}

export default App;
