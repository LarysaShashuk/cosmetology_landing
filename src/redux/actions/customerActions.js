import { CUSTOMERS_ACTIONS_TYPES } from './index';

export const contactInformationAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_CONTACT_INFORMATION,
  payload: form,
});

export const individualContraindicationsAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_INDIVIDUAL_CONTRAINDICATIONS,
  payload: form,
});

export const appointmentsPlanAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_APPOINTMENTS_PLAN,
  payload: form,
});

export const customerFaceMapAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_FACE_MAP,
  payload: form,
});

export const customerBodyMapAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_BODY_MAP,
  payload: form,
});

export const homeCareAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_HOME_CARE,
  payload: form,
});

export const additionalRecommendationsAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_ADDITIONAL_RECOMENDATIONS,
  payload: form,
});