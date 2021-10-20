/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ONE, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionType';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ONE:
      return posts.map((post) => (post._id === action.payload._id && post));
    case FETCH_ALL:
      return action.payload.data;
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};