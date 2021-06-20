import { render } from "@testing-library/react";
import Header from "./Header";

it("Should render with no errors", () => {
  render(<Header size={24}>test</Header>);
});
