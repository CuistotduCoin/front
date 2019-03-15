import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../components/Layout";
import components from "../content/components";
// @ts-ignore
import Content from "../content/invite-business.mdx";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing(3)
  }
});

interface IInviteBusinessProps {
  classes?: any;
}

export class InviteBusiness extends React.Component<IInviteBusinessProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout valueProposition="Invitez votre entreprise à découvrir des saveurs originales !">
        <Grid
          container
          justify="space-around"
          alignItems="center"
          spacing={2}
          className={classes.grid}
        >
          <Content components={components} />
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(InviteBusiness as any) as any;
