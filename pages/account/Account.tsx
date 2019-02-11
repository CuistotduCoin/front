import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import { compose } from "recompose";
import AccountForm from "../../components/AccountForm";
import Header from "../../components/Header";
import { withAuth, withData } from '../../decorators';

const styles = (theme: Theme) => ({
  container: {
    textAlign: "center"
  }
});

// tslint:disable-next-line
const Account: React.SFC<{ classes: any }> = ({ classes }) => (
  <div className={classes.container}>
    <Header />
    <AccountForm />
  </div>
);

const enhance = compose(
  withData,
  withAuth,
  withStyles(styles as any)
);

export default enhance(Account);
