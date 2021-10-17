import { printAddress } from "./formatter";

describe("printAddress()", () => {
  test("prints properly with array", () => {
    const input = ["street", "city"];
    const address = printAddress(input);
    expect(address).toBe("street, city");
  });

  test("prints properly with string", () => {
    const input = "sample address string";
    const address = printAddress(input);
    expect(address).toBe("sample address string");
  });
});

describe("showCancellationText()", () => {
  test("prints properly with array", () => {
    const input = ["street", "city"];
    const address = printAddress(input);
    expect(address).toBe("street, city");
  });

  test("prints properly with string", () => {
    const input = "sample address string";
    const address = printAddress(input);
    expect(address).toBe("sample address string");
  });
});
