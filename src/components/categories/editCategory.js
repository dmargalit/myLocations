import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import submit from './submit';
import { 
  fetchCategory, 
  editCategory,
  createCategory
} from "../../actions/categories";

class EditCategory extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchCategory(id);
    }
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

function mapStateToProps(state) {
  return {
    initialValues: state.category
  }
}

export default reduxForm({
  validate,
  form: "EditCategoryForm",
  onSubmit: submit
})(connect(mapStateToProps, { fetchCategory, editCategory, createCategory })(EditCategory));
