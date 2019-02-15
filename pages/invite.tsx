import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";
import React from "react";
import components from "../../content/components";
// @ts-ignore
import Content from "../../content/invite.mdx";

const styles = (theme: Theme) => ({
  card: {
    width: 300
  },
  cardHeader: {
    background: "rgba(0, 0, 0, 0.4)",
    color: "fff",
    height: 40,
    marginTop: -72
  },
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  },
  media: {
    height: 135
  },
  title: { color: "white" }
});

interface IInviteProps {
  classes?: any;
}

export class Invite extends React.Component<IInviteProps, {}> {
  public render() {
    const { classes } = this.props;

    return (
      <Layout valueProposition="Invitez vos proches">
        <Grid
          container
          justify="space-around"
          alignItems="center"
          spacing={16}
          className={classes.grid}
        >
          <Content components={components} />
        </Grid>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          spacing={16}
          className={classes.grid}
        >
          <Grid item xs={12}>
            <Grid container justify="center">
              <a
                href="https://cuistotducoin.typeform.com/to/s9TN8K"
                target="_blank"
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image="https://static.cuistotducoin.com/img/business/buffet.jpg"
                    title="Invitez vos proches"
                  />
                  <CardHeader
                    className={classes.cardHeader}
                    title="Invitez vos proches"
                    classes={{
                      title: classes.title
                    }}
                  />
                  <CardContent className={classes.cardShortContent}>
                    <Typography component="p">
                      Invitez vos proches pour profiter de l'offre spéciale de
                      septembre !
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles as any)(Invite as any) as any;
