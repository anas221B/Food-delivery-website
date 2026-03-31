import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="head">namaste jsx</h1>;
const num = 1000;
const Heading = () => (
  <div id="container">
    <Title />
    {num}
    <h1 className="heading"> namaaste functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
