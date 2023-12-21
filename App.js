import React from "react";
import ReactDOM from "react-dom/client";

//JSX => React.createElement => JS Object => HTMLElement(render)

const element = <span>This is Span!!</span>

const Tiitle = () => (<h1 id="heading">
    {element}
    Namaste React using JSX 🚀
    </h1>);

// Component Composition
const HeadingComponent = () => (
    <div id="container">
        <Tiitle/>
        <Tiitle></Tiitle>
        <h1>Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
