import { Formik } from "formik";
import React from "react";
import { graphql } from "react-apollo";
import { compose } from "recompose";
import { Subscribe } from "unstated";
import * as Yup from "yup";
import { AppContainer } from "../../components/App";
import CookForm from "../../components/CookForm";

import { CreateCook } from "../../queries";
import { phoneNumberValidation, sirenValidation } from "../../shared/validations";

const initialValues = {
  is_pro: true,
  description: "",
  business_name: "",
  siren: "",
  pro_email: "",
  pro_phone_number: "",
  legal_first_name: "",
  legal_last_name: "",
  legal_birthdate: ""
};

interface IBecomeCookFormProps {
  classes?: any;
  currentGourmet: any;
  openSnackbar(message: string, variant: string);
  createCook(cook: any);
}

interface IBecomeCookFormValues {
  is_pro: boolean;
  description: string;
  business_name: string;
  siren: string;
  pro_email: string;
  pro_phone_number: string;
  legal_first_name: string;
  legal_last_name: string;
  legal_birthdate: string;
}

const validationSchema = Yup.object().shape({
  pro_email: Yup.string()
    .nullable(true)
    .email("Veuillez saisir une adresse email valide"),
  siren: sirenValidation(),
  pro_phone_number: phoneNumberValidation(true),
});

export class BecomeCookForm extends React.Component<IBecomeCookFormProps, {}> {
  public constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public render() {
    const { classes, currentGourmet } = this.props;

    return (
      <Subscribe to={[AppContainer]}>
        {(app: any) => (
          <Formik
            initialValues={Object.assign({}, initialValues, {
              pro_email: currentGourmet.email,
              pro_phone_number: currentGourmet.phone_number || '',
              legal_first_name: currentGourmet.first_name,
              legal_last_name: currentGourmet.last_name,
            })}
            component={({ values }) => <CookForm action="create" values={values} />}
            onSubmit={this.onSubmit}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
          />
        )}
      </Subscribe>
    );
  }

  public onSubmit(
    values: IBecomeCookFormValues,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) {
    const { currentGourmet, openSnackbar, createCook } = this.props;

    const {
      is_pro,
      description,
      business_name,
      siren,
      pro_email,
      pro_phone_number,
      legal_first_name,
      legal_last_name,
      legal_birthdate,
    } = values;

    const cook = {
      gourmet: {
        id: currentGourmet.id,
      },
      is_pro,
      description,
      pro_phone_number
    };

    if (is_pro) {
      Object.assign(cook, {
        business_name,
        siren,
        pro_email,
        legal_first_name,
        legal_last_name,
        legal_birthdate: legal_birthdate || null,
      });
    }

    const createCookError = (result) => {
      openSnackbar("Échec lors de la création de votre compte cuistot", "error");
      setStatus({ success: false });
      setSubmitting(false);
      console.error(result);
      if (result.errors && result.errors.length) {
        const error = result.errors[0].message;
        console.error(error);
        setErrors({ submit: error });
      }
    };

    createCook(cook)
      .then(res => {
        const result = res.data.createCook;
        if (result.message === "success") {
          openSnackbar("Merci ! Nous vous contactons au plus vite pour convenir d'un rendez-vous", "success");
          setStatus({ success: true });
          setSubmitting(false);
          resetForm(initialValues);
        } else {
          createCookError(result);
        }
      })
      .catch(createCookError);
  }
}

const enhance = compose(
  graphql(CreateCook, {
    props: (props: any) => ({
      createCook: (cook) => props.mutate({ variables: { cook } }),
    }),
  }),
);

export default enhance(BecomeCookForm);