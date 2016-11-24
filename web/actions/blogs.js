import { parseJSON, checkStatus } from '../lib/utils';
import { get, post, postJSON, putJSON, del, delJSON } from '../lib/request';

/*
  Actions for fetching, posting, updating and deleting a blog
*/

export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';


export function fetchBlogs() {
  return dispatch => {
    dispatch(requestBlogs())
    return get('/api/blogs')
      .then(checkStatus)
      .then(parseJSON)
      .then(json => dispatch(receiveBlogs(json)))
  }
}

function requestBlogs() {
  return {
    type: REQUEST_BLOGS,
  }
}

function receiveBlogs(data) {
  return {
    type: RECEIVE_BLOGS,
    data: data,
    receivedAt: Date.now(),
  }
}
