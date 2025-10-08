import { getCartSum } from "../cart";

describe("Cart", () => {
  test("getCartSum returns correct sum", () => {
    const items = [
      { id: 1, price: 10 },
      { id: 2, price: 20 },
      { id: 3, price: 30 },
    ];
    const sum = getCartSum(items);
    expect(sum).toBe(60);
  });
});
