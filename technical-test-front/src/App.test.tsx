import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { App } from "./App";

it("Renders the app", async () => {
  const result = render(<App />);
  await waitForElementToBeRemoved(() => screen.queryByText(/wait/i));
  result.container.querySelector("#app");
});
