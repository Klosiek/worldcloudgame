import GlobalStylesProvider from "./GlobalStylesProvider";
import RouterProvider from "./RouterProvider";
import GameProvider from "./GameProvider";

const Providers = () => {
  return (
    <GameProvider>
      <GlobalStylesProvider />
      <RouterProvider />
    </GameProvider>
  );
};
export default Providers;
