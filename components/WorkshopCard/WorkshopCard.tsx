import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import green from "@material-ui/core/colors/green";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Face from "mdi-material-ui/Face";
import Place from "mdi-material-ui/MapMarker";
import HourglassFull from "mdi-material-ui/TimerSandFull";
import React from "react";
import Link from "../Link";
import StarRating from "../StarRating";

const styles = (theme: Theme) => ({
  avatar: {
    backgroundColor: green[500],
    border: "4px solid white",
    height: 60,
    width: 60
  },
  bottomContentCard: {
    marginTop: -40,
    minHeight: 136
  },
  bottomContentCardItem: {
    paddingTop: 12
  },
  card: {
    width: 360
  },
  cardContent: {
    "&:last-child": { padding: 0 },
    marginTop: -25,
    padding: 0,
  },
  cardHeaderUp: {
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    marginBottom: -64
  },
  chip: {
    marginRight: 0
  },
  icon: {
    color: green[900],
    height: 15
  },
  link: {
    color: theme.palette.text.primary
  },
  media: {
    height: 194
  },
  nameCook: {
    color: "white",
    marginTop: 5,
    textShadow: "1px 1px #585A5A"
  },
  ratingNumber: {
    color: "white",
    textShadow: "1px 1px #585A5A"
  }
});

export interface IWorkshopCardProps {
  classes?: any;
  price: number;
  name: string;
  date: string;
  duration: number;
  image: string;
  imageCook: string;
  nameCook: string;
  rating?: number;
  ratingNumber?: number;
  availableSeat: number;
  spot: string;
  totalSeat: number;
  totalDate?: number;
  type: string;
  typeform: string;
}

export class WorkshopCard extends React.Component<IWorkshopCardProps, {}> {
  public static defaultProps = { avatar: <Face /> };

  public render() {
    const { classes } = this.props;

    let avatar;
    if (this.props.imageCook) {
      avatar = (
        <Avatar
          className={classes.avatar}
          alt={this.props.nameCook}
          src={this.props.imageCook}
        />
      );
    } else {
      avatar = (
        <Avatar className={classes.avatar}>
          {this.props.nameCook.charAt(0)}
        </Avatar>
      );
    }

    let tag: string;
    if (this.props.availableSeat < 1) {
      tag = "complet";
    } else if (this.props.price === 0) {
      tag = "gratuit";
    } else if (typeof this.props.price === 'undefined') {
      tag = "";
    } else {
      tag = `${this.props.price} €`;
    }

    function container(props, children) {
      return (
        <Link className={classes.link} href={props.typeform} target="_blank">
          {children}
        </Link>
      );
    }

    const cardComp = (
      <Card className={classes.card}>
        {tag && (
          <CardHeader
            className={classes.cardHeaderUp}
            avatar={<Chip label={tag} />}
            classes={{ avatar: classes.chip }}
          />
        )}
        <CardMedia
          className={classes.media}
          image={this.props.image}
          title={this.props.name}
        />
        <CardContent className={classes.cardContent}>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container>
                <Grid item>{avatar}</Grid>
                {this.props.nameCook && (
                  <Grid item>
                    <Typography className={classes.nameCook} variant="body1">
                      Rencontrez {this.props.nameCook}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
            {this.props.rating && (
              <Grid item>
                <Grid container justify="flex-end">
                  <StarRating rating={this.props.rating} />
                  {this.props.ratingNumber && (
                    <Typography
                      variant="caption"
                      className={classes.ratingNumber}
                    >
                      ({this.props.ratingNumber})
                      </Typography>
                  )}
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid
            container
            alignItems="center"
            direction="column"
            className={classes.bottomContentCard}
          >
            <Grid item className={classes.bottomContentCardItem}>
              <Chip label={this.props.type} className={classes.chip} />
            </Grid>
            <Grid item >
              <Typography align="center" variant="h6">
                {this.props.name}
              </Typography>
            </Grid>
            <Grid item >
              <Typography variant="subtitle1">{this.props.date}</Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid item xs={6}>
              <Grid container justify="center">
                <Place className={classes.icon} />
                <Typography variant="caption">{this.props.spot}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center">
                {this.props.duration && (
                  <>
                    <HourglassFull className={classes.icon} />
                    <Typography variant="caption">
                      {this.props.duration}h
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );

    return container(this.props, cardComp);
  }
}

export default withStyles(styles as any)(WorkshopCard as any) as any;
