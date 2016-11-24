import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchBlogs } from '../actions/blogs';
import { ListHeader, BlogItem } from '../components';

export class Blogs extends Component {

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBlogs());
  }

  render() {
    const {
      blogs,
    } = this.props;
    return (
      <div className="row">
        <div className="col-xs-12">
          <ListHeader>
            <Link
              to="/blogs/new"
              className="btn btn-primary">
            Submit Blog
            </Link>
          </ListHeader>
        </div>
        <hr />
        <div className="row">
          {blogs.map(blog =>
            <div className="col-xs-2" key={blog.id}>
            <BlogItem
              blog={blog}
              />
          </div>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { blogs } = state;
  return {
    blogs: blogs.data,
  };
}

export default connect(mapStateToProps)(Blogs);
