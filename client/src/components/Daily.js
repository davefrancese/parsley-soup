import React, { Component } from "react";
import { connect } from "react-redux";

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

  shorten(soupName) {
    return soupName
      .split("")
      .filter(x => x !== " ")
      .join("");
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
              className={` d-flex justify-content-between align-items-center item-${this.shorten(
                soup.name
              )}`}
            >
              {soup.name}

              {soup.isOut ? (
                <span className="danger-badge">Out</span>
              ) : soup.isOut && soup.isLow ? (
                <span className="badge badge-danger badge-pill">Out</span>
              ) : soup.isLow ? (
                <span className="warning-badge">Low</span>
              ) : null}
            </li>
          );
        });
    } else {
      return (
        <div>
          <iframe
            title="No Soup For You!"
            src="https://giphy.com/embed/1UBEgUWneaVVu"
            width="480"
            height="360"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="full-title">
          <h1 className="title">
            Soups <span className="title-span">of the</span> Day
          </h1>
          <h4>Soup, seasonal</h4>
          <p className="sub-title">
            Made from scratch
            <br />
            <span className="badge badge-success">
              {this.props.dateReducer.length > 0
                ? this.props.dateReducer[0].date
                : "Oops! Something went wrong"}
            </span>
          </p>
        </div>
        <div className="App-soups">
          <ul className="list-group daily-soup-list">
            {this.renderDailySoups()}
          </ul>
        </div>
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
