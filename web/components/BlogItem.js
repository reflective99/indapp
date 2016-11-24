import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class BlogItem extends Component {

  render() {
    const {
      blog,
    } = this.props;
    return (
        <div className="panel panel-default text-center">
            <div className="panel-heading text-center">
              <div onClick={() => this.transitionTo(blog.blogURL)}>
                {blog.blogName}
              </div>
            </div>
          <Link to={`/blogs/${blog.id}`}>
            <div className="panel-body" style={{height: '50px'}}>
            </div>
          </Link>
          <div className="panel-footer text-center">
            <div className="" style={{height: '1.5em'}}>Country: {blog.blogCountry}</div>

          </div>
        </div>
    );
  }


}
