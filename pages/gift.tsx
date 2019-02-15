import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";
import React from "react";
import components from "../../content/components";
// @ts-ignore
import Content from "../../content/gift.mdx";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  }
});

interface IGiftProps {
  classes?: any;
}

export class Gift extends React.Component<IGiftProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout valueProposition="Concoctez avec nous une expérience culinaire authentique et gourmande pour vos salariés !">
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

export default withStyles(styles as any)(Gift as any) as any;
