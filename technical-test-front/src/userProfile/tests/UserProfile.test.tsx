import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { UserProfile } from "../components";

it("Renders the user profile", async () => {
  const result = render(<UserProfile />, { wrapper: MemoryRouter });
  result.container.querySelector("#userList");
});
