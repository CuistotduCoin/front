import React from "react";
import { compose } from "recompose";
import { Subscribe } from "unstated";
import { AppContainer } from "../../components/App";
import { withAuth, withData } from "../../decorators";
import WorkshopNew from "./WorkshopNew";

// tslint:disable-next-line
const WorkshopNewContainer: React.SFC<{}> = props => (
  <Subscribe to={[AppContainer]}>
    {(app: any) => (
      <WorkshopNew
        {...props}
        openSnackbar={app.openSnackbar}
        currentGourmet={app.state.currentGourmet}
      />
    )}
  </Subscribe>
);

const enhance = compose(
  withData,
  withAuth,
);

export default enhance(WorkshopNewContainer);
