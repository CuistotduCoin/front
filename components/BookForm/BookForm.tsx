import { FormControl, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Field, Form, Formik } from "formik";
import { Select } from "formik-material-ui";
import React from "react";

const styles = (theme: Theme) => ({
  formControl: {
    marginTop: theme.spacing.unit,
    width: "100%"
  },
  grid: {
    margin: "0px auto",
    maxWidth: 540,
    padding: 24
  },
  textField: {
    width: "100%"
  }
});

interface IBookForm {
  classes?: any;
  price: number;
  availableSeat: number;
}

interface IBookFormValues {
  nbSeat: number;
}

export class BookForm extends React.Component<IBookForm, {}> {
  public render() {
    const { classes } = this.props;

    const onSubmit = async (values: IBookFormValues) => {
      try {
        // await Auth.signIn(values.email, values.password);
        alert("Logged in");
      } catch (e) {
        alert(e.message);
      }
    };

    const initialValues = {
      nbSeat: 1
    };

    const bookFormComponent = () => (
      <>
        <Typography component="p" gutterBottom>
          <b>{this.props.price}</b>€ par personne
        </Typography>
        <Typography component="p" gutterBottom>
          Il reste <b>{this.props.availableSeat}</b> places pour cet atelier
        </Typography>
        <Form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="nbSeat">Nombre d'invités</InputLabel>
            <Field
              component={Select}
              name="nbSeat"
              label="Nombre d'invités"
              inputProps={{
                id: "nbSeat",
                name: "Nombre d'invités"
              }}
            >
              {[...Array(this.props.availableSeat)].map((e, i) => {
                return (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                );
              })}
            </Field>

            <br />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Réserver
            </Button>
            <Typography variant="caption" component="p" align="center">
              Vous ne serez débité que si vous confirmez
            </Typography>
          </FormControl>
        </Form>
      </>
    );

    return (
      <Formik
        initialValues={initialValues}
        component={bookFormComponent}
        onSubmit={onSubmit}
      />
    );
  }
}

export default withStyles(styles as any)(BookForm as any) as any;
