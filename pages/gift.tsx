import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import Layout from "../components/Layout";
import components from "../content/components";
// @ts-ignore
import Content from "../content/gift.mdx";

const styles = (theme: Theme) => ({
  button: {
    margin: 18,
  },
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing(3)
  }
});

interface IGiftProps {
  classes?: any;
}

export class Gift extends React.Component<IGiftProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout valueProposition="Offrez un moment culinaire authentique et convivial à vos proches avec notre carte cadeau, valable 1 an pour tous nos ateliers Cuistot du Coin">
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
        >
          <Content components={components} />
          <Button
            variant="contained"
            color="secondary"
            href="https://cuistotducoin.typeform.com/to/nPpUDU"
            target="_blank"
            className={classes.button}
            size="large"
          >
            Offrir ma carte cadeau
          </Button>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(Gift as any) as any;
