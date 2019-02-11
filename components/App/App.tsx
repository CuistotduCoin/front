import Auth from "@aws-amplify/auth";
import Router, { withRouter } from "next/router";
import React from "react";
import { compose } from "recompose";
import { Subscribe } from "unstated";
import { AppContainer } from ".";
import Snackbar from "../../components/Snackbar";
import initApollo from '../../pages/initApollo';
import { GetCurrentGourmet, UpdateGourmet } from "../../queries";
import { apolloConfig } from '../../shared/config';

interface IAppProps {
  referer?: string;
  isLoggedIn: boolean;
  currentGourmet?: object;
  router: any;
  openSnackbar(message: string, variant: string);
  logIn();
  setReferer(url?: string);
  setCurrentGourmet(gourmet?: object);
}

export class App extends React.Component<IAppProps, {}> {
  public componentDidMount() {
    const { setReferer, logIn, isLoggedIn, router } = this.props;

    // When EnsureLoggedIn has been called before and has redirect to login,
    // the location pathname has not been updated yet here

    if (!isLoggedIn) {
      Auth.currentAuthenticatedUser()
        .then(user => {
          console.log(`Authenticated as ${user.username}`);
          if (user.username !== "guest") {
            if (router.asPath !== "/login" && router.asPath !== "/signup") {
              // Don't redirect to home page if user is already connected (except for login and signup pages)
              setReferer(undefined);
            }
            logIn();
          }
        })
        .catch(() => {
          console.log("Not authenticated... Authentication as guest...");
          Auth.signIn(process.env.GUEST_USERNAME, process.env.GUEST_PASSWORD)
            .then(user => console.log("Authenticated as guest"))
            .catch(err => {
              console.log(`Authentication as guest has failed : ${err}`);
            });
        });
    }
  }

  public componentDidUpdate(prevProps) {
    const {
      referer,
      currentGourmet,
      openSnackbar,
      isLoggedIn,
      logIn,
      setCurrentGourmet
    } = this.props;

    const isLoggingOut = prevProps.isLoggedIn && !isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && isLoggedIn;

    if (isLoggingIn) {
      if (referer) {
        console.log(`Logging in... redirecting to ${referer}`);
        Router.replace(referer);
      }

      if (!currentGourmet) {
        // Already set if logout has failed...
        const client = initApollo({}, apolloConfig);

        client.query({ query: GetCurrentGourmet }).then(result => {
          if (result.data.getCurrentGourmet.message === "success") {
            const gourmet = result.data.getCurrentGourmet.gourmet;
            setCurrentGourmet(gourmet);

            if (!gourmet.identity_id) {
              Auth.currentSession().then(currentSession => {
                const jwtToken = currentSession.getIdToken().getJwtToken();
                const loginKey = `cognito-idp.${process.env.AWS_REGION_IRELAND}.amazonaws.com/${process.env.AWS_USERPOOL_ID}`;

                AWS.config.credentials = new AWS.CognitoIdentityCredentials(
                  {
                    IdentityPoolId: process.env.AWS_IDENTITY_POOL_ID,
                    Logins: { [loginKey]: jwtToken }
                  },
                  { region: process.env.AWS_REGION_IRELAND }
                );

                // Save the gourmet identity id in our base
                client.mutate({
                  mutation: UpdateGourmet,
                  variables: {
                    gourmet: {
                      id: currentSession.getIdToken().payload.sub,
                      identity_id: AWS.config.credentials.identityId
                    }
                  }
                }).then(updateResult => {
                  if (updateResult.data.updateGourmet.message === "success") {
                    console.log("identity id has been populated");
                  } else {
                    console.error("failure while populating identity id");
                  }
                });
              });
            }
          }
        });
      }
    } else if (isLoggingOut) {
      console.log("Logging out...");
      Auth.signOut()
        .then(data => {
          setCurrentGourmet(undefined);
          openSnackbar("Vous êtes maintenant déconnecté", "success");
          Router.replace("/");
        })
        .catch(err => {
          openSnackbar(`La déconnexion a échouée : ${err.message}`, "error");
          logIn();
        });
    }
  }

  public render() {
    const { children } = this.props;
    return (
      <Subscribe to={[AppContainer]}>
        {(app: any) => (
          <>
            <Snackbar
              open={app.state.snackbarOpened}
              message={app.state.snackbarMessage}
              variant={app.state.snackbarVariant}
              onClose={app.closeSnackbar}
            />
            {children}
          </>
        )}
      </Subscribe>
    );
  }
}

const enhance = compose(
  withRouter
);

export default enhance(App);
