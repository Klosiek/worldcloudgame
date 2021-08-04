import useGameContext from "hooks/useGameContext";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";
import * as Styles from "./ResultPage.styles";

const ResultPage = () => {
  const history = useHistory();
  const { userName, userPoints } = useGameContext();

  useEffect(() => {
    if (!userName) {
      history.push(RoutesEnum.HomePage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styles.Container>
      <Styles.Header>{`Congratulations, ${userName}!`}</Styles.Header>
      <Styles.Header>Your score:</Styles.Header>
      <Styles.Result>{`${userPoints} points`}</Styles.Result>
    </Styles.Container>
  );
};

export default ResultPage;
