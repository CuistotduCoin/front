import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import { Field, Form } from "formik";
import { Switch, TextField } from "formik-material-ui";
import React from 'react';

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 540,
    padding: 24
  },
  textField: {
    width: "100%"
  },
  submitButton: {
    marginTop: "30px"
  },
  isPro: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  isProLabel: {
    color: theme.palette.text.secondary
  }
});

interface ICookFormProps {
  classes: any;
  values: any;
  action: string;
};

const BUTTON_TITLES = {
  create: 'Devenir Cuistot',
  update: 'Mettre à jour mes infos Cuistot',
};

// tslint:disable-next-line
const CookForm: React.SFC<ICookFormProps> = ({ classes, values, action }) => (
  <Form autoComplete="off">
    <Grid container className={classes.grid} spacing={16}>
      <Grid item xs={12}>
        <Field
          type="text"
          component={TextField}
          id="pro_phone_number"
          label="Numéro de téléphone pro."
          helperText={action === 'create' ? 'Restera top secret :)' : undefined}
          name="pro_phone_number"
          className={classes.textField}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          type="text"
          component={TextField}
          id="cook-description"
          label="Description"
          name="description"
          className={classes.textField}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <div className={classes.isPro}>
          <Field
            id="is_pro"
            name="is_pro"
            type="checkbox"
            checked={values.is_pro}
            component={Switch}
          />
          <span className={classes.isProLabel}>Vous êtes un(e) professionnel(le) ?</span>
        </div>
      </Grid>
      {values.is_pro && (
        <>
          <Grid item xs={12}>
            <Field
              id="business_name"
              name="business_name"
              label="Nom de la société"
              className={classes.textField}
              margin="normal"
              type="text"
              component={TextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              type="text"
              component={TextField}
              id="siren"
              label="SIREN"
              name="siren"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              type="text"
              component={TextField}
              id="pro_email"
              label="Email pro."
              name="pro_email"
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <Field
                  id="legal_first_name"
                  name="legal_first_name"
                  label="Prénom du représentant légal"
                  className={classes.textField}
                  margin="normal"
                  type="text"
                  component={TextField}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  id="legal_last_name"
                  name="legal_last_name"
                  label="Nom du représentant légal"
                  className={classes.textField}
                  margin="normal"
                  type="text"
                  component={TextField}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Field
              component={TextField}
              type="date"
              id="legal_birthdate"
              label="Date d'immatriculation de la société"
              name="legal_birthdate"
              className={classes.textField}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="secondary" className={classes.submitButton}>
          {BUTTON_TITLES[action]}
        </Button>
      </Grid>
    </Grid>
  </Form>
);

export default withStyles(styles as any)(CookForm);