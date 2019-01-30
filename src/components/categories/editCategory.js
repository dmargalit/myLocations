import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { 
  fetchCategory, 
  deleteCategory, 
  editCategory,
  createCategory,
  fetchCategories 
} from "../../actions/categories";

class EditCategory extends Component {
  componentDidMount() {
    // const { id } = this.props.match.params;
    // if (id) {
    //   this.props.fetchCategory(id);
    // }
    console.log(this.props)
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    const { id } = this.props.match.params;
    id ? this.props.editCategory({ id, ...values }) : this.props.createCategory(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Category Name"
          name="name"
          component={this.renderField}
        />
        <Link to="/">Back to Categories</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Enter a name";
  }
  return errors;
}

let InitializeFromStateForm = reduxForm({
  validate,
  form: 'EditCategoryForm'
})(EditCategory)

InitializeFromStateForm = connect(
  state => ({
    initialValues: state.category
  }),
  {load: fetchCategory} // bind account loading action creator
)(InitializeFromStateForm)


export default InitializeFromStateForm;