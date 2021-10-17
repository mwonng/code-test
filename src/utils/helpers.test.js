import { sortByAsce, sortByDesc } from "./helpers";
import { response } from "../res";

describe("sort results", () => {
  test("sortByAsce()", () => {
    const asecOrders = sortByAsce(response.results);
    const firstPrice = asecOrders[0].offer.displayPrice.amount;
    expect(firstPrice).toBe(227);
  });

  test("sortByDesc()", () => {
    const dsecOrders = sortByDesc(response.results);
    const firstPrice = dsecOrders[0].offer.displayPrice.amount;
    expect(firstPrice).toBe(535);
  });
});
