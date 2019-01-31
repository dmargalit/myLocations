import _ from "lodash";
import { 
  FETCH_LOCATIONS, 
  FETCH_LOCATION, 
  DELETE_LOCATION 
} from "../actions/locations";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_LOCATION:
      return _.omit(state, action.payload);
    case FETCH_LOCATION:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_LOCATIONS:
      return _.mapKeys(action.payload, "id");
    default:
      return state;
  }
}
