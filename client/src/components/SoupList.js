import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/Dashboard.css";
import Soup from "./Soup";
import * as actions from "../actions";

class SoupList extends Component {
  componentDidMount() {
    this.props.fetchSoups();
  }

  renderSoup() {
    const { soupsReducer } = this.props;
    if (soupsReducer.length > 0) {
      return soupsReducer.map(soup => {
        if (soup.name !== "date") {
          return <Soup key={soup._id} soup={soup} />;
        } else {
          return null;
        }
      });
    }
  }

  render() {
    return <div>{this.renderSoup()}</div>;
  }
}

function mapStateToProps({ soupsReducer, dateReducer }) {
  return { soupsReducer, dateReducer };
}

export default connect(
  mapStateToProps,
  actions
)(SoupList);
