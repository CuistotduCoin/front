import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import WorkshopCard from "../WorkshopCard";

const styles = (theme: Theme) => ({
  card: {
    padding: 10
  },
  grid: {
    margin: "0px auto",
    maxWidth: 1300,
    paddingBottom: 24,
    paddingTop: 12
  }
});

export interface IWorkshopCardListProps {
  classes?: any;
  workshops: any;
}

export class WorkshopCardList extends React.Component<
  IWorkshopCardListProps,
  {}
> {
  public render() {
    const { classes, workshops } = this.props;

    return (
      <Grid container justify="space-around" className={classes.grid}>
        {workshops.map((workshop, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <Grid container justify="center" className={classes.card}>
              <WorkshopCard {...workshop} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles as any)(WorkshopCardList as any) as any;
