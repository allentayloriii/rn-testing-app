import TabOneScreen from "@/app/(tabs)";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("<TabOneScreen />", () => {
  test("shows Galaxies Feed title", () => {
    const { getByText } = render(<TabOneScreen />);
    expect(getByText("Galaxies Feed")).toBeTruthy();
  });

  test("shows Galaxies Feed title v2", () => {
    render(<TabOneScreen />);
    const label = screen.getByText("Galaxies Feed");
    expect(label).toBeTruthy();
  });

  test("Shows the logo", () => {
    render(<TabOneScreen />);
    const logo = screen.getByRole("img", { name: "logo" });
    expect(logo.props.source.uri).toBe(
      "https://galaxies.dev/img/logos/logo--blue.png"
    );
  });

  test("Shows the separator", () => {
    render(<TabOneScreen />);
    const separator = screen.getByTestId("separator");
    expect(separator).toBeTruthy();
  });

  test("Shows the search input", () => {
    render(<TabOneScreen />);
    const search = "My search string";
    fireEvent.changeText(
      screen.getByPlaceholderText("Search galaxies"),
      search
    );

    expect(screen.getByDisplayValue(search)).toBeTruthy();
  });
});
