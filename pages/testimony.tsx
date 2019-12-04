import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../components/Layout";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing(3)
  }
});

interface ITestimonyProps {
  classes?: any;
}

class Testimony extends React.Component<ITestimonyProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          spacing={2}
          className={classes.grid}
        >
          sdf
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(Testimony as any) as any;
