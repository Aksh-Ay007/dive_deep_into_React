import React from "react";
import ReactDOM from "react-dom/client";

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "deep into react"),
    React.createElement("h1", {}, "iam very cursious"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "iam first child"),
    React.createElement("h1", {}, "iam second child"),
  ]),
]);



console.log(parent);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
