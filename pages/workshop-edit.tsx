import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "next/router";
import React from "react";
import { compose } from "recompose";
import Layout from "../../components/Layout";
import WorkshopEditForm from "../../components/WorkshopEditForm";
import { withAuth, withData } from '../../decorators';

const styles = () => ({
  container: {
    textAlign: "center"
  }
});

interface IWorkshopEditProps {
  classes: any;
  router: any;
}

// tslint:disable-next-line
const WorkshopEdit: React.SFC<IWorkshopEditProps> = ({ classes, router }) => (
  <Layout className={classes.container}>
    <WorkshopEditForm workshopId={router.query.id} />
  </Layout>
);

const enhance = compose(
  withData,
  withAuth,
  withRouter,
  withStyles(styles as any),
);

export default enhance(WorkshopEdit);
