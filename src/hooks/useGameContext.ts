import { GameContext } from "providers/GameProvider/GameProvider";
import { IGameContext } from "providers/GameProvider/GameProvider.types";
import { useContext } from "react";

const useGameContext = () => {
  const context = useContext(GameContext) as IGameContext;

  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider");
  }

  return context;
};

export default useGameContext;
