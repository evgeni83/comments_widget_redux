import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore } from "redux";
import mainReducer from "./reducers/index";
import "./index.css";

let initialState = {
  //comments: [
  //   {
  //     id: 0,
  //     commentAuthor: "Tom",
  //     commentText: "Hello!"
  //   },
  //   {
  //     id: 1,
  //     commentAuthor: "Helen",
  //     commentText: "Hi"
  //   },
  //   {
  //     id: 2,
  //     commentAuthor: "Will",
  //     commentText: "Yo"
  //   }
  // ],
  // newCommentAuthor: "",
  // newCommentText: ""
};

if (localStorage.hasOwnProperty("comments")) {
  initialState = {comments: JSON.parse(localStorage.getItem("comments"))};
}

console.log(initialState);


const store = createStore(mainReducer, initialState);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
