import { createContext } from "react";
import * as Types from "./GameProvider.types";

export const GameContext = createContext<Types.IGameContext | null>(null);

const GameProvider = ({ children }: Types.Props) => {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};

export default GameProvider;
