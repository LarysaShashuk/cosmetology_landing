import { CUSTOMERS_ACTIONS_TYPES } from '../actions';

const initialState = {
  contactInformation: {},
  tags: [],
  individualContraindications: {},
  appointmentsPlan: [],
  customerFaceMap: [],
  customerBodyMap: {
    bodyParameters: {},
    cellulite: [],
    results: [],
  },
  homeCare: {},
  additionalRecommendations: {},
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMERS_ACTIONS_TYPES.ADD_CONTACT_INFORMATION:
      return { ...state, contactInformation: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_TAGS:
      return { ...state, tags: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_INDIVIDUAL_CONTRAINDICATIONS:
      return {
        ...state,
        individualContraindications: action.payload,
      };

    case CUSTOMERS_ACTIONS_TYPES.ADD_APPOINTMENTS_PLAN:
      return { ...state, appointmentsPlan: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMER_FACE_MAP:
      return { ...state, customerFaceMap: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_BODY_MAP_BODY_PARAMETERS:
      return { ...state, customerBodyMap: { ...state.customerBodyMap, bodyParameters: action.payload } };

    case CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_BODY_MAP_CELLULITE:
      return { ...state, customerBodyMap: { ...state.customerBodyMap, cellulite: action.payload } };

    case CUSTOMERS_ACTIONS_TYPES.ADD_CUSTOMERS_BODY_MAP_RESULTS:
      return { ...state, customerBodyMap: { ...state.customerBodyMap, results: action.payload } };

    case CUSTOMERS_ACTIONS_TYPES.ADD_HOME_CARE:
      return { ...state, homeCare: action.payload };

    case CUSTOMERS_ACTIONS_TYPES.ADD_ADDITIONAL_RECOMENDATIONS:
      return {
        ...state,
        additionalRecommendations: action.payload,
      };

    case CUSTOMERS_ACTIONS_TYPES.CLEAN_CUSTOMER:
    case CUSTOMERS_ACTIONS_TYPES.CREATE_CUSTOMER:
      return { ...state, ...initialState };

    default:
      return state;
  }
};

export default customerReducer;
