import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";

/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

const setup = () => {
    const breadcrumbList = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "House Details", pageHref: "" }
    ];
    const { container } = render(
        <Router>
            <Breadcrumb data={breadcrumbList} />
        </Router>
    );
    const breadcrumb = container.querySelector(`.breadcrumb`);

    return {
        breadcrumb
    };
};

test("Should have <ol> with className .breadcrumb and have text Home & House Details", () => {
    const { breadcrumb } = setup();

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home");
    expect(breadcrumb).toHaveTextContent("House Details");
});
