import * as Styles from "./HomePage.styles";

const HomePage = () => {
  return (
    <Styles.Container>
      <Styles.Header size="32px">Wordcloud game</Styles.Header>
      <Styles.Input placeholder="Enter your nickname here..." />
      <Styles.Button>play</Styles.Button>
    </Styles.Container>
  );
};

export default HomePage;
