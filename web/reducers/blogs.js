import {
  REQUEST_BLOGS,
  RECEIVE_BLOGS,
} from '../actions';


const initialBlogsState = {
  isFetching: false,
  data: [],
  lastUpdate: null,
}

export default function blogs(state = initialBlogsState, action) {
  switch(action.type) {
    case REQUEST_BLOGS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_BLOGS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdate: action.receivedAt,
      });
    default:
      return state;
  }
}
