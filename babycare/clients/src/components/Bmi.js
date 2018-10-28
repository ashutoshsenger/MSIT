import React, { Component } from "react";
import axios from "axios";
import Bootstrap from "bootstrap";
import Jquery from "jquery";
import Popper from "popper.js";

export default class Bmi extends Component {
  onItemClick = function(event) {
    document.getElementById("meddetails").style.display = "block";
  };

  render() {
    return (
      <div>
        <h1 style={{ marginTop: "20px" }}>
          We Provide you food detail and feeding tips with just one click
        </h1>
        <div className="box">
          <h2>BMI</h2>
          <form action="">
            <div className="inputbox">
              <input type="number" name="" required />
              <label>BMI</label>
            </div>
            <input
              onClick={this.onItemClick}
              data-toggle="modal"
              data-target="#exampleModalLong"
              type="submit"
              name=""
              value="Submit"
            />
          </form>
        </div>

        <p
          id="meddetails"
          style={{ marginTop: "280px", fontWeight: "bold", fontSize:"30px", display:"none"}}
        >
          Details :-{" "}
        </p>
      </div>
    );
  }
}
