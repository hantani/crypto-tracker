import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coins></Coins>
        </Route>
        <Route path="/">
          <Coins></Coins>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
