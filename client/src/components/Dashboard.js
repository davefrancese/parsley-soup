import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/Dashboard.css";
import SoupList from "./SoupList";
import * as actions from "../actions";

class Dashboard extends Component {
  state = {
    allSoups: []
  };

  componentDidMount() {
    this.props.allSoups();
    this.props.fetchDate();
  }

  render() {
    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        Date set to:{" "}
        <span className="badge badge-success">
          {this.props.dateReducer.length > 0
            ? this.props.dateReducer[0].date
            : "--"}
        </span>
        <form
          className="form-group"
          onSubmit={event => this.props.updateDate(event)}
        >
          <input
            className="form-control form-control-sm date-input"
            type="text"
            name="date"
            placeholder="Today's Date"
          />
          <button className="btn btn-primary save-date" type="submit">
            Save
          </button>
        </form>
        <Link to="/">
          <button className="btn btn-light back-link">Daily Soups</button>
        </Link>
        <SoupList />
      </div>
    );
  }
}

function mapStateToProps({ soupsReducer, dateReducer }) {
  return {
    soupsReducer,
    dateReducer
  };
}

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
