import { Suspense, lazy } from "react";
import LoadingScreen from "components/LoadingScreen";
import { Route, Switch } from "react-router-dom";
import { RoutesEnum } from "shared/types";
const Routes = () => {
  const HomePage = lazy(() => import("pages/HomePage"));
  // const GameBoard = lazy(() => import("pages/GameBoard"));
  // const ScorePage = lazy(() => import("pages/ScorePage"));
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route exact path={RoutesEnum.HomePage} component={HomePage} />
        {/* <Route exact path={RoutesEnum.GameBoard} component={GameBoard} />
        <Route exact path={RoutesEnum.ScorePage} component={ScorePage} /> */}
      </Switch>
    </Suspense>
  );
};

export default Routes;
