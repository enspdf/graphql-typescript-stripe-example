import * as React from "react";
import { Query } from "react-apollo";
import { Redirect } from "react-router-dom";
import { meQuery } from "src/graphql/queries/me";
import { MeQuery } from "src/schemaTypes";
import SubscribeUser from "./SubscribeUser";

export class Account extends React.PureComponent {
  render() {
    return (
      <Query<MeQuery> query={meQuery}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }

          if (!data) {
            return <div>data is undefined</div>;
          }

          if (!data.me) {
            return <Redirect to="/login" />;
          }

          if (data.me.type === "free-trial") {
            return <SubscribeUser />;
          }

          return <Redirect to="/paid-users" />;
        }}
      </Query>
    );
  }
}
