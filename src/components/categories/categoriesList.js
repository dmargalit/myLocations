import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../actions/categories";

class CategoriesList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategories() {
    return _.map(this.props.categories, category => {
      return (
        <li className="list-group-item" key={category.id}>
          <Link to={`/categories/edit/${category.id}`}>
            {category.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
        </div>
        <h3>Categories</h3>
        <ul className="list-group">
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories };
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesList);
