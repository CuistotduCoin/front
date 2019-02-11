import { AppContainer } from "../../components/App";
import React from "react";
import { Subscribe } from "unstated";
import BecomeCookForm from "./BecomeCookForm";

// tslint:disable-next-line
const BecomeCookFormContainer: React.SFC<{}> = (props) => (
  <Subscribe to={[AppContainer]}>
    {(app: any) => (
      <BecomeCookForm
        {...props}
        currentGourmet={app.state.currentGourmet}
        openSnackbar={app.openSnackbar}
      />
    )}
  </Subscribe>
);

export default BecomeCookFormContainer;
