import { Divider, Modal } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import { Theme, withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import AccessTime from "@material-ui/icons/AccessTime";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import Kitchen from "@material-ui/icons/Kitchen";
import LocalDining from "@material-ui/icons/LocalDining";
import Lock from "@material-ui/icons/Lock";
import People from "@material-ui/icons/People";
import cx from 'classnames';
import get from "lodash.get";
import React from "react";
import { Query } from "react-apollo";
import Scroll from "react-scroll";
import Slider from "react-slick";
import Waypoint from "react-waypoint";
import { compose } from "recompose";
import BookForm from "../../components/BookForm";
import CommentBlock from "../../components/CommentBlock";
import Cover from "../../components/Cover";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import ProfileImage from "../../components/ProfileImage";
import S3Image from "../../components/S3Image";
import StarRating from "../../components/StarRating";
import { withData } from "../../decorators";
import { GetWorkshop } from "../../queries";
import { format } from "../../shared/date-utils";
import { formatName } from "../../shared/util";

const styles = (theme: Theme) => ({
  avatar: {
    backgroundColor: green[500],
    height: 80,
    width: 80
  },
  button: {
    margin: theme.spacing.unit
  },
  cancellation: {
    padding: theme.spacing.unit * 2
  },
  commentBlock: {
    padding: theme.spacing.unit * 2
  },
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  },
  img: {
    verticalAlign: "middle"
  },
  infoReservartion: {
    padding: theme.spacing.unit * 2
  },
  innerGrid: {
    paddingBottom: 24,
    paddingTop: 24
  },
  itemGrid: {
    paddingBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit
  },
  leftGrid: {
    padding: theme.spacing.unit * 2
  },
  paragraph: {
    padding: theme.spacing.unit * 2
  },
  popover: {
    pointerEvents: "none"
  },
  slider: {
    margin: "0px auto",
    maxWidth: 950,
    padding: theme.spacing.unit,
    width: "calc(100% - 120px)"
  },
  sliderImage: {
    margin: "0px auto",
    width: "100%"
  },
  sticky: {
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    zIndex: 10
  },
  tabs: {
    minWidth: 0
  },
  tile: {
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.5)",
    bottom: 0,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0
  },
  tileContainer: {
    display: "block",
    position: "relative",
    width: "100%"
  },
  workshopImage: {
    width: 200,
  }
});

interface IWorkshopProps {
  classes?: any;
  mainPhoto: string;
  rating?: number;
  ratingNumber?: number;
  eventType: string;
  cuisineType: string;
  furtherInformation: string;
  workshopId: string;
}

interface IWorkshopState {
  popoverAnnulation: any;
  tabIndex: number;
  modalOpen: boolean;
}

class Workshop extends React.Component<IWorkshopProps, IWorkshopState> {
  public static getInitialProps({ query: { id } }) {
    return { workshopId: id };
  }

  public state = {
    modalOpen: false,
    popoverAnnulation: null,
    tabIndex: 0
  };

  public handlePopoverOpen = event => {
    this.setState({ popoverAnnulation: event.target });
  };

  public handlePopoverClose = () => {
    this.setState({ popoverAnnulation: null });
  };

  public handleChangeTabIndex = (e, index) => {
    this.setState({ tabIndex: index });
    if (index !== 4) {
      this.scrolltoElement(index);
    } else {
      Scroll.animateScroll.scrollToTop();
    }
  };

  public handleWayPoint = index => () => {
    this.setState({ tabIndex: index });
  };

  public handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  public handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  public render() {
    const { classes, workshopId } = this.props;

    const open = Boolean(this.state.popoverAnnulation);
    const sliderSettings = {
      autoplay: true,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1
    };

    return (
      <Query query={GetWorkshop} variables={{ workshop_id: workshopId }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />;
          // catch resource not found here
          if (error) return `Error: ${error}`;

          const workshop = data.getWorkshop.workshop;
          const cookName = formatName(workshop, 'cook.gourmet.first_name', 'cook.gourmet.last_name');
          const availableSeat = workshop.max_gourmet - workshop.bookings.length;

          return (
            <Layout headerProps={{ static: true }}>
              <Modal
                aria-labelledby="carousel"
                aria-describedby="To"
                open={this.state.modalOpen}
                onClose={this.handleModalClose}
              >
                <div className={classes.slider}>
                  <Slider {...sliderSettings}>
                    {workshop.images.map((image, i) => (
                      <div key={image.key}>
                        <S3Image
                          component="img"
                          alt={`Photo ${i + 1} de l'atelier ${workshop.name}`}
                          path={`workshops/${workshop.id}`}
                          imageKey={image.key}
                          identityId={workshop.cook.gourmet.identity_id}
                          className={classes.sliderImage}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </Modal>
              <div onClick={this.handleModalOpen}>
                <Cover imageURL={this.props.mainPhoto} />
              </div>
              <Grid
                container
                justify="space-around"
                alignItems="center"
                className={classes.grid}
              >
                <Grid item xs={2}>
                  <Grid container justify="center">
                    <ProfileImage
                      size="small"
                      path="cook"
                      imageKey={workshop.cook.image.key}
                      identityId={workshop.cook.gourmet.identity_id}
                      alt={`Photo de profil de ${cookName}`}
                      className={classes.avatar}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item>
                      {this.props.rating && (
                        <Grid container>
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
                      )}
                      <Typography variant="h6" component="p" gutterBottom>
                        Recontrez {cookName}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                      >
                        {workshop.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        gutterBottom
                      >
                        {format(workshop.date, "[Le] DD MMMM [à] HH[h]mm")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="space-around" className={classes.grid}>
                <Grid item xs={8}>
                  <Tabs
                    value={this.state.tabIndex}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChangeTabIndex}
                    className={classes.sticky}
                  >
                    <Tab label="Au menu" className={classes.tabs} />
                    <Tab label="Le Cuistot" className={classes.tabs} />
                    <Tab label="Commentaires" className={classes.tabs} />
                    <Tab
                      label="Informations complémentaires"
                      className={classes.tabs}
                    />
                    <Tab className={classes.tabs} icon={<KeyboardArrowUp />} />
                  </Tabs>
                  <Grid
                    container
                    justify="space-around"
                    alignItems="center"
                    className={classes.innerGrid}
                  >
                    <Grid item>
                      <Grid container>
                        <Kitchen />
                        <Typography>_Repas_</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container>
                        <LocalDining />
                        <Typography>_Japonaise_</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container>
                        <People />
                        <Typography>
                          de {workshop.min_gourmet} à {workshop.max_gourmet} invités
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container>
                        <AccessTime />
                        <Typography>{workshop.duration} min.</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={classes.leftGrid}
                    direction="column"
                  >
                    <Scroll.Element name="0" />
                    <Waypoint onEnter={this.handleWayPoint(0)}>
                      <div>
                        <Grid item className={classes.itemGrid}>
                          <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                          >
                            Au menu
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            paragraph
                            className={classes.paragraph}
                          >
                            {workshop.description}
                          </Typography>
                        </Grid>
                        <Grid item className={classes.itemGrid}>
                          <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                          >
                            Photos & Videos
                          </Typography>
                          <Grid
                            container
                            alignItems="center"
                            justify="space-around"
                          >
                            {workshop.images.slice(0, Math.min(workshop.images.length, 3)).map((image, i) => {
                              const imageProps = {
                                component: "img",
                                alt: `Photo ${i + 1} de l'atelier ${workshop.name}`,
                                path: `workshops/${workshop.id}`,
                                imageKey: image.key,
                                identityId: workshop.cook.gourmet.identity_id,
                              };

                              return (
                                <Grid key={image.id} item>
                                  {i < 2 ? (
                                    <S3Image
                                      {...imageProps}
                                      className={classes.workshopImage}
                                      onClick={this.handleModalOpen}
                                    />
                                  ) : (
                                      <div
                                        className={classes.tileContainer}
                                        onClick={this.handleModalOpen}
                                      >
                                        <S3Image
                                          {...imageProps}
                                          className={cx(classes.workshopImage, classes.img)}
                                        />
                                        <div className={classes.tile}>
                                          <Typography
                                            variant="body1"
                                            component="p"
                                            align="center"
                                            color="inherit"
                                          >
                                            Voir plus de photos
                                        </Typography>
                                        </div>
                                      </div>
                                    )}
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </div>
                    </Waypoint>
                    <Scroll.Element name="1" />
                    <Waypoint onEnter={this.handleWayPoint(1)}>
                      <div>
                        <Grid item className={classes.itemGrid}>
                          <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                          >
                            Le Cuistot
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            paragraph
                            className={classes.paragraph}
                          >
                            {workshop.cook.description || "Pas encore de description pour ce cuistot"}
                          </Typography>
                        </Grid>
                      </div>
                    </Waypoint>
                    <Scroll.Element name="2" />
                    <Waypoint onEnter={this.handleWayPoint(2)}>
                      <div>
                        <Grid item className={classes.itemGrid}>
                          <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                          >
                            Commentaires
                          </Typography>
                          <Grid container>
                            {workshop.cook.evaluations.slice(0, Math.min(workshop.cook.evaluations.length, 3)).map((evaluation, i) => (
                              <>
                                <Grid
                                  key={evaluation.id}
                                  item
                                  className={classes.commentBlock}
                                >
                                  <CommentBlock
                                    authorIdentityId={evaluation.author.identity_id}
                                    authorImageKey={get(evaluation, 'author.image.key')}
                                    comment={evaluation.comment}
                                    date={evaluation.created_at}
                                    rating={evaluation.rating}
                                    name={formatName(evaluation, 'author.first_name', 'author.last_name')}
                                  />
                                </Grid>
                                {i !== 2 && (
                                  <Grid item xs={12}>
                                    <Divider />
                                  </Grid>
                                )}
                              </>
                            ))}
                          </Grid>
                        </Grid>
                      </div>
                    </Waypoint>
                    <Scroll.Element name="3" />
                    <Waypoint onEnter={this.handleWayPoint(3)}>
                      <div>
                        <Grid item className={classes.itemGrid}>
                          <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                          >
                            Informations complémentaires
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            paragraph
                            className={classes.paragraph}
                          >
                            {this.props.furtherInformation}
                          </Typography>
                        </Grid>
                      </div>
                    </Waypoint>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.sticky}>
                    <Paper elevation={1} className={classes.infoReservartion}>
                      <BookForm
                        price={workshop.price}
                        availableSeat={availableSeat}
                      />
                    </Paper>
                    <Grid
                      container
                      direction="column"
                      justify="space-around"
                      alignItems="center"
                      className={classes.innerGrid}
                    >
                      <Grid item className={classes.itemGrid}>
                        <Grid container>
                          <Lock />
                          <Typography variant="body1">
                            Paiement sécurisé par Mangopay
                          </Typography>
                        </Grid>
                        <Grid
                          container
                          alignItems="center"
                          justify="space-around"
                        >
                          <Grid item>
                            <img
                              src="https://static.cuistotducoin.com/img/workshop/visa.png"
                              alt="visa"
                              height="24"
                              width="40"
                            />
                            <img
                              src="https://static.cuistotducoin.com/img/workshop/masterpass.png"
                              alt="masterpass"
                              height="24"
                              width="40"
                            />
                            <img
                              src="https://static.cuistotducoin.com/img/workshop/maestro.png"
                              alt="maestro"
                              height="24"
                              width="40"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.itemGrid}>
                        <Grid container>
                          <Typography
                            variant="body1"
                            onMouseEnter={this.handlePopoverOpen}
                            onMouseLeave={this.handlePopoverClose}
                          >
                            Conditions d'annulation
                          </Typography>
                          <Popover
                            className={classes.popover}
                            open={open}
                            anchorEl={this.state.popoverAnnulation}
                            anchorOrigin={{
                              horizontal: "left",
                              vertical: "bottom"
                            }}
                            transformOrigin={{
                              horizontal: "left",
                              vertical: "top"
                            }}
                            onClose={this.handlePopoverClose}
                            disableRestoreFocus
                          >
                            <Paper elevation={2} className={classes.cancellation}>
                              <Typography variant="body1">
                                Les conditions d'annulation sont les suivantes : Si
                                vous annulez jusqu'à 3 jours avant la date de
                                l'atelier, vous recevez un remboursement intégral
                                (minoré des frais de service). En cas d'annulation
                                dans les 3 jours précédant l'atelier, la réservation
                                n'est pas remboursable.
                              </Typography>
                            </Paper>
                          </Popover>
                        </Grid>
                      </Grid>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Poser une question au cuistot
                      </Button>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Layout>
          );
        }}
      </Query>
    );
  }

  private scrolltoElement = element => {
    Scroll.scroller.scrollTo(element, {
      delay: 100,
      duration: 500,
      smooth: true
    });
  };
}

const enhance = compose(
  withData,
  withStyles(styles as any),
);

export default enhance(Workshop);
