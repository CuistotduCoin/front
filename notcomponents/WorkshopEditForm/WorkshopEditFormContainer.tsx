import React from "react";
import { Subscribe } from "unstated";
import { AppContainer } from "../../components/App";
import WorkshopEditForm from "./WorkshopEditForm";

interface IWorkshopEditFormContainerProps {
  workshopId: string;
}

// tslint:disable-next-line
const WorkshopEditFormContainer: React.SFC<IWorkshopEditFormContainerProps> = props => (
  <Subscribe to={[AppContainer]}>
    {(app: any) => (
      // @ts-ignore
      <WorkshopEditForm
        {...props}
        currentGourmet={app.state.currentGourmet}
        openSnackbar={app.openSnackbar}
      />
    )}
  </Subscribe>
);

export default WorkshopEditFormContainer;
