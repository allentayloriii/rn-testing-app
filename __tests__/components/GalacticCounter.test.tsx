import { render, screen, userEvent } from "@testing-library/react-native";
import GalacticCounter from "../GalacticCounter";

describe("Galactic Counter", () => {
  test("Updates the counter", async () => {
    render(<GalacticCounter />);
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    jest.useFakeTimers();

    const add = screen.getByText("Add");
    const subtract = screen.getByText("Decrease");

    await user.press(add);
    await user.press(add);

    expect(screen.getByText("Stars: 2")).toBeTruthy();

    await user.press(subtract);
    await user.press(subtract);
    await user.press(subtract);

    expect(screen.getByText("Stars: -1")).toBeTruthy();

    jest.useRealTimers();
  });
});
