import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import submit from './submit';
import {
  fetchLocation,
  editLocation,
  createLocations
} from "../../actions/locations";
import { fetchCategories } from "../../actions/categories";

class EditLocation extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.fetchLocation(id);
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

  renderCategoriesField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <select className="form-control" {...field.input}>
          {
            fetchCategories().payload.map(category => (
              <option value={category.id}>{category.name}</option>
            ))
          }
        </select>
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    const { id } = this.props.match.params;
    id ? this.props.editLocation({ id, ...values }) : this.props.createLocations(values);
    this.props.history.push("/locations");
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Name"
          name="name"
          component={this.renderField}
        />
        <Field
          label="Addreess"
          name="address"
          component={this.renderField}
        />
        <Field
          label="Coordinates"
          name="coordinates"
          component={this.renderField}
        />
        <Field
          label="Category"
          name="category"
          component={this.renderCategoriesField}
        />
        <Link to="/locations">Back to Locations</Link>
        <button type="submit">Submit</button>
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
    initialValues: state.location
  }
}

export default reduxForm({
  validate,
  form: "EditLocationForm",
  onSubmit: submit
})(connect(mapStateToProps, { fetchLocation, editLocation, createLocations })(EditLocation));
