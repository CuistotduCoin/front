import Auth from "@aws-amplify/auth";
import Router, { withRouter } from "next/router";
import React, { Component } from "react";
import Loading from "../../components/Loading";

interface IWithAuthDecoratorProps {
  router: any;
  component: any;
  isLoggedIn: boolean;
  currentGourmet: object;
  setReferer(url: string);
}

class WithAuthDecorator extends Component<IWithAuthDecoratorProps> {
  public componentDidMount() {
    const { isLoggedIn, setReferer, router } = this.props;

    const redirectToLogin = () => {
      setReferer(router.asPath);
      Router.replace("/login");
    };

    if (!isLoggedIn) {
      Auth.currentAuthenticatedUser()
        .then(user => {
          console.log(`Authenticated as ${user.username}`);
          if (user.username === "guest") {
            redirectToLogin();
          } // else delegate to App
        })
        .catch(err => redirectToLogin());
    }
  }

  public render() {
    const { component, isLoggedIn, currentGourmet, setReferer, router, ...props } = this.props;

    if (isLoggedIn) {
      if (!currentGourmet) {
        return <Loading />;
      }

      return React.createElement(component, props);
    }

    return null;
  }
}

export default withRouter(WithAuthDecorator);