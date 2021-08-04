import { useState } from "react";
import { createContext } from "react";
import * as Types from "./GameProvider.types";

export const GameContext = createContext<Types.IGameContext | null>(null);

const GameProvider = ({ children }: Types.Props) => {
  const [userName, setUserName] = useState<string>("");
  const [userPicks, setUserPicks] = useState<string[]>([]);
  const [userPoints, setUserPoints] = useState<number>(0);
  return (
    <GameContext.Provider
      value={{
        userName,
        setUserName,
        userPicks,
        setUserPicks,
        userPoints,
        setUserPoints,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
