import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import Logo from "../../components/Logo";
import ResetPasswordRequestForm from "../../components/ResetPasswordRequestForm";

const styles = (theme: Theme) => ({
  container: {
    textAlign: "center"
  },
  logo: {
    margin: 3 * theme.spacing.unit
  }
});

// tslint:disable-next-line
const ResetPasswordRequest: React.SFC<{ classes: any }> = ({ classes }) => (
  <div className={classes.container}>
    <Logo height={100} width={100} className={classes.logo} />
    <Typography align="center" variant="h4">
      Vous avez oublié votre mot de passe ?
    </Typography>
    <ResetPasswordRequestForm />
    <Typography align="center" gutterBottom>
      <Link href="/login">
        <a>Non c'est bon, je m'en rappelle en fait</a>
      </Link>
    </Typography>
  </div>
);

export default withStyles(styles as any)(ResetPasswordRequest as any) as any;
