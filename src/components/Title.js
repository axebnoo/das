import React, { Component } from "react";
import PropTypes from "prop-types";
// import { DropdownButton, Panel, MenuItem } from "react-bootstrap";
// import { DropdownButton, Dropdown, Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/DropdownItem"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import TypeItem from "./TypeItem";
import { setType } from "../actions/app-actions";
import graphTypes from "../constants/graph-types";

class Title extends Component {
  handleClick = value => {
    const { root } = this.props;
    this.props.setType({ key: root, value, item: "type" });
  };

  render() {
    const { title, type, root } = this.props;
    return (
      <Dropdown id="title-dropdown">
        <Dropdown.Toggle variant="default" id="dropdown-basic">
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            {graphTypes.map(({ label, value }) => {
              return (
                <TypeItem
                  key={value}
                  onClick={this.handleClick}
                  type={type}
                  value={value}
                  label={label}
                />
              );
            })}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

Title.propTypes = {
  root: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default connect(null, { setType })(Title);
