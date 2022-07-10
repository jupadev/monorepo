import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

import { companyTitle } from "@monorepo/utils";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: new RegExp(`welcome to ${companyTitle}`, "i"),
    });

    expect(heading).toBeInTheDocument();
  });
});
