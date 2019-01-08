import * as React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import { meQuery } from "src/graphql/queries/me";
import { MeQuery } from "src/schemaTypes";
import { HeaderButton } from "src/ui/HeaderButton";

export class Header extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#rgb(255, 254, 252)",
          display: "flex",
          justifyContent: "space-around",
          padding: 10,
          alignItems: "center"
        }}
      >
        <Link to="/">
          <HeaderButton style={{ fontSize: 24 }}>Stripe Example</HeaderButton>
        </Link>
        <Query<MeQuery> query={meQuery}>
          {({ data, loading }) => {
            if (loading || !data) {
              return null;
            }

            if (!data.me) {
              return (
                <div>
                  <Link to="/login">
                    <HeaderButton>Login</HeaderButton>
                  </Link>
                  <Link to="/register">
                    <HeaderButton>Register</HeaderButton>
                  </Link>
                </div>
              );
            }

            return (
              <div>
                <Link to="/account">Account</Link>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
