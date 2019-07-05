import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = (theme: Theme) => ({
  banner: {
    background: "#f6f6f6",
    height: "80px",
    margin: theme.spacing(2),
    overflow: "hidden",
    width: "100%"
  },
  overflow: {
    content: "",
    overflow: "hidden",
    '&:before': {
      content: '""',
      position: 'absolute',
      borderTop: 0,
      borderBottom: "80px solid transparent",
      borderLeft: "60px solid #f6f6f6",
    }
  },
  cover: {
    height: "100%",
    width: "400px"
  },
  text: {
    padding: theme.spacing(2),
    marginLeft: 50
  }
});

export interface IBannerProps {
  classes?: any;
  title: string;
  subtitle: string;
  imageURL?: string;
}

export class Banner extends React.Component<IBannerProps, {}> {
  private innerBackground = {
    backgroundImage: `url(${this.props.imageURL})`
  };

  public render() {
    const { classes, title, subtitle } = this.props;

    return <Grid container
      justify="space-between"
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
      {this.props.imageURL &&
        <Grid item className={classes.overflow}>
          <img className={classes.cover} style={this.innerBackground} />
        </Grid>
      }
    </Grid >;
  }
}

export default withStyles(styles as any)(Banner as any) as any;
