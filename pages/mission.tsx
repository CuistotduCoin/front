import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../components/Layout";
import components from "../content/components";
// @ts-ignore
import Content from "../content/mission.mdx";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing.unit * 3
  }
});

interface IMissionProps {
  classes?: any;
}

export class Mission extends React.Component<IMissionProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout valueProposition="Nos mission à Cuistot du Coin">
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

export default withStyles(styles as any)(Mission as any) as any;
