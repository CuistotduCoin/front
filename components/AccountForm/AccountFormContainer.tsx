import React from "react";
import { Subscribe } from "unstated";
import { AppContainer } from "../../components/App";
import AccountForm from "./AccountForm";

// tslint:disable-next-line
const AccountFormContainer: React.SFC<{}> = (props) => (
  <Subscribe to={[AppContainer]}>
    {(app: any) => (
      <AccountForm
        {...props}
        currentGourmet={app.state.currentGourmet}
        openSnackbar={app.openSnackbar}
        setCurrentGourmet={app.setCurrentGourmet}
      />
    )}
  </Subscribe>
);

export default AccountFormContainer;
