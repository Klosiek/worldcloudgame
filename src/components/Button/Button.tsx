import * as Types from "./Button.types";
import * as Styles from "./Button.styles";

const Button = ({ children }: Types.Props) => {
  return <Styles.Button>{children}</Styles.Button>;
};

export default Button;
