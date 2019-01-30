import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategory, deleteCategory } from "../../actions/categories";

class CategoryItem extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCategory(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteCategory(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { category } = this.props;

    if (!category) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Category
        </button>
        <h3>{category.name}</h3>
      </div>
    );
  }
}

function mapStateToProps({ categories }, ownProps) {
  return { category: categories[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchCategory, deleteCategory })(CategoryItem);
