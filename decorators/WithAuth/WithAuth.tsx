import React from 'react';
import { Subscribe } from "unstated";
import { AppContainer } from "../../components/App";
import WithAuthDecorator from './WithAuthDecorator';

// tslint:disable-next-line
const withAuth = (ComposedComponent) => (
  React.SFC = (props) => (
    <Subscribe to={[AppContainer]}>
      {(app: any) => (
        <WithAuthDecorator
          {...props}
          component={ComposedComponent}
          isLoggedIn={app.state.isLoggedIn}
          currentGourmet={app.state.currentGourmet}
          setReferer={app.setReferer}
        />
      )}
    </Subscribe>
  )
)

export default withAuth;