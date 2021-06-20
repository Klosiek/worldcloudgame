import { render } from "@testing-library/react";
import Button from "./Button";

it("Should render with no errors", () => {
  render(<Button>test</Button>);
});
