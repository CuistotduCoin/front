import { FormControl } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import { Field, Form, Formik, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import * as Yup from "yup";
import { fromString } from "../../shared/util";

const styles = (theme: Theme) => ({
  form: {
    paddingBottom: 24
  }
});

interface IPaymentCardFormProps {
  classes?: any;
}

interface IPaymentCardFormState {
  focused: CardField;
}

enum CardField {
  NUMBER = "number",
  NAME = "name",
  EXPIRY = "expiry",
  CVC = "cvc"
}

interface IPaymentCardFormValues {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
}

type CardFieldStr = "number" | "name" | "expiry" | "cvc";

export class PaymentCardForm extends React.Component<
  IPaymentCardFormProps,
  IPaymentCardFormState
  > {
  public state: IPaymentCardFormState = {
    focused: CardField.NUMBER
  };

  private validationSchema = Yup.object().shape({
    cvc: Yup.number()
      .required("Le CVC est obligatoire")
      .positive(),
    expiry: Yup.number()
      .required("La date d'expiration est obligatoire")
      .positive(),
    name: Yup.string().required("Le nom est obligatoire"),
    number: Yup.number()
      .required("Le numéro de carte est obligatoire")
      .positive()
  });

  public handleInputFocus = (event: React.FormEvent<HTMLInputElement>) => {
    const val: string = event.currentTarget.name;
    const field = fromString(CardField, val);
    this.setState({ focused: field });
  };

  public onSubmit = () => async (values: IPaymentCardFormValues) => {
    try {
      alert("Pay");
    } catch (e) {
      alert(e.message);
    }
  };

  public render() {
    const { classes } = this.props;

    const initialValues = {
      cvc: "",
      expiry: "",
      name: "",
      number: ""
    };

    const paymentCardFormComponent = (
      props: FormikProps<IPaymentCardFormValues>
    ) => (
        <Form autoComplete="off" className={classes.form}>
          <FormControl>
            <Grid container justify="space-around" spacing={16}>
              <Grid item xs={12}>
                <Card
                  cvc={props.values.cvc || ""}
                  expiry={props.values.expiry || ""}
                  name={props.values.name || ""}
                  number={props.values.number || ""}
                  focused={this.state.focused.toString() as CardFieldStr}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid container justify="space-around">
                <Grid item xs={4}>
                  <Field
                    type="text"
                    component={TextField}
                    id="number"
                    label="Numéro de carte"
                    name="number"
                    placeholder="Votre numero de carte"
                    margin="normal"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.number}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    type="text"
                    component={TextField}
                    id="expiry"
                    label="Expiration"
                    name="expiry"
                    placeholder="MM/AA"
                    margin="normal"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.expiry}
                  />
                </Grid>
              </Grid>
              <Grid container justify="space-around">
                <Grid item xs={4}>
                  <Field
                    type="text"
                    component={TextField}
                    id="name"
                    label="Nom du porteur"
                    name="name"
                    placeholder="Votre nom"
                    margin="normal"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    type="text"
                    component={TextField}
                    id="cvc"
                    label="CVC"
                    name="cvc"
                    placeholder="CVC"
                    margin="normal"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.cvc}
                  />
                </Grid>
              </Grid>
            </Grid>
          </FormControl>
        </Form >
      );

    return (
      <Formik
        initialValues={initialValues}
        component={paymentCardFormComponent}
        onSubmit={this.onSubmit}
        validationSchema={this.validationSchema}
        handleChange={this.handleInputFocus}
      />
    );
  }
}

export default withStyles(styles as any)(PaymentCardForm as any) as any;
