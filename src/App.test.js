import { render, waitFor } from "@testing-library/react";
import App from "./App";

test("renders App", async () => {
  const { getByAltText } = render(<App />);
  const page = await waitFor(() => getByAltText(/qantasLogo/i));
  expect(page).toBeInTheDocument();
});
