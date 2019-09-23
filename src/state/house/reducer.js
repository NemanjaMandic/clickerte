import * as actions from "./actions";
import initialState from "./initialState";

export default (state = initialState(), action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_HOUSES:
      return {
        ...state,
        houses: {
          ...state.houses,
          inProgress: true
        }
      };
    case actions.GET_HOUSES_SUCCESS:
      return {
        ...state,
        houses: {
          ...state.houses,
          inProgress: false,
          data: payload
        }
      };

    case actions.GET_HOUSES_FAIL:
      return {
        ...state,
        houses: {
          ...state.houses,
          inProgress: false,
          errors: payload
        }
      };

    default:
      return state;
  }
};
