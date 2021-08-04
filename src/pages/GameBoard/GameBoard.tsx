import * as Styles from "./GameBoard.styles";
import * as SharedStyles from "shared/styles";
import * as response from "api/mock";
import useGameContext from "hooks/useGameContext";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";

const pickRandomGame = () => {
  const los = Math.floor(Math.random() * 3) + 1;
  switch (los) {
    case 1:
      return response.animals;
    case 2:
      return response.colors;
    case 3:
      return response.vehicles;
    default:
      return response.animals;
  }
};

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const { question, all_words, good_words } = pickRandomGame();

const GameBoard = () => {
  const { userName, userPicks, setUserPicks, setUserPoints } = useGameContext();
  const [isVisible, setIsVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!userName) {
      history.push(RoutesEnum.HomePage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countUserPoints = () => {
    const points = userPicks.filter((pick) => good_words.includes(pick));
    return points.length;
  };

  return (
    <Styles.Container>
      <SharedStyles.Header size={24}>
        {capitalizeFirstLetter(question)}
      </SharedStyles.Header>
      <Styles.Board>
        {all_words.map((word) => (
          <Styles.Cloud
            onClick={() => {
              !isVisible &&
                (userPicks.includes(word)
                  ? setUserPicks([...userPicks.filter((x) => x !== word)])
                  : setUserPicks([...userPicks, word]));
            }}
          >
            {isVisible ? (
              <Styles.Result isGood={good_words.includes(word)}>
                {isVisible &&
                  userPicks.includes(word) &&
                  (good_words.includes(word) ? "Good" : "Bad")}
              </Styles.Result>
            ) : (
              <div>{""}</div>
            )}

            <Styles.Word isChecked={userPicks.includes(word)}>
              {word}
            </Styles.Word>
          </Styles.Cloud>
        ))}
      </Styles.Board>
      {!isVisible ? (
        <SharedStyles.Button
          onClick={() => {
            setIsVisible(true);
            setUserPoints(countUserPoints());
          }}
        >
          check answers
        </SharedStyles.Button>
      ) : (
        <SharedStyles.Button
          onClick={() => history.push(RoutesEnum.ResultPage)}
        >
          finish game
        </SharedStyles.Button>
      )}
    </Styles.Container>
  );
};

export default GameBoard;
