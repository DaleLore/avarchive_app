import React from "react";
import { Switch, Route } from "react-router-dom";
import Pages from "./Pages"


const Routes = (props) => {
  return (
    <Switch>
      <Route path="/login" component={Pages.Login} />
      <Route path="/signup" component={Pages.Signup} />
      <Route path="/profile" component={Pages.Profile} />
      <Route path="/csv" component={Pages.Csv} />
      <Route exact path="/" render={(routerProps) => <Pages.Home />} />
    </Switch>
  );
};

export default Routes;
