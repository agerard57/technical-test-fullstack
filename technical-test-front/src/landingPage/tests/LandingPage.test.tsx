import { render } from "@testing-library/react";

import { LandingPage } from "../components";

it("Renders the landing page", () => {
  const result = render(<LandingPage />);
  result.container.querySelector("#landingPage");
});
