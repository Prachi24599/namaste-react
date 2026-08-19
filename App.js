import React from "react";
import ReactDOM from "react-dom/client";
/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I'm h2 tag in first child</h2>    
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>    
        <h2>I'm h2 tag in second child</h2>
    </div>
</div>

*/

const parent = React.createElement("div", {id : "parent"},
    [React.createElement("div", {id : "child"}, 
        [React.createElement("h1", {}, "Namaste React"),
        React.createElement("h2", {}, "by Akshay Saini")]
    ),
    React.createElement("div", {id : "child2"}, 
        [React.createElement("h1", {}, "I'm also an h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag in second child")]
    )]
)

// const heading = React.createElement("h1", {id : "heading"}, "Hello world from React");
console.log(parent); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);