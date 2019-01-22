import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/Dashboard.css";
import * as actions from "../actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.allSoups();
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
                        isDaily: false
                      })
                    }
                    className="btn btn-danger "
                  >
                    Remove
                  </button>
                  <button className="btn btn-warning">Getting Low</button>
                  <button className="btn btn-dark">Ran Out</button>
                </div>
              ) : (
                <button className="btn btn-primary">Make Daily</button>
              )}
            </div>
          </div>
        );
      });
    } else {
      return (
        <div>
          <p>Loading</p>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="Dashboard">
        <h2>Dashboard</h2>
        <Link to="/">
          <p>Daily Soups</p>
        </Link>
        {this.renderAllSoups()}
      </div>
    );
  }
}

function mapStateToProps({ soupsReducer, updateSoup }) {
  return { soupsReducer, updateSoup };
}

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
