import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import StarRating from "../../components/StarRating";

const styles = (theme: Theme) => ({
  '@global': {
    ".slick-prev:before, .slick-next:before": {
      color: "black"
    }
  },
  cell: {
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: 8,
    cursor: "grab",
    padding: 20
  },
  container: {
    padding: 20
  },
  slider: {
    margin: "0px auto",
    paddingBottom: 75,
    width: "calc(100% - 120px)",
  },
  sliderImage: {
    height: 100,
    width: 100
  }
});

export interface ITestimonySlider {
  classes?: any;
  testimonies: any;
}

export class TestimonySlider extends React.Component<ITestimonySlider, {}> {

  public render() {

    const { classes, testimonies } = this.props;
    const sliderSettings = {
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ],
      slidesToScroll: 3,
      slidesToShow: 3
    };

    return (
      <Slider {...sliderSettings}>
        {testimonies.map((testimony, index) => (
          <Grid container={true} className={classes.container} key={index} >
            <Grid className={classes.cell}>
              <Typography variant="subtitle1">{testimony.name}</Typography>
              <Typography variant="subtitle2">{testimony.context}</Typography>
              <img
                src={testimony.image}
                alt={testimony.name}
                className={classes.sliderImage}
              />
              <Typography align="justify" variant="body1">{testimony.comment}</Typography>
              <StarRating rating={testimony.rating} />
            </Grid>
          </Grid>
        ))}
      </Slider>
    );
  }
}

export default withStyles(styles as any)(TestimonySlider as any) as any;
