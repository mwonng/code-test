import { render } from "@testing-library/react";
import HotelsList from "./index.js";
import { response } from "../../res";

describe("HotelsList", () => {
  const propertyIds = response.results.map((e) => e.property.propertyId);

  propertyIds.forEach((each) => {
    test(`should reader property id -> ${each}`, async () => {
      const { getByTestId } = render(<HotelsList data={response.results} />);

      const component = getByTestId(each);
      expect(component).toBeInTheDocument();
    });
  });
});
