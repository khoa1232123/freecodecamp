import { noteTypes } from '../types';

const initialState = {
  currentNote: {},
  notes: [],
  showForm: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case noteTypes.GET_ALL_SUCCESS:
      return {
        ...state,
        notes: payload,
      };
    case noteTypes.CREATE_SUCCESS:
      return {
        ...state,
        notes: payload,
        showForm: false,
      };
    case noteTypes.UPDATE_SUCCESS:
      return {
        ...state,
        notes: payload,
      };
    case noteTypes.SEARCH_ACTIONS:
      return {
        ...state,
        notes: payload,
      };
    case noteTypes.OPEN_FORM:
      return {
        ...state,
        currentNote: payload ? payload : {},
        showForm: true,
      };
    case noteTypes.CLOSE_FORM:
      return {
        ...state,
        showForm: false,
      };
    default:
      return state;
  }
};
