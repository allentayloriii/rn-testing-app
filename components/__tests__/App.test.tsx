import TabOneScreen from "@/app/(tabs)";
import { render } from "@testing-library/react-native";
import React from "react";

describe("General App Test", () => {
  test("Renders Tab 1 correctly", () => {
    const { toJSON } = render(<TabOneScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
