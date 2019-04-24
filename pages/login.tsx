import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Link from "../components/Link";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

const styles = (theme: Theme) => ({
  container: {
    textAlign: "center"
  },
  logo: {
    marginTop: theme.spacing(3)
  }
});

// tslint:disable-next-line
const Login: React.SFC<{ classes: any }> = ({ classes }) => (
  <div className={classes.container}>
    <Logo height={100} width={100} className={classes.logo} />
    <LoginForm />
    <Typography align="center" gutterBottom>
      Pas encore membre ?{' '}
      <Link href="/sign-up">Inscrivez vous !</Link>
    </Typography>
    <Typography align="center" gutterBottom>
      <Link href="/reset-password-request">Vous avez oublié votre mot de passe ?</Link>
    </Typography>
  </div>
);

export default withStyles(styles as any)(Login as any) as any;
