import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = (theme: Theme) => ({
  backgroundImage: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    zIndex: -1
  },
  content: {
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.1)",
    display: "flex"
  },
  home: {
    color: "#fff",
    overflow: "hidden",
    position: "relative"
  },
  textHero: {
    marginTop: 100
  },
  typography: {
    textShadow: "1px 1px #585A5A"
  },
  video: {
    bottom: 0,
    left: "50%",
    minHeight: "100%",
    minWidth: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    transform: "translate(-50%, -25%);",
    zIndex: -1
  }
});

interface IHeroProps {
  classes?: any;
  height: number;
  videoURL: string;
  imageURL: string;
  valueProposition: string;
  description: string;
  children: any;
}

export class Hero extends React.Component<IHeroProps, {}> {
  public static defaultProps: Partial<IHeroProps> = {
    height: 500,
  };

  private innerBackground = {
    backgroundImage: `url(${this.props.imageURL})`
  };
  private innerHeight = {
    height: this.props.height
  };

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.home}>
        <div className={classes.content} style={this.innerHeight}>
          <Grid container direction="column" className={classes.textHero}>
            <Grid item>
              <Typography
                variant="h2"
                align="center"
                component="h1"
                color="inherit"
                className={classes.typography}
              >
                {this.props.valueProposition}
              </Typography>
              {this.props.description && (
                <Typography
                  variant="h5"
                  align="center"
                  component="p"
                  color="inherit"
                  className={classes.typography}
                >
                  {this.props.description}
                </Typography>
              )}
              <>
                {this.props.children}
              </>
            </Grid>
          </Grid>
        </div>

        <div className={classes.backgroundImage} style={this.innerBackground} />
        {this.props.videoURL &&
          <video
            className={classes.video}
            autoPlay
            muted
            loop
            poster={this.props.imageURL}
          >
            <source src={this.props.videoURL} type="video/mp4" />
          </video>
        }
      </div>
    );
  }
}

export default withStyles(styles as any)(Hero as any) as any;