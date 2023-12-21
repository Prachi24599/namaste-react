import React from "react";
import ReactDOM from "react-dom/client";

//JSX => React.createElement => JS Object => HTMLElement(render)

const Title = () => (<h1 id="heading">
    Namaste React using JSX 🚀
    </h1>);


const number = 10000;

// Component Composition
const HeadingComponent = () => (
    <div id="container">
       <h2> {100 + 300}</h2> 
        <h1 c>Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
