import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import AccountConfirmationForm from "../../components/AccountConfirmationForm";
import Logo from "../../components/Logo";

const styles = (theme: Theme) => ({
  container: {
    textAlign: "center"
  },
  logo: {
    margin: 3 * theme.spacing.unit
  }
});

// tslint:disable-next-line
const AccountConfirmation: React.SFC<{ classes: any }> = ({ classes }) => (
  <div className={classes.container}>
    <Logo height={100} width={100} className={classes.logo} />
    <Typography align="center" variant="h4">
      Vous avez dû recevoir un code de sécurité
    </Typography>
    <AccountConfirmationForm />
  </div>
);

export default withStyles(styles as any)(AccountConfirmation as any) as any;
