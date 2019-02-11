import Router from 'next/router';
import React from "react";

const redirectToNotFound = () => Router.replace('/not-found', '/404');

// tslint:disable-next-line
const withRedirect = (ComposedComponent) => (
  React.SFC = (props) => (
    <ComposedComponent
      {...props}
      redirectToNotFound={redirectToNotFound}
    />
  )
);

export default withRedirect;
