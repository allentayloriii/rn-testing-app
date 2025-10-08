import { getProducts } from "../api";

describe("Api", () => {
  test("getProducts returns 20 items", async () => {
    const products = await getProducts();
    expect(products).toHaveLength(20);
  });

  test("Rejects the promise", async () => {
    global.fetch = jest.fn(() => Promise.reject("API is down")) as jest.Mock;

    await expect(getProducts()).rejects.toMatch("API is down");
  });

  test("Calls the right endpoint", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
    } as any);

    await getProducts();
    expect(fetchMock).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });

  test("Returns the right data", async () => {
    const fakeProducts = [
      {
        id: 1,
        title: "Product 1",
        price: 10,
        description: "Desc 1",
        category: "Cat 1",
        image: "img1",
      },
      {
        id: 2,
        title: "Product 2",
        price: 20,
        description: "Desc 2",
        category: "Cat 2",
        image: "img2",
      },
    ];

    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(fakeProducts),
    } as any);

    const products = await getProducts();
    expect(products).toEqual(fakeProducts);
  });
});
