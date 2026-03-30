/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>i am h1 tag<h1>
 *      </div>
 * </div>
 *
 *. REactelement(object)==> html (browser understands)
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, "i am h1 tag"),
  React.createElement("div", { id: " child2" }, "h2 tag"),
]); //wn u wnat to create to child in a div we use []

// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //attribute
//   "hello world react",
// ); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
