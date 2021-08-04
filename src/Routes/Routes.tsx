import { Suspense, lazy } from "react";
import LoadingScreen from "components/LoadingScreen";
import { Route, Switch } from "react-router-dom";
import { RoutesEnum } from "shared/types";
const Routes = () => {
  const HomePage = lazy(() => import("pages/HomePage"));
  const GameBoard = lazy(() => import("pages/GameBoard"));
  const ResultPage = lazy(() => import("pages/ResultPage"));
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route exact path={RoutesEnum.HomePage} component={HomePage} />
        <Route exact path={RoutesEnum.GameBoard} component={GameBoard} />
        <Route exact path={RoutesEnum.ResultPage} component={ResultPage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
