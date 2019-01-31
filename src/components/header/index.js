import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link, Redirect } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { submit } from 'redux-form'

import { createCategory, deleteCategory, fetchCategory } from "../../actions/categories";
import SaveButton from './saveButton';
import { deleteLocation } from "../../actions/locations";

class Header extends Component {
  state = { redirect: false, submitForm: null }

  componentDidMount() {
    // const { id } = this.props.match.params;
    // this.props.fetchCategory(id);
  }

  onDeleteCategoryClick(id) {
    deleteCategory(id);
    this.setState({ redirect: '/categories' });
  }

  onDeleteLocationClick(id) {
    deleteLocation(id);
    this.setState({ redirect: '/locations' });
  }

  render() {
    const { redirect, submitForm } = this.state;

    const saveDeleteCategory = () => (
      <div>
        <SaveButton />
        <button
          className="btn btn-danger"
          onClick={() => this.onDeleteCategoryClick(this.props.category.id)}
        >
          Delete
        </button>
      </div>
    );
    const newCategory = () => (
      <Link to="/categories/new"><button className="btn btn-success">New Category</button></Link>
    );
    const saveDeleteLocation = () => (
      <div>
        <SaveButton />
        <button
          className="btn btn-danger"
          onClick={() => this.onDeleteLocationClick(this.props.location.id)}
        >
          Delete
        </button>
      </div>
    );
    const newLocation = () => (
      <Link to="/locations/new"><button className="btn btn-success">New Location</button></Link>
    );

    if (redirect) {
      return (<Redirect to={redirect} />);
    } else {
      return (
        <div>
          <h1>myLocations</h1>
          <Route path='/categories' exact component={newCategory} />
          <Route path='/categories/new' exact component={saveDeleteCategory} />
          <Route path='/categories/edit/:id' exact component={saveDeleteCategory} />

          <Route path='/locations' exact component={newLocation} />
          <Route path='/locations/new' exact component={saveDeleteLocation} />
          <Route path='/locations/edit/:id' exact component={saveDeleteLocation} />

          <hr />
        </div>
      );
    }
  }
}

function mapStateToProps({ category, categories, location, locations }) {
  return { category, categories, location, locations };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitForm: () => submit('EditCategoryForm')
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
