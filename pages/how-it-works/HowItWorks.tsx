import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";
import React from "react";
import components from "../../content/components";
// @ts-ignore
import Content from "../../content/howitworks.mdx";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  }
});

interface IHowItWorksProps {
  classes?: any;
}

export class HowItWorks extends React.Component<IHowItWorksProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout valueProposition="Comment ça marche ?">
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

export default withStyles(styles as any)(HowItWorks as any) as any;
