import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";
import React from "react";
import components from "../../content/components";
// @ts-ignore
import Content from "../../content/team.mdx";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  }
});

interface ITeamProps {
  classes?: any;
}

export class Team extends React.Component<ITeamProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout valueProposition="Qui sommes-nous ? l'équipe de Cuistot du Coin">
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

export default withStyles(styles as any)(Team as any) as any;
