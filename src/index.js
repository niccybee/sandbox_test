import "./styles.css";
// import axios from "axios";

let display = document.getElementById("app").innerHTML;

const button = {
  buttonName: "",
  dom: () => `<div class="button"> Hello ${this.buttonName}></div>`,
  buttonFunc: thing => {
    var here = this;
    console.log(here);
  }
};

display = button.dom;
