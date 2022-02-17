import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

//export the variable to access from other components

export const STARTERS = "STARTERS";
export const MAINCOURSE = "MAINCOURSE";
export const NOOFITEMS = "NOOFITEMS";

class OrderBooking extends Component {
  constructor(props) {
    super(props);

    this.checkStarters = this.checkStarters.bind(this);
    this.checkMaincourse = this.checkMaincourse.bind(this);
    this.checkItems = this.checkItems.bind(this);
    this.storeDetails = this.storeDetails.bind(this);

    //Equal the state to empty
    this.state = {
    
      
      starters: "",
      maincourse: "",
      noofitems: ""
    };
  }
  

  //get the input data and store it on variable and
  //display the input data value in console

  //store the input data into states

  checkStarters(e) {
    var soList = document.getElementById("soList").value;
   this.setState({
      starters: e.target.value
    });
    console.log("Starters : " + soList);
  }
  checkMaincourse(e) {
    var deList = document.getElementById("deList").value;
    this.setState({
      maincourse: e.target.value
    });
    console.log("Maincourse : " + deList);
  }
  checkItems(e) {
    var items = document.getElementById("items").value;
    this.setState({
      noofitems: e.target.value
    });
    console.log("No of Items : " + items);
  }

  //store the state value into variable
  //check if state is not equal to empty if not then save
  //that data into session storage
  storeDetails(e) {
    e.preventDefault();
  
   
    let starters = this.state.starters;
    let maincourse = this.state.maincourse;
    let noofitems = this.state.noofitems;

    //Validating the STARTERS, If validated store the data to sessionStorage.
    if (starters === "") {
      alert("STARTERS cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/booking`);
    } else if (starters !== "") {
      sessionStorage.setItem(STARTERS, starters);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }

    //Validating the MAINCOURSE, If validated store the data to sessionStorage.
    if (maincourse === "") {
      alert("MAINCOURSE cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/booking`);
    } else if (maincourse !== "") {
      sessionStorage.setItem(MAINCOURSE, maincourse);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }

    //Validating the NOOFITEMS, If validated store the data to sessionStorage.
    if (noofitems === "") {
      alert("NO OF Items cannot be empty");
      //Redirect the same component when storeMethod is called
      this.props.history.push(`/booking`);
    } else if (noofitems !== "") {
      sessionStorage.setItem(NOOFITEMS, noofitems);
      //go to another component when storeMethod is called
      this.props.history.push(`/payment`);
    }
  }

  render() {
    return (
      <Router>
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
                    Book Item Online{" "}
                  </strong>
                </h5>

                <div className="card-body px-lg-5">
                  <form
                    className="text-center"
                    style={{ color: "#757575" }}
                    onSubmit={this.storeDetails}
                    
                  >
                
                    <label> Starters : </label>
                    <select
                      class="browser-default custom-select mb-4"
                      id="soList"
                      onChange={this.checkStarters}
                    >
                      <option value="" disabled selected>
                        Choose option
                      </option>
                      <option value="Bacon rings"> Bacon rings </option>
                      <option value="Classic canape trio"> Classic canape trio </option>
                      <option value="Ginger chicken meatballs"> Ginger chicken meatballs </option>
                      <option value="Antipasto garlic bread"> Antipasto garlic bread </option>
                      <option value="Bacon and egg tarts"> Bacon and egg tarts </option>
                    </select>
                    <label> Main course : </label>
                    <select
                      class="browser-default custom-select mb-4"
                      id="deList"
                      onChange={this.checkMaincourse}
                    >
                      <option value="" disabled selected>
                        Choose option
                      </option>
                      <option value="Biryani"> Biryani </option>
                      <option value="Curry"> Curry </option>
                      <option value="Korma"> Korma </option>
                      <option value="Chole Bhature"> Chole Bhature </option>
                      <option value="Kati rolls"> Kati rools </option>
                    </select>

                    <label> No of Items : </label>
                    <input
                      type="text"
                      placeholder="No of Items"
                      className="form-control mb-4"
                      id="items"
                      onChange={this.checkItems}
                    />

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
      </Router>
    );
  }
}

export default OrderBooking;