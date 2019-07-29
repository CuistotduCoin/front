import Router from "next/router";
import React from "react";

const redirectToNotFound = () => Router.replace("/not-found", "/404");

// tslint:disable-next-line: variable-name
const withRedirect = (ComposedComponent) =>
  // @ts-ignore
  (React.FunctionComponent = props => (
    <ComposedComponent {...props} redirectToNotFound={redirectToNotFound} />
  ));

export default withRedirect;
