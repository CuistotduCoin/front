import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const styles = {
  textField: {
    width: "100%"
  },
  gourmetRange: {
    margin: '30px 0 30px',
    padding: '0 50px !important'
  },
};

interface IWorkshopFormProps {
  classes: any;
}

// tslint:disable-next-line
const WorkshopForm: React.SFC<IWorkshopFormProps> = ({ classes }) => (
  <Grid container={true} spacing={16}>
    <Grid item={true} xs={12}>
      <Field
        type="text"
        component={TextField}
        id="name"
        label="Nom de l'atelier"
        name="name"
        className={classes.textField}
        margin="normal"
      />
    </Grid>
    <Grid item={true} xs={12}>
      <Field
        type="text"
        component={TextField}
        id="description"
        label="Description"
        name="description"
        className={classes.textField}
        margin="normal"
      />
    </Grid>
    <Grid item={true} xs={12}>
      <Field
        type="text"
        component={TextField}
        id="price"
        label="Prix"
        name="price"
        helperText="En € et par personne"
        className={classes.textField}
        margin="normal"
      />
    </Grid>
    <Grid item={true} xs={12}>
      <Field
        type="text"
        component={TextField}
        id="duration"
        label="Durée"
        name="duration"
        helperText="En minutes"
        className={classes.textField}
        margin="normal"
      />
    </Grid>
    <Grid item={true} xs={12} className={classes.gourmetRange}>
      <Field
        name="gourmetRange"
        render={({ field, form }) => (
          <InputRange
            maxValue={30}
            minValue={2}
            allowSameValues
            // @ts-ignore
            formatLabel={(val, type) => {
              if (type === 'value') {
                return val;
              }
              const label = `${val} gourmets`;
              if (type === 'min') {
                return `${label} min.`;
              }
              return `${label} max.`;
            }}
            value={field.value}
            onChange={(val) => form.setFieldValue(field.name, val)}
          />
        )}
      />
    </Grid>
    <Grid item={true} xs={12}>
      <Field
        component={TextField}
        type="date"
        id="date"
        label="Date"
        name="date"
        className={classes.textField}
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
    </Grid>
  </Grid>
);

export default withStyles(styles as any)(WorkshopForm);
