import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLocation, deleteLocation } from "../../actions/locations";

class LocationItem extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchLocation(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deleteLocation(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { location } = this.props;

    if (!location) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Location
        </button>
        <h3>{location.name}</h3>
      </div>
    );
  }
}

function mapStateToProps({ locations }, ownProps) {
  return { location: locations[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchLocation, deleteLocation })(LocationItem);
