import React from "react";
import ReactDOM from "react-dom/client";

//JSX => React.createElement => JS Object => HTMLElement(render)

const element = <span>Just Element</span>

const title = (<h1 id="heading">
    {element}
    Namaste React using JSX 🚀
    </h1>);

// Component Composition
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1>Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
