import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = (theme: Theme) => ({
  banner: {
    width: "100%",
    background: "#f6f6f6",
    margin: theme.spacing.unit
  },
  text: {
    marginLeft: 50
  }
});

export interface IBannerProps {
  classes?: any;
  title: string;
  subtitle: string;
}

export class Banner extends React.Component<IBannerProps, {}> {
  public render() {
    const { classes, title, subtitle } = this.props;

    return <Grid container
      justify="space-between"
      spacing={16}
      className={classes.banner}
    >
      <Grid item className={classes.text}>
        <Typography variant="h6" align="justify">
          {title}
        </Typography>
        <Typography variant="body1" align="justify">
          {subtitle}
        </Typography>
      </Grid>
    </Grid >;
  }
}

export default withStyles(styles as any)(Banner as any) as any;
