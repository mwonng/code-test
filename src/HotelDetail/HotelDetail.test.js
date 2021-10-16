import { render, screen } from "@testing-library/react";
import HotelDetail from "./index.js";

test("renders HotelDetail", () => {
  render(<HotelDetail />);
  const hotelComponent = screen.getByText(/hotel title/i);
  expect(true).toBe(false);
});
