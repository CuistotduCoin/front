import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Logo from "../../components/Logo";
import ResetPasswordForm from "../../components/ResetPasswordForm";

const styles = (theme: Theme) => ({
  container: {
    textAlign: "center"
  },
  logo: {
    margin: 3 * theme.spacing.unit
  }
});

// tslint:disable-next-line
const ResetPassword: React.SFC<{ classes: any }> = ({ classes }) => (
  <div className={classes.container}>
    <Logo height={100} width={100} className={classes.logo} />
    <Typography align="center" variant="h4">
      Un tout nouveau mot de passe
    </Typography>
    <ResetPasswordForm />
  </div>
);

export default withStyles(styles as any)(ResetPassword as any) as any;
