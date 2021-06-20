import * as Styles from "./HomePage.styles";
import * as SharedStyles from "shared/styles";
import useGameContext from "hooks/useGameContext";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";

const HomePage = () => {
  const { userName, setUserName } = useGameContext();
  const history = useHistory();
  return (
    <Styles.Container>
      <SharedStyles.Header size={32}>Wordcloud game</SharedStyles.Header>
      <Styles.Input
        type="text"
        value={userName}
        placeholder="Enter your nickname here..."
        onChange={(e) => setUserName(e.currentTarget.value)}
      />
      <SharedStyles.Button
        disabled={!userName}
        onClick={() => history.push(RoutesEnum.GameBoard)}
      >
        play
      </SharedStyles.Button>
    </Styles.Container>
  );
};

export default HomePage;
