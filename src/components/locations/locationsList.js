import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLocations } from "../../actions/locations";

class LocationsList extends Component {
  componentDidMount() {
    this.props.fetchLocations();
  }

  renderLocations() {
    return _.map(this.props.locations, location => {
      return (
        <li className="list-group-item" key={location.id}>
          <Link to={`/locations/edit/${location.id}`}>
            {location.name}
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
        <h3>locations</h3>
        <ul className="list-group">
          {this.renderLocations()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { locations: state.locations };
}

export default connect(mapStateToProps, { fetchLocations })(LocationsList);
