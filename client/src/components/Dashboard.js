import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/Dashboard.css";
import * as actions from "../actions";

class Dashboard extends Component {
  state = {
    allSoups: []
  };

  componentDidMount() {
    this.props.allSoups();
    this.props.fetchDate();
  }

  renderAllSoups() {
    if (this.props.soupsReducer.length > 0) {
      const { soupsReducer } = this.props;
      return soupsReducer.map(soup => {
        return (
          <div key={soup.name} className="card">
            <div
              className={`card-header ${
                soup.isDaily ? "alert alert-primary" : null
              }`}
            >
              {soup.isDaily ? (
                <span className="badge badge-primary badge-pill">
                  Daily Soup
                </span>
              ) : (
                "Soup"
              )}
            </div>
            <div className="card-body">
              <h5 className="card-title">{soup.name}</h5>
              <p className="card-text">
                {soup.isLow ? (
                  <span className="badge badge-warning badge-pill">
                    This soup is marked as LOW.
                  </span>
                ) : null}
                {soup.isOut ? (
                  <span className="badge badge-dark badge-pill">
                    This soup is marked as OUT.
                  </span>
                ) : null}
              </p>

              {soup.isDaily ? (
                <div>
                  <button
                    onClick={() =>
                      this.props.updateSoup(soup._id, {
                        isDaily: false,
                        isLow: false,
                        isOut: false
                      })
                    }
                    className="btn btn-danger "
                  >
                    Remove
                  </button>
                  <button
                    onClick={() =>
                      this.props.updateSoup(soup._id, {
                        isLow: true
                      })
                    }
                    className="btn btn-warning"
                  >
                    Getting Low
                  </button>
                  <button
                    onClick={() =>
                      this.props.updateSoup(soup._id, {
                        isOut: true
                      })
                    }
                    className="btn btn-dark"
                  >
                    Ran Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={event =>
                    this.props.updateSoup(soup._id, {
                      isDaily: true
                    })
                  }
                  className="btn btn-primary"
                >
                  Make Daily
                </button>
              )}
            </div>
          </div>
        );
      });
    } else {
      return (
        <div>
          <p>Try refreshing the page.</p>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        Date set to:{" "}
        <span className="badge badge-success">
          {this.props.dateReducer.length > 0
            ? this.props.dateReducer[0].date
            : "No Soups Today"}
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
        {this.renderAllSoups()}
      </div>
    );
  }
}

function mapStateToProps({
  soupsReducer,
  updateSoup,
  updateDate,
  dateReducer
}) {
  return { soupsReducer, updateSoup, updateDate, dateReducer };
}

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
