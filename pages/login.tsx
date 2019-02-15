import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import React from "react";
import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";

const styles = (theme: Theme) => ({
  container: {
    textAlign: "center"
  },
  logo: {
    marginTop: 3 * theme.spacing.unit
  }
});

// tslint:disable-next-line
const Login: React.SFC<{ classes: any }> = ({ classes }) => (
  <div className={classes.container}>
    <Logo height={100} width={100} className={classes.logo} />
    <LoginForm />
    <Typography align="center" gutterBottom>
      Pas encore membre ?{' '}
      <Link href="/signup">
        <a>Inscrivez vous !</a>
      </Link>
    </Typography>
    <Typography align="center" gutterBottom>
      <Link href="/reset-password-request">
        <a>Vous avez oublié votre mot de passe ?</a>
      </Link>
    </Typography>
  </div>
);

export default withStyles(styles as any)(Login as any) as any;
