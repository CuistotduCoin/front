import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Link from "../components/Link";
import Logo from "../components/Logo";
import SignUpForm from "../components/SignUpForm";

const styles = (theme: Theme) => ({
  container: {
    textAlign: "center"
  },
  logo: {
    marginTop: theme.spacing(3)
  }
});

// tslint:disable-next-line
const SignUp: React.SFC<{ classes: any }> = ({ classes }) => (
  <div className={classes.container}>
    <Logo height={100} width={100} className={classes.logo} />
    <SignUpForm />
    <Typography align="center" gutterBottom>
      Déjà membre ? <Link href="/login">Connectez vous !</Link>
    </Typography>
  </div>
);

export default withStyles(styles as any)(SignUp as any) as any;
