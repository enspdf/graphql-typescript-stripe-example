import { gql } from "apollo-boost";
import * as React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { RegisterMutation, RegisterMutationVariables } from "src/schemaTypes";
import { Form } from "./Form";

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

export class RegisterView extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={registerMutation}
      >
        {mutate => (
          <Form
            buttonText="Register"
            onSubmit={async data => {
              const response = await mutate({
                variables: data
              });
              console.log(response);
              this.props.history.push("/login");
            }}
          />
        )}
      </Mutation>
    );
  }
}
