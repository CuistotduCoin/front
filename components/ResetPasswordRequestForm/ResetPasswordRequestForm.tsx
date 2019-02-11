import Auth from "@aws-amplify/auth";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import Router from "next/router";
import React from "react";
import { Subscribe } from "unstated";
import * as Yup from "yup";
import { AppContainer } from "../../components/App";

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
    marginTop: 16
  }
});

const initialValues = {
  username: ""
};

interface IResetPasswordRequestFormProps {
  classes: any;
}

interface IResetPasswordRequestFormValues {
  username: string;
}

export class ResetPasswordRequestForm extends React.Component<
  IResetPasswordRequestFormProps,
  {}
> {
  public constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public render() {
    const { classes } = this.props;

    const validationSchema = Yup.object().shape({
      username: Yup.string().required(
        "Vous devez indiquer votre nom d'utilisateur"
      )
    });

    const resetPasswordRequestFormComponent = () => (
      <Form autoComplete="off">
        <Grid container className={classes.grid} spacing={16}>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="secondary" className={classes.submitButton}>
              Réinitialiser mon mot de passe
            </Button>
          </Grid>
        </Grid>
      </Form>
    );

    return (
      <Subscribe to={[AppContainer]}>
        {(app: any) => (
          <Formik
            initialValues={initialValues}
            component={resetPasswordRequestFormComponent}
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
      values: IResetPasswordRequestFormValues,
      { setSubmitting, setErrors, setStatus, resetForm }
    ) => {
      Auth.forgotPassword(values.username)
        .then(data => {
          let successMessage;
          if (data.CodeDeliveryDetails) {
            successMessage = "Vous allez recevoir un mail qui vous permettra de réinitialiser votre mot de passe.";
          }
          if (successMessage) {
            setStatus({ success: true });
            resetForm(initialValues);
            openSnackbar(successMessage, "success");
            Router.replace(`/password-reset?username=${values.username}`);
          }
        })
        .catch(err => {
          let errorMessage;
          if (err.code === "UserNotFoundException") {
            errorMessage = "Aucun utilisateur n'est enregistré sous ce nom";
          }
          if (errorMessage) {
            openSnackbar(errorMessage, "error");
          }
          setStatus({ success: false });
          setSubmitting(false);
          setErrors({ submit: err.message });
        });
    };
  }
}

export default withStyles(styles as any)(ResetPasswordRequestForm);
