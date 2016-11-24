import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ListHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-8">
        </div>
        <div className="col-xs-4 text-right">
          {this.props.children}
        </div>
      </div>
    )
  }
}
