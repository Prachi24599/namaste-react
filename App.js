import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (<h1 className="heading" tabIndex="1">
    Namaste React using JSX! 🚀
    </h1>);

//React Functional Component - Normal JavaScript function that returns JSX code.
const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1>
}

//IF there is only one line, then we can skip return 
const HeadingComponent2 = () =>  <h1 className="heading">Namaste React Functional Component</h1>

//If we need to write JSX on multiple lines then we need to wrap it in curly braces
//This is common convention in industry
const HeadingComponent3 = () => (
    <div id="container">
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
//rendering functional component on the page
root.render(<HeadingComponent3/>);