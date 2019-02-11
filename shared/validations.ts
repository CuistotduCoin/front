import { isValidNumber } from 'libphonenumber-js';
import * as Yup from "yup";

export const passwordValidation = () =>
  Yup.string()
    .min(8, "Votre mot de passe doit contenir au minimum 8 caractères")
    .matches(/[a-z]/, "Votre mot de passe doit contenir une minuscule")
    .matches(/[A-Z]/, "Votre mot de passe doit contenir une majuscule")
    .matches(/[0-9]/, "Votre mot de passe doit contenir un chiffre")
    .required("Un mot de passe est obligatoire");

export const passwordConfirmationValidation = ref =>
  Yup.string()
    .oneOf([Yup.ref(ref), null], "Les mots de passe doivent être identiques")
    .required("Confirmez le mot de passe");

export const phoneNumberValidation = (required = false) => {
  let validator = Yup.string();
  if (required) {
    validator = validator.required("Un numéro de téléphone valide est obligatoire");
  } else {
    validator = validator.nullable(true);
  }
  return validator.test('isValidPhoneNumber', `Numéro de téléphone invalide`, value => !value || isValidNumber(value, 'FR'));
};

export const zipCodeValidation = () =>
  Yup.string()
    .nullable(true)
    .matches(/^\d{5}$/, "Veuillez saisir un code postal valide");

export const sirenValidation = () =>
  Yup.string()
    .nullable(true)
    .matches(/^\d{9}$/, "Veuillez saisir un numéro SIREN valide");