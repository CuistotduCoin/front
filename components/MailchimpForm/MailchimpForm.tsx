import { FormControl } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import * as Yup from "yup";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: 24
  },
  textField: {
    width: "100%"
  },
  submitButton: {
    marginTop: 16
  },
  divider: {
    marginTop: 16
  }
});

interface IMailchimpFormProps {
  classes?: any;
  onValidated: any;
  status: string;
  message: string;
}

interface IMailchimpFormValues {
  email: string;
}

enum StateForm {
  NONE = " none",
  SENDING = "sending",
  ERROR = "error",
  SUCCESS = "success"
}

interface IMailchimpFormState {
  messageFromMailchimp: string;
  stateForm: StateForm;
}

export class MailchimpForm extends React.Component<IMailchimpFormProps, IMailchimpFormState> {
  public state: IMailchimpFormState = {
    messageFromMailchimp: "",
    stateForm: StateForm.NONE
  };

  public constructor(props) {
    super(props);
  }

  public render() {
    const { classes, onValidated, status, message } = this.props;

    const validationSchema = Yup.object().shape({
      email: Yup.string().email().required(
        "Vous devez indiquer votre email"
      )
    });

    const initialValues = {
      email: "",
    };

    const handleSubmit = (values: IMailchimpFormValues) => {
      const { email } = values;
      console.log(onValidated, status, message);
      onValidated({ EMAIL: email });
      if (status === "sending") {
        this.setState({ messageFromMailchimp: "Inscription en cours..." });
        this.setState({ stateForm: StateForm.SENDING });
      }
      if (status === "error") {
        this.setState({ messageFromMailchimp: message });
        this.setState({ stateForm: StateForm.ERROR });
      }
      if (status === "success") {
        this.setState({ messageFromMailchimp: message });
        this.setState({ stateForm: StateForm.SUCCESS });
      }
      console.log(onValidated, status, message);
    }

    const mailchimpFormComponent = () => (
      <Form autoComplete="off">
        <FormControl>
          <Grid container className={classes.grid} spacing={16}>
            <Grid item xs={6}>
              <Field
                type="text"
                component={TextField}
                id="email"
                label="Votre email"
                name="email"
                className={classes.textField}
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
                Inscrivez vous à la newsletter
            </Button>
            </Grid>
          </Grid>
          {(this.state.stateForm === StateForm.SENDING || StateForm.SUCCESS) && (
            <FormHelperText>{this.state.messageFromMailchimp}</FormHelperText>
          )}
          {(this.state.stateForm === StateForm.ERROR) && (
            <FormHelperText error={true}>{this.state.messageFromMailchimp}</FormHelperText>
          )}
        </FormControl>
      </Form>
    );

    return (
      <Formik
        initialValues={initialValues}
        component={mailchimpFormComponent}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
      />
    );
  }
}

export default withStyles(styles as any)(MailchimpForm as any) as any;
