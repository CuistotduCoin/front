import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";


const styles = (theme: Theme) => ({
  padding: {
    padding: theme.spacing.unit * 2
  },
});

interface IThreeStepsProps {
  classes?: any;
  steps: any;
}

export class ThreeSteps extends React.Component<IThreeStepsProps, {}> {
  public render() {
    const { classes, steps } = this.props;

    return (
      <>
        {
          steps.map((step, key) => (
            <Grid item xs={12} sm={4} key={key}>
              <Grid
                container
                justify="space-between"
                alignItems="flex-start"
                direction="column"
                className={classes.padding}
              >
                <Grid container direction="row">
                  {step.icon}
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                  >
                    {step.title}
                  </Typography>
                </Grid>
                <Typography variant="body1" align="justify">
                  {step.content}
                </Typography>
              </Grid>
            </Grid>
          ))
        }
      </>
    );
  }
}

export default withStyles(styles as any)(ThreeSteps as any) as any;