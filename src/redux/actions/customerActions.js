import $api from '../../http/index';
import { CUSTOMERS_ACTIONS_TYPES } from './index';

export const contactInformationAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_CONTACT_INFORMATION,
  payload: form,
});

export const tagsAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_TAGS,
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
  type: CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMER_FACE_MAP,
  payload: form,
});

export const customerBodyMap_BodyParametersAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_BODY_MAP_BODY_PARAMETERS,
  payload: form,
});

export const customerBodyMap_CelluliteAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_BODY_MAP_CELLULITE,
  payload: form,
});

export const customerBodyMap_ResultsAdded = (form) => ({
  type: CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_BODY_MAP_RESULTS,
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

export const cleanCustomer = () => ({
  type: CUSTOMERS_ACTIONS_TYPES.CLEAN_CUSTOMER,
});

const customerCreated = () => ({
  type: CUSTOMERS_ACTIONS_TYPES.CREATE_CUSTOMER,
})

export const createCustomer = (form) => {
  return function (dispatch) {
    $api
      .post(`/customer`, form)
      .then((response) => {
        console.log(response);
        dispatch(customerCreated());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};