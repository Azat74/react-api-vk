import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


var baseURL ="http://test.xn--80acmla5aspef.com:8080/auth/v1/user/login/web/vk";

var myData = {
  vk_token:"paste your token here",
  uuid: "paste your uuid here"
};

var myJSON = JSON.stringify(myData);
console.log(myJSON);
/*
если использовать fetch в консоли увидите статус 200, однако принятые параметры показаны не будут,
если использовать xhr например через библиотеку axios, то параметры будут отображены
*/
fetch(baseURL, {
  headers: {
    "Content-Type": "application/json"
  },
  method: "post",
  body: myJSON
})
  .then(function(res) {
    console.log(res);
    console.log("1");
  })
  .catch(function(e) {
    console.log(e);
  });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
