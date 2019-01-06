import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Account } from "./modules/account/Account";
import { PaidUsers } from "./modules/account/PaidUsers";
import { LoginView } from "./modules/user/LoginView";
import { RegisterView } from "./modules/user/RegisterView";
import { Header } from "./shared/Header";

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route
            path="/"
            render={() => (
              <React.Fragment>
                <Header />
                <div>
                  <Route path="/register" component={RegisterView} />
                  <Route path="/account" component={Account} />
                  <Route path="/paid-users" component={PaidUsers} />
                  <Route
                    exact={true}
                    path="/"
                    render={() => <div>homepage</div>}
                  />
                </div>
              </React.Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
