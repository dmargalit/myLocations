import { SubmissionError } from 'redux-form'
import { editLocation } from "../../actions/locations";

function submit(values) {
  editLocation(values);
}

export default submit;