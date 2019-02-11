import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../../components/Layout";
import components from "../../content/components";
// @ts-ignore
import Content from "../../content/testimony.mdx";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  }
});

interface ITestimonyProps {
  classes?: any;
}

export class Testimony extends React.Component<ITestimonyProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout valueProposition="Ils nous font confiance">
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

export default withStyles(styles as any)(Testimony as any) as any;
