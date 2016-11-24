import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Cookies from 'js-cookie';

export default class Header extends Component {

  static contextTypes = {
    history: PropTypes.object.isRequired,
  }

  render() {
    const {
      onSubmit,
    } = this.props;
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">

            </div>
          </div>
        </div>
      </nav>
    );
  }
}
