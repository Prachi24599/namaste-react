// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );
// console.log(heading); //object

/**
 * <div id="parent">
 *   <div id="child">
 *      <h1>This is h1 tag</h1>
 *   </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is h1 tag")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root); //object

root.render(parent);
