import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "h1-child" }, "i am h1 tag"),

  React.createElement("div", { id: "tag", key: "h2-child" }, "h2 tag"),
]); //wn u wnat to create to child in a div we use []

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
