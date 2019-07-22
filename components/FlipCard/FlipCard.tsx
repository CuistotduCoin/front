import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";

// https://codepen.io/ArashRasteh/pen/QmgeLL
const styles = (theme: Theme) => ({
  container: {
    backgroundColor: "transparent",
    width: 360,
    height: 280,
    perspective: '1000px'
  },
  flipper: {
    width: "100%",
    height: "100%",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    "&:hover": {
      transform: "rotateY(180deg)"
    }
  },
  front: {
    transformStyle: "preserve-3d",
    backfaceVisibility: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  back: {
    transformStyle: "preserve-3d",
    backfaceVisibility: 'hidden',
    position: 'absolute',
    transform: "rotateY(-180deg)",
    width: '100%',
    height: '100%',
  }
});

export interface IFlipCardProps {
  classes?: any;
  front: any;
  back: any;
}

export class FlipCard extends React.Component<IFlipCardProps, {}> {
  public render() {
    const { classes, front, back } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.flipper}>
          <div className={classes.front}>
            {front}
          </div>
          <div className={classes.back}>
            {back}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles as any)(FlipCard as any) as any;