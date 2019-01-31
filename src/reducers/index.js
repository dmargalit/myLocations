import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import CategoriesReducer from "./categoriesReducer";
import LocationsReducer from "./locationsReducer";
import HeaderReducer from "./headerReducer";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  locations: LocationsReducer,
  category: HeaderReducer,
  location: HeaderReducer,
  form: formReducer
});

export default rootReducer;
