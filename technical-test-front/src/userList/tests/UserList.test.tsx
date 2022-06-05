import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { UserList } from "../components";

it("Renders the user list", async () => {
  const result = render(<UserList />, { wrapper: MemoryRouter });
  await waitForElementToBeRemoved(() => screen.queryByText(/wait/i));
  result.container.querySelector("#userList");
});
