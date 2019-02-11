import React from "react";
import { Subscribe } from "unstated";
import { AppContainer } from "../../components/App";
import Header from "./Header";

interface IHeaderContainerProps {
  static?: boolean;
  hideSignUpLogin?: boolean;
  hideCompanyIndividual?: boolean;
}

// tslint:disable-next-line
const HeaderContainer: React.SFC<IHeaderContainerProps> = props => (
  <Subscribe to={[AppContainer]}>
    {(app: any) => <Header {...props} isLoggedIn={app.state.isLoggedIn} />}
  </Subscribe>
);

export default HeaderContainer;
