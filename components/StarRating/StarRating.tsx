import { Theme, withStyles } from "@material-ui/core/styles";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import StarHalf from "@material-ui/icons/StarHalf";
import React from "react";

const styles = (theme: Theme) => ({});

export interface IStarRating {
  rating: any;
}

export class StarRating extends React.Component<IStarRating, {}> {
  public render() {
    const maxRating = Array(5).fill(null);

    const arrayStar = maxRating.map((el, idx) => {
      if (this.props.rating > idx) {
        if (this.props.rating > idx + 0.5) {
          return <Star color="primary" key={idx} />;
        }
        return <StarHalf color="primary" key={idx} />;
      }
      return <StarBorder color="primary" key={idx} />;
    });
    return <div>{arrayStar}</div>;
  }
}

export default withStyles(styles as any)(StarRating as any) as any;
