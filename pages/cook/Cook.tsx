import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Theme, withStyles } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";
import CheckCircle from "@material-ui/icons/CheckCircle";
import gql from 'graphql-tag';
import get from "lodash.get";
import React from "react";
import { Query } from "react-apollo";
import { compose } from "recompose";
import CommentBlock from "../../components/CommentBlock";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import ProfileImage from "../../components/ProfileImage";
import S3Image from "../../components/S3Image";
import WorkshopListItem from "../../components/WorkshopListItem";
import { withRedirect } from "../../decorators";
import { formatName } from "../../shared/util";

const getCook = gql`
  query GetCook($cook_id: ID!) {
    getCook(cook_id: $cook_id) {
      cook {
        gourmet {
          identity_id
          first_name
          last_name
          image {
            key
          }
        }
        image {
          key
        }
        description
        is_pro
        confirmed
        evaluations {
          author {
            identity_id
            first_name
            last_name
            image {
              key
            }
          }
          rating
          comment
          created_at
        }
        workshops {
          id
          name
          duration
          price
          date
          kitchen {
            name
          }
          images {
            key
          }
        }
      }
      message
      errors {
        message
      }
    }
  }
`;

const styles = (theme: Theme) => ({
  cookProfile: {
    display: 'flex',
    position: 'absolute',
    top: '-72px',
    left: '30px'
  },
  isProIcon: {
    marginBottom: '15px',
    marginLeft: '7px',
    color: theme.palette.text.secondary,
    fontSize: '15px'
  },
  container: {
    position: 'relative',
    paddingBottom: '40px'
  },
  name: {
    marginLeft: '20px',
    color: 'white',
    textShadow: "1px 1px #585A5A"
  },
  paper: {
    padding: '20px'
  },
  paperTitle: {
    marginBottom: '15px',
    fontWeight: 'bold'
  },
  grid: {
    padding: '50px 20px'
  },
  cookImage: {
    width: '100%',
    maxHeight: '330px'
  }
});

interface ICookProps {
  classes?: any;
  redirectToNotFound: any;
  match: any;
}

export class Cook extends React.Component<ICookProps, {}> {
  public render() {
    const { classes, redirectToNotFound } = this.props;

    const { id: cookId } = this.props.match.params;

    return (
      <Layout>
        <Query query={getCook} variables={{ cook_id: cookId }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            // catch resource not found here
            if (error) return `Error: ${error}`;

            const cook = data.getCook.cook;

            if (!cook.confirmed) {
              redirectToNotFound();
            }

            const workshops = cook.workshops;
            const evaluations = cook.evaluations;
            const cookIdentityId = cook.gourmet.identity_id;
            const cookName = formatName(cook, 'gourmet.first_name', 'gourmet.last_name');

            return (
              <>
                <S3Image
                  component="img"
                  alt={`Photo de ${cookName}`}
                  path="cook"
                  imageKey={get(cook, 'image.key')}
                  identityId={cookIdentityId}
                  className={classes.cookImage}
                />
                <div className={classes.container}>
                  <div className={classes.cookProfile}>
                    <ProfileImage
                      imageKey={get(cook, 'gourmet.image.key')}
                      identityId={cook.gourmet.identity_id}
                    />
                    <Typography variant="h3" className={classes.name}>
                      {cookName}
                    </Typography>
                  </div>
                </div>
                <Grid container spacing={40} justify="center" className={classes.grid}>
                  <Grid item container md={7} spacing={40} direction="column">
                    <Grid item>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h6" color="textSecondary" className={classes.paperTitle}>
                          {`A propos de ${cook.gourmet.first_name}`}
                        </Typography>
                        {cook.is_pro && (
                          <Tooltip title="Cuistot professionnel" placement="top">
                            <CheckCircle className={classes.isProIcon} />
                          </Tooltip>
                        )}
                      </div>
                      <Typography variant="body1">
                        {cook.description ? cook.description : `Hello :) je n'ai pas encore eu le temps de remplir cette partie mais ca arrive vite.`}
                      </Typography>
                    </Grid>
                    {!!workshops.length && (
                      <Grid item>
                        <Typography variant="h6" color="textSecondary" className={classes.paperTitle}>
                          Les ateliers du moment
                        </Typography>
                        <div>
                          {workshops.map((workshop, i) => (
                            <WorkshopListItem
                              key={`Workshop${i}`}
                              workshop={workshop}
                              authorIdentityId={cookIdentityId}
                            />
                          ))}
                        </div>
                      </Grid>
                    )}
                  </Grid>
                  <Grid item container md={5} spacing={16} direction="column">
                    {!!evaluations.length && (
                      <Grid item>
                        <Paper elevation={1} className={classes.paper}>
                          <Typography variant="h6" color="textSecondary" className={classes.paperTitle}>
                            Les avis de nos Gourmets
                          </Typography>
                          <div>
                            {evaluations.map((evaluation, i) => (
                              <CommentBlock
                                key={`Evaluation_${i}`}
                                authorIdentityId={evaluation.author.identity_id}
                                authorImageKey={get(evaluation, 'author.image.key')}
                                comment={evaluation.comment}
                                rating={evaluation.rating}
                                date={evaluation.created_at}
                                name={formatName(evaluation, 'author.first_name', 'author.last_name')}
                              />
                            ))}
                          </div>
                        </Paper>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

const enhance = compose(
  withStyles(styles as any),
  withRedirect,
)

export default enhance(Cook);
