import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";

const styles = (theme: Theme) => ({
  cover: {
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 400
  }
});

export interface ICoverProps {
  classes?: any;
  imageURL: string;
}

export class Cover extends React.Component<ICoverProps, {}> {
  private innerBackground = {
    backgroundImage: `url(${this.props.imageURL})`
  };

  public render() {
    const { classes } = this.props;

    return <div className={classes.cover} style={this.innerBackground} />;
  }
}

export default withStyles(styles as any)(Cover as any) as any;
