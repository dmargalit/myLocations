import _ from "lodash";
import { 
  FETCH_CATEGORY, 
  DELETE_CATEGORY 
} from "../actions/categories";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_CATEGORY:
      return _.omit(state, action.payload);
    case FETCH_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
