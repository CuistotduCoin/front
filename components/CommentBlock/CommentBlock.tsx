import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ProfileImage from "../../components/ProfileImage";
import { distanceInWordsToNow } from "../../shared/date-utils";
import { StarRating } from "../StarRating/StarRating";

interface ICommentBlock {
  classes?: any;
  authorIdentityId: string;
  authorImageKey?: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export class CommentBlock extends React.Component<ICommentBlock, {}> {
  public render() {
    const { authorIdentityId, authorImageKey, name, rating, comment, date } = this.props;
    return (
      <>
        <Grid container spacing={16}>
          <Grid item>
            <ProfileImage
              imageKey={authorImageKey}
              identityId={authorIdentityId}
              alt={name}
              size="small"
            />
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <Grid container spacing={8} direction="column">
              <Grid item container justify="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="subtitle1" component="span">
                    {name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption" component="span">
                    {distanceInWordsToNow(date)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography>{comment}</Typography>
              </Grid>
              <Grid item>
                <StarRating rating={rating} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default CommentBlock;
