import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { parseJSON, checkStatus } from '../lib/utils';
import { get, post, postJSON, putJSON, del, delJSON } from '../lib/request';

import '../assets/App.css';

import Header from '../components/Header';
import MainPage from '../components/MainPage';

class App extends Component {

  render() {
    const children = this.props.children;
    return (
      <div>
        <Header />
        <div className="container">

          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              {children ? children : <MainPage />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
