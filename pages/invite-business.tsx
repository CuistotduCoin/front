import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";
import React from "react";
import components from "../../content/components";
// @ts-ignore
import Content from "../../content/invite.mdx";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  }
});

interface IInviteBusinessProps {
  classes?: any;
}

export class InviteBusiness extends React.Component<IInviteBusinessProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout valueProposition="Invitez vos proches">
        <Grid
          container
          justify="space-around"
          alignItems="center"
          spacing={16}
          className={classes.grid}
        >
          <Content components={components} />
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(InviteBusiness as any) as any;
