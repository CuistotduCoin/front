import React from "react";
import { Subscribe } from "unstated";
import { AppContainer } from "../../components/App";
import AccountForm from "./AccountForm";

// tslint:disable-next-line
const AccountFormContainer: React.SFC<{}> = (props) => (
  <Subscribe to={[AppContainer]}>
    {(app: any) => (
      // @ts-ignore
      <AccountForm
        currentGourmet={app.state.currentGourmet}
        openSnackbar={app.openSnackbar}
        setCurrentGourmet={app.setCurrentGourmet}
        {...props}
      />
    )}
  </Subscribe>
);

export default AccountFormContainer;
