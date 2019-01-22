import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/App.css";
import * as actions from "../actions";

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: "January 2, 2019"
    };
  }

  componentDidMount() {
    this.props.fetchSoups();
  }

  renderDailySoups() {
    if (this.props.soupsReducer.length > 0) {
      const { soupsReducer } = this.props;
      return soupsReducer
        .filter(soup => {
          return soup.isDaily;
        })
        .map(soup => {
          return (
            <li
              key={soup.name}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {soup.name}

              {soup.isOut ? (
                <span className="badge badge-danger badge-pill">Out</span>
              ) : soup.isOut && soup.isLow ? (
                <span className="badge badge-danger badge-pill">Out</span>
              ) : soup.isLow ? (
                <span className="badge badge-warning badge-pill">Low</span>
              ) : null}
            </li>
          );
        });
    } else {
      return (
        <div>
          <p>Hmm...where are those soups?</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Soups of the Day</h1>
          <h4>Soup, seasonal</h4>
          <p className="sub-title">
            Made from scratch
            <br />
            <span className="badge badge-success">{this.state.today}</span>
          </p>
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
          <div className="App-soups">
            <ul className="list-group">{this.renderDailySoups()}</ul>
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
)(Daily);
