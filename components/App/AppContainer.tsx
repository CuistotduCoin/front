import { Container } from "unstated";
import initApollo from '../../pages/initApollo';
import { GetCurrentGourmetImage } from "../../queries";
import { apolloConfig } from '../../shared/config';

interface IAppState {
  referer?: string;
  isLoggedIn: boolean;
  snackbarOpened: boolean;
  snackbarMessage?: string;
  snackbarVariant?: string;
  currentGourmet?: object;
}

class AppContainer extends Container<IAppState> {
  public state = {
    snackbarOpened: false,
    isLoggedIn: false,
    referer: "/"
  };

  public setReferer = url => {
    this.setState({ referer: url });
  };

  public logIn = () => {
    this.setState({ isLoggedIn: true });
  };

  public logOut = () => {
    this.setState({ isLoggedIn: false, referer: "/" });
  };

  public openSnackbar = (message, variant = "info") => {
    this.setState({
      snackbarOpened: true,
      snackbarMessage: message,
      snackbarVariant: variant
    });
  };

  public closeSnackbar = () => {
    this.setState({
      snackbarOpened: false
    });
  };

  public setCurrentGourmet = gourmet => {
    this.setState({ currentGourmet: gourmet });
  };

  public updateCurrentGourmetImage = () => {
    const client = initApollo({}, apolloConfig);
    client.query({ query: GetCurrentGourmetImage, fetchPolicy: "no-cache" }).then(result => {
      if (result.data.getCurrentGourmet.message === "success") {
        const gourmet = result.data.getCurrentGourmet.gourmet;
        this.setState(prevState =>
          Object.assign({}, prevState, {
            currentGourmet: {
              ...prevState.currentGourmet,
              image: gourmet.image
            }
          })
        );
      }
    });
  };
}

export default AppContainer;
