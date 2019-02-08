import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/Dashboard.css";
import actions from "../actions";

class Soup extends Component {
  render() {
    const { soup } = this.props;
    return (
      <div>
        <div
          key={soup.name}
          className={`soup-card ${soup.isDaily ? "daily-soup" : null}`}
        >
          <div
            className={`soup-header ${
              soup.isDaily ? "soup-header-daily" : null
            }`}
          >
            {soup.isDaily ? (
              <span className="daily-badge">
                Daily{" "}
                <span className="daily-star">
                  <i class="fas fa-star" />
                </span>
              </span>
            ) : (
              <span>Soup</span>
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
                  className="btn btn-danger update-soup"
                >
                  <i class="fas fa-times" />
                </button>
                <button
                  onClick={() =>
                    this.props.updateSoup(soup._id, {
                      isLow: true
                    })
                  }
                  className="btn btn-warning update-soup"
                >
                  <i class="fas fa-battery-quarter" />
                </button>
                <button
                  onClick={() =>
                    this.props.updateSoup(soup._id, {
                      isOut: true
                    })
                  }
                  className="btn btn-dark update-soup"
                >
                  <i class="fas fa-battery-empty" />
                </button>
              </div>
            ) : (
              <button
                onClick={event =>
                  this.props.updateSoup(soup._id, {
                    isDaily: true
                  })
                }
                className="btn btn-primary update-soup"
              >
                Make Daily
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ soupsReducer }) {
  return { soupsReducer };
}

export default connect(
  mapStateToProps,
  actions
)(Soup);
