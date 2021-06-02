import React from "react";
import ReactDOM from "react-dom";

import Homepage from "./Homepage";

it("properly render", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Homepage></Homepage>, div);
});
