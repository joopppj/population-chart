import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

it("properly render", () => {
    const div = document.createElement("div");

    ReactDOM.render(<App></App>, div);
});
