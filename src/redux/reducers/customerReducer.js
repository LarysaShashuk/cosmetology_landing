import { CUSTOMERS_ACTIONS_TYPES } from '../actions';

const initialState = {
  contactInformation: {},
  individualContraindications: {},
  appointmentsPlan: [],
  customersFaceMap: {},
  customersBodyMap: {},
  homeCare: {},
  additionalRecommendations: {},
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_ACTIONS_TYPES.ADD_CONTACT_INFORMATION:
      return { ...state, contactInformation: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_INDIVIDUAL_CONTRAINDICATIONS:
      return {
        ...state,
        individualContraindications: action.payload,
      };

    case CUSTOMERS_ACTIONS_TYPES.ADD_APPOINTMENTS_PLAN:
      return { ...state, appointmentsPlan: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_FACE_MAP:
      return { ...state, customersFaceMap: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_BODY_MAP:
      return { ...state, customersBodyMap: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_HOME_CARE:
      return { ...state, homeCare: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_ADDITIONAL_RECOMENDATIONS:
      return {
        ...state,
        additionalRecommendations: action.payload,
      };

    default:
      return state;
  }
};

export default customerReducer;
