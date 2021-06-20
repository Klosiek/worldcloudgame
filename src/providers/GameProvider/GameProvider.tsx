import { useState } from "react";
import { createContext } from "react";
import * as Types from "./GameProvider.types";

export const GameContext = createContext<Types.IGameContext | null>(null);

const GameProvider = ({ children }: Types.Props) => {
  const [userName, setUserName] = useState<string>("");
  return (
    <GameContext.Provider value={{ userName, setUserName }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
