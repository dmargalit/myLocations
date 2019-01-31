import { SubmissionError } from 'redux-form'
import { editCategory } from "../../actions/categories";

function submit(values) {
  editCategory(values);
}

export default submit;