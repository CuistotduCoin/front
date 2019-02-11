import React from "react";
import { Provider, Subscribe } from "unstated";
// import UNSTATED from "unstated-debug";
import { App, AppContainer } from ".";
import "../../shared/auth";

// if (process.env.NODE_ENV === "development" && typeof window !== 'undefined') {
//   UNSTATED.logStateChanges = true;
//   // @ts-ignore
//   window.LOG_LEVEL = "DEBUG";
// }

export class ProvidedApp extends React.Component {
  public appContainer: any;

  public constructor(props) {
    super(props);
    this.appContainer = new AppContainer();
  }

  public render() {
    const { children } = this.props;
    return (
      <Provider inject={[this.appContainer]}>
        <Subscribe to={[AppContainer]}>
          {(app: any) => (
            <App
              isLoggedIn={app.state.isLoggedIn}
              referer={app.state.referer}
              currentGourmet={app.state.currentGourmet}
              openSnackbar={app.openSnackbar}
              setCurrentGourmet={app.setCurrentGourmet}
              setReferer={app.setReferer}
              logIn={app.logIn}
            >
              {children}
            </App>
          )}
        </Subscribe>
      </Provider>
    );
  }
}

export default ProvidedApp as any;
