import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../components/Layout";
import components from "../content/components";
// @ts-ignore
import Content2 from "../content/terms-pro.mdx";
// @ts-ignore
import Content from "../content/terms.mdx";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing(3)
  }
});

interface ITermsProps {
  classes?: any;
}

class Terms extends React.Component<ITermsProps, {}> {
  public static getInitialProps = async () => ({
    static: 'not-static'
  });

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
          <Content components={components} />
          <Content2 components={components} />
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(Terms as any) as any;
