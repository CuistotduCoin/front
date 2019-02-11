import CircularProgress from "@material-ui/core/CircularProgress";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";

const styles = (theme: Theme) => ({
  loading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

interface ILoadingProps {
  classes?: any;
}

export class Loading extends React.Component<ILoadingProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }
}

export default withStyles(styles as any)(Loading as any) as any;
