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
        <div className="dashboard-header">
          <div className="dashboard-topline">
            <div>
              <h2>Dashboard</h2>
              <p className="sub">After updating, refresh page.</p>
            </div>
            <Link to="/">
              <button className="back-link">Return to Daily Soups</button>
            </Link>
          </div>
          <hr />
          <div className="date-section">
            <div>
              <h3>Set Date</h3>
            </div>
            <p className="set-date">
              Date set to:{" "}
              <span className="badge badge-success">
                {this.props.dateReducer.length > 0
                  ? this.props.dateReducer[0].date
                  : "--"}
              </span>
            </p>
            <form
              className="form-group"
              onSubmit={event => this.props.updateDate(event)}
            >
              <input
                className="form-control form-control-sm date-input"
                type="date"
                name="date"
                placeholder="Today's Date"
                data-provide="datepicker"
              />
              <button className="btn btn-primary save-date" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
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
