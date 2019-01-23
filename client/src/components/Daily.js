import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../styles/App.css";
import * as actions from "../actions";

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: "No Soup Today"
    };
  }

  componentDidMount() {
    this.props.fetchSoups();
    this.props.fetchDate();
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
    console.log(this.props);
    return (
      <div className="App">
        <div>
          <h1>Soups of the Day</h1>
          <h4>Soup, seasonal</h4>
          <p className="sub-title">
            Made from scratch
            <br />
            <span className="badge badge-success">
              {this.props.dateReducer.length > 0
                ? this.props.dateReducer[0].date
                : "No Soups Today"}
            </span>
          </p>
          <div className="App-soups">
            <ul className="list-group">{this.renderDailySoups()}</ul>
          </div>
        </div>
        <Link to="/dashboard">
          <p className="secret">.</p>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ soupsReducer, dateReducer }) {
  return { soupsReducer, dateReducer };
}

export default connect(
  mapStateToProps,
  actions
)(Daily);
