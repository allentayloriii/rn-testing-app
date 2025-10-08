import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCartSum, loadCart, storeCart } from "../cart";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
}));

const mockAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe("Cart", () => {
  describe("Cart", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("getCartSum returns correct sum", () => {
      const items = [
        { id: 1, price: 10 },
        { id: 2, price: 20 },
        { id: 3, price: 30 },
      ];
      const sum = getCartSum(items);
      expect(sum).toBe(60);
    });

    test("storeCart stores items in AsyncStorage", async () => {
      const items = [
        { id: 1, price: 10 },
        { id: 2, price: 20 },
      ];

      const key = "cart";
      await storeCart(items);
      expect(mockAsyncStorage.setItem).toHaveBeenCalledTimes(1);
      expect(mockAsyncStorage.setItem).toHaveBeenCalledWith(
        key,
        JSON.stringify(items)
      );
    });

    test("loadCart returns parsed items from AsyncStorage", async () => {
      const items = [
        { id: 1, price: 10 },
        { id: 2, price: 20 },
      ];

      mockAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(items));
      const result = await loadCart();

      expect(mockAsyncStorage.getItem).toHaveBeenCalled();
      expect(result).toEqual(items);
    });
  });
});
