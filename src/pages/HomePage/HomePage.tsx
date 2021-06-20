import Header from "components/Header";
import Button from "components/Button";
import * as Styles from "./HomePage.styles";

const HomePage = () => {
  return (
    <Styles.Container>
      <Header size={32}>Wordcloud game</Header>
      <Styles.Input placeholder="Enter your nickname here..." />
      <Button>play</Button>
    </Styles.Container>
  );
};

export default HomePage;
