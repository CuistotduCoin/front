import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";


const styles = (theme: Theme) => ({
  padding: {
    padding: theme.spacing(2)
  },
});

interface IStepsProps {
  classes?: any;
  steps: any;
  columns: any;
}

export class Steps extends React.Component<IStepsProps, {}> {
  public render() {
    const { classes, steps, columns } = this.props;
    let sm = 4

    if (columns === 4) {
      sm = 3;
    }

    if (columns === 6) {
      sm = 2;
    }

    return (
      <>
        {
          steps.map((step, key) => (
            <Grid item xs={12} sm={sm} key={key}>
              <Grid
                container
                justify="space-between"
                alignItems="flex-start"
                direction="column"
                className={classes.padding}
              >
                {step.icon}
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                >
                  {step.title}
                </Typography>
                {step.content &&
                  <Typography variant="body1" align="justify">
                    {step.content}
                  </Typography>
                }
              </Grid>
            </Grid>
          ))
        }
      </>
    );
  }
}

export default withStyles(styles as any)(Steps as any) as any;