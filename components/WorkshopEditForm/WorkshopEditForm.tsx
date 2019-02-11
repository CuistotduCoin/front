import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Form, Formik } from "formik";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { graphql, Query } from "react-apollo";
import { compose } from "recompose";;
import Storage from "@aws-amplify/storage";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddPhotoIcon from "@material-ui/icons/AddToPhotos";
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from "@material-ui/icons/Warning";
import * as Yup from "yup";
import Loading from "../../components/Loading";
import S3Image from "../../components/S3Image";
import WorkshopForm from "../../components/WorkshopForm";
import { withRedirect } from "../../decorators";
import { DeleteWorkshop, GetWorkshop, UpdateWorkshop } from "../../queries";
import { format } from "../../shared/date-utils";
import { sanitizeFilename } from "../../shared/util";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 540,
    padding: 24
  },
  textField: {
    width: "100%"
  },
  card: {
    width: "60vw",
    margin: "15px 0 50px"
  },
  button: {
    marginBottom: 50
  },
  showButton: {
    margin: '30px 0 20px'
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  submitButton: {
    marginTop: 30
  },
  warningIcon: {
    color: 'white',
    marginRight: theme.spacing.unit
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  deleteIcon: {
    color: 'white',
    '&:hover': {
      background: theme.palette.secondary.main
    }
  },
  imagesCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  addPhotoIcon: {
    marginTop: 20
  }
});

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Vous devez entrer un nom pour cet atelier"),
  price: Yup.number().required("Veuillez entrer un prix").positive(),
  duration: Yup.number().required("Veuillez entrer la durée estimée de votre atelier en minutes").positive(),
  date: Yup.string().required("Veuillez entrer la date à laquelle aura lieu votre atelier")
});

interface IGourmetRange {
  min: number;
  max: number;
}

interface IWorkshopEditFormValues {
  name: string;
  description?: string;
  price: string;
  duration: string;
  date: string;
  gourmetRange: IGourmetRange;
};

interface IWorkshopEditFormProps {
  classes: any;
  workshopId: string;
  currentGourmet: any;
  redirectToNotFound();
  openSnackbar(message: string, variant: string);
  updateWorkshop(workshop: object);
  deleteWorkshop(workshopId: string);
}

class WorkshopEditForm extends React.Component<IWorkshopEditFormProps> {
  public constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteWorkshop = this.deleteWorkshop.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  public handleImageChange(workshopId, identityId, refetch) {
    return (event) => {
      const file = event.target.files[0];

      if (file && identityId) {
        Storage.put(`workshops/${workshopId}/${sanitizeFilename(file.name)}`, file, { identityId })
          .then(() => {
            this.props.openSnackbar("Votre image a bien été importée. Elle devrait apparaître d'ici quelques secondes...", "success");
            setTimeout(refetch, 10000);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }

  public render() {
    const { classes, workshopId, redirectToNotFound, currentGourmet } = this.props;

    const updateWorkshopComponent = () => (
      <Form autoComplete="off">
        <WorkshopForm />
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="secondary" className={classes.submitButton}>
            Mettre à jour l'atelier
          </Button>
        </Grid>
      </Form>
    );

    return (
      <Query query={GetWorkshop} variables={{ workshop_id: workshopId }}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <Loading />;
          // catch resource not found here
          if (error) return `Error: ${error}`;

          const workshop = data.getWorkshop.workshop;

          if (!workshop.confirmed || workshop.cook.id !== currentGourmet.id) {
            redirectToNotFound();
          }

          const {
            id,
            name,
            description,
            price,
            duration,
            date,
            min_gourmet,
            max_gourmet,
            cook,
          } = workshop;

          const identityId = cook.gourmet.identity_id;

          return (
            <div className={classes.container}>
              <Link href={`/workshops/${id}`}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.showButton}
                >
                  Aller sur la page de l'atelier
                </Button>
              </Link>
              <Card className={classes.card}>
                <CardContent className={classes.imagesCard}>
                  {workshop.images.length === 0 &&
                    <Typography variant="body1">Pas encore de photos pour cet atelier</Typography>
                  }
                  {workshop.images.length > 0 &&
                    <GridList className={classes.gridList} cols={2.5}>
                      {workshop.images.map((image, i) => (
                        <GridListTile key={image.key}>
                          <S3Image
                            component="img"
                            alt={`Photo ${i + 1} de l'atelier ${workshop.name}`}
                            path={`workshops/${workshop.id}`}
                            imageKey={image.key}
                            identityId={identityId}
                          />
                          <GridListTileBar
                            classes={{
                              root: classes.titleBar,
                              title: classes.title,
                            }}
                            actionIcon={
                              <IconButton className={classes.deleteIcon}>
                                <DeleteIcon
                                  onClick={() => {
                                    Storage.remove(`workshops/${workshop.id}/${image.key}`, { identityId })
                                      .then(refetch)
                                      .catch(err => console.error(err));
                                  }}
                                />
                              </IconButton>
                            }
                          />
                        </GridListTile>
                      ))}
                    </GridList>
                  }
                  <Button
                    variant="fab"
                    mini
                    color="secondary"
                    aria-label="Add"
                    className={classes.addPhotoIcon}
                    // @ts-ignore
                    onClick={() => this.fileUpload.click()}
                  >
                    <input
                      type="file"
                      // @ts-ignore
                      ref={node => this.fileUpload = node}
                      accept="image/jpeg,image/png,image/jpg"
                      style={{ display: 'none' }}
                      onChange={this.handleImageChange(workshop.id, identityId, refetch)}
                    />
                    <AddPhotoIcon />
                  </Button>
                </CardContent>
              </Card>
              <Card className={classes.card}>
                <CardContent>
                  <Formik
                    initialValues={{
                      name,
                      description,
                      price,
                      duration,
                      date: format(date, "YYYY-MM-DD"),
                      gourmetRange: { min: min_gourmet, max: max_gourmet },
                    }}
                    component={updateWorkshopComponent}
                    onSubmit={this.onSubmit}
                    validationSchema={validationSchema}
                    validateOnBlur={false}
                    validateOnChange={false}
                  />
                </CardContent>
              </Card>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.deleteWorkshop}
                className={classes.button}
              >
                <WarningIcon className={classes.warningIcon} />
                Supprimer l'atelier
              </Button>
            </div>
          );
        }}
      </Query>
    );
  }

  public onSubmit(values: IWorkshopEditFormValues, { setSubmitting, setErrors, setStatus }) {
    const { workshopId, openSnackbar, updateWorkshop } = this.props;

    const {
      name,
      description,
      price,
      duration,
      date,
      gourmetRange,
    } = values;

    const workshop = {
      id: workshopId,
      name,
      description,
      price,
      duration,
      min_gourmet: gourmetRange.min,
      max_gourmet: gourmetRange.max,
      date,
    };

    const updateWorkshopError = (result) => {
      openSnackbar("Échec de la mise à jour de l'atelier", "error");
      setStatus({ success: false });
      setSubmitting(false);
      if (result.errors && result.errors.length) {
        const error = result.errors[0].message;
        console.error(error);
        setErrors({ submit: error });
      }
    };

    updateWorkshop(workshop)
      .then(res => {
        const result = res.data.updateWorkshop;
        if (result.message === "success") {
          openSnackbar("Les informations ont bien été mises à jour", "success");
          setStatus({ success: true });
          setSubmitting(false);
        } else {
          updateWorkshopError(result);
        }
      })
      .catch(updateWorkshopError);
  }

  public deleteWorkshop() {
    const { workshopId, openSnackbar, deleteWorkshop } = this.props;

    const deleteWorkshopError = (result) => {
      openSnackbar("Erreur lors de la suppression de l'atelier. Veuillez réessayer.", "error");
      console.error(result);
      if (result.errors && result.errors.length) {
        const error = result.errors[0].message;
        console.error(error);
      }
    };

    deleteWorkshop(workshopId)
      .then(res => {
        const result = res.data.deleteWorkshop;
        if (result.message === "success") {
          openSnackbar("L'atelier a bien été supprimé", "success");
          Router.replace("/");
        } else {
          deleteWorkshopError(result);
        }
      })
      .catch(deleteWorkshopError);
  }
}

const enhance = compose(
  graphql(UpdateWorkshop, {
    props: (props: any) => ({
      updateWorkshop: (workshop) => props.mutate({ variables: { workshop } }),
    }),
  }),
  graphql(DeleteWorkshop, {
    props: (props: any) => ({
      deleteWorkshop: (workshopId) => props.mutate({ variables: { workshop_id: workshopId } }),
    }),
  }),
  withRedirect,
  withStyles(styles as any)
);

export default enhance(WorkshopEditForm);
