import * as Types from "./Header.types";
import * as Styles from "./Header.styles";

const Header = ({ size, children }: Types.Props) => {
  return <Styles.Header size={size}>{children}</Styles.Header>;
};

export default Header;
