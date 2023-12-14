import React from "react";
import ReactDOM from "react-dom";

//React.createElement => Object => HTMLElement(render)

const heading = React.createElement("h1", {}, "Namaste React 🚀");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

root.render(heading);