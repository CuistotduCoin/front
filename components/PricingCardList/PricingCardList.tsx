import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Link from "../Link";

const styles = (theme: Theme) => ({
  card: {
    height: "100%"
  },
  cardGrid: {
    padding: 10
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main
  },
  cardPricing: {
    marginBottom: theme.spacing(2)
  },
  link: {
    width: "100%"
  }
});

interface IPricingCardListProps {
  classes?: any;
  pricing: any;
  href: any;
}

export class PricingCardList extends React.Component<IPricingCardListProps, {}> {
  public render() {
    const { classes, pricing, href } = this.props;

    return (
      <Grid container justify="space-around">
        {pricing.map(pricing => (
          <Grid item key={pricing.title} xs={12} md={6} lg={4} className={classes.cardGrid}>
            <Card className={classes.card}>
              <CardActionArea component="a" href={href} target="_blank" rel="noreferrer noopener" className={classes.card}>
                <Grid container direction="column" justify="space-between" className={classes.card}>
                  <div>
                    <CardHeader
                      title={pricing.title}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <Grid container justify="center" direction="column">
                        <Typography variant="caption" align="center">
                          à partir de
                      </Typography>
                        <Typography component="h2" variant="h3" color="textPrimary" className={classes.cardPricing} align="center">
                          {pricing.price}€
                      </Typography>
                        {pricing.description.map(line => (
                          <Typography variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </Grid>
                    </CardContent>
                  </div>
                  <CardActions>
                    <Button fullWidth color="primary">
                      {pricing.buttonText}
                    </Button>
                  </CardActions>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles as any)(PricingCardList as any) as any;