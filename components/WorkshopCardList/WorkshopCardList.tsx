import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import Banner from "../Banner";
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
  ads: any;
}

export class WorkshopCardList extends React.Component<IWorkshopCardListProps, {}> {
  public render() {
    const { classes, workshops, ads } = this.props;

    return (
      <Grid container justify="space-around" className={classes.grid}>
        {workshops.map((workshop, index: number) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container justify="center" className={classes.card}>
                <WorkshopCard {...workshop} />
              </Grid>
            </Grid>
            {index === 2 && ads[0] ? <Banner title={ads[0].title} subtitle={ads[0].subtitle} /> : <></>}
            {index === 5 && ads[1] ? <Banner title={ads[1].title} subtitle={ads[1].subtitle} /> : <></>}
            {index === 8 && ads[2] ? <Banner title={ads[2].title} subtitle={ads[2].subtitle} /> : <></>}
          </React.Fragment>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles as any)(WorkshopCardList as any) as any;
