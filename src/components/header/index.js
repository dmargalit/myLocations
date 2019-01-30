import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { submit } from "redux-form";

import {
  createCategory,
  deleteCategory,
  fetchCategory
} from "../../actions/categories";

class Header extends Component {
  state = { redirect: false, submitForm: null };

  componentDidMount() {
    // const { id } = this.props.match.params;
    // this.props.fetchCategory(id);
  }

  onDeleteClick(id) {
    deleteCategory(id);
    this.setState({ redirect: "/categories" });
  }

  render() {
    const { redirect, submitForm } = this.state;

    const saveDeleteCategory = () => (
      <div>
        <button onClick={this.props.submitForm}>Save</button>
        <button onClick={() => this.onDeleteClick(this.props.category.id)}>
          Delete
        </button>
      </div>
    );
    const newCategory = () => (
      <Link to="/categories/new">
        <button>New Category</button>
      </Link>
    );
    const saveDeleteLocation = () => (
      <div>
        <button onClick={this.props.submitForm}>Save</button>
        <button onClick={() => this.onDeleteClick(this.props.category.id)}>
          Delete
        </button>
      </div>
    );
    const newLocation = () => (
      <Link to="/locations/new">
        <button>New Location</button>
      </Link>
    );

    if (redirect) {
      return <Redirect to={redirect} />;
    } else {
      return (
        <div>
          <h1>myLocations</h1>
          <Route path="/categories" exact component={newCategory} />
          <Route path="/categories/new" exact component={saveDeleteCategory} />
          <Route
            path="/categories/edit/:id"
            exact
            component={saveDeleteCategory}
          />

          <Route path="/locations" exact component={newLocation} />
          <Route path="/locations/new" exact component={saveDeleteLocation} />
          <Route
            path="/locations/edit/:id"
            exact
            component={saveDeleteLocation}
          />

          <hr />
        </div>
      );
    }
  }
}

function mapStateToProps({ category, categories }) {
  return { category, categories };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      submitForm: () => submit("EditCategoryForm")
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
