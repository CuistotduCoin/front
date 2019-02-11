import Auth from "@aws-amplify/auth";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import Router, { withRouter } from "next/router";
import React from "react";
import { compose } from "recompose";
import { Subscribe } from "unstated";
import * as Yup from "yup";
import { AppContainer } from "../../components/App";
import { SNACKBAR_MESSAGES } from "../../shared/constants";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 540,
    padding: 24,
    paddingTop: 0
  },
  textField: {
    width: "100%"
  },
  submitButton: {
    marginTop: 16,
  }
});

interface IAccountConfirmationFormProps {
  classes?: any;
  location: any;
  router: any;
}

interface IAccountConfirmationFormValues {
  username: string;
  code: string;
}

export class AccountConfirmationForm extends React.Component<
  IAccountConfirmationFormProps,
  {}
  > {
  public constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.initialValues = this.initialValues.bind(this);
  }

  public initialValues() {
    return {
      username: this.props.router.query.username || "",
      code: ""
    };
  }

  public render() {
    const { classes } = this.props;

    const validationSchema = Yup.object().shape({
      username: Yup.string().required("Un nom d'utilisateur est obligatoire"),
      code: Yup.number().required("Veuillez entrer le code reçu par email")
    });

    const accountConfirmationFormComponent = () => (
      <Form autoComplete="off">
        <Grid container className={classes.grid} spacing={16}>
          <Grid item xs={12}>
            <Field
              type="text"
              component={TextField}
              id="username"
              label="Nom d'utilisateur"
              name="username"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              type="text"
              component={TextField}
              id="code"
              label="Code de sécurité"
              name="code"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="secondary" className={classes.submitButton}>
              Confirmer mon compte
            </Button>
          </Grid>
        </Grid>
      </Form>
    );

    return (
      <Subscribe to={[AppContainer]}>
        {(app: any) => (
          <Formik
            initialValues={this.initialValues()}
            component={accountConfirmationFormComponent}
            onSubmit={this.onSubmit(app.openSnackbar)}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
          />
        )}
      </Subscribe>
    );
  }

  public onSubmit(openSnackbar) {
    return (
      values: IAccountConfirmationFormValues,
      { setSubmitting, setErrors, setStatus, resetForm }
    ) => {
      Auth.confirmSignUp(values.username, values.code, {
        forceAliasCreation: false
      })
        .then(data => {
          setStatus({ success: true });
          resetForm(this.initialValues());
          openSnackbar(
            "Merci d'avoir confirmé votre compte ! Vous pouvez désormais vous connecter",
            "success"
          );
          Router.replace(`/login`);
        })
        .catch(err => {
          openSnackbar(SNACKBAR_MESSAGES[err.code] || "Erreur", "error");
          setStatus({ success: false });
          setSubmitting(false);
          setErrors({ submit: err.message });
        });
    };
  }
}

const enhance = compose(
  withStyles(styles as any),
  withRouter
);

export default enhance(AccountConfirmationForm);
