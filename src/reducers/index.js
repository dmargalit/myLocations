import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import CategoriesReducer from "./categoriesReducer";
import HeaderReducer from "./headerReducer";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  category: HeaderReducer,
  form: formReducer
});

export default rootReducer;
