import { PAGE1, POST_DETAIL } from '../action/_ActionTypes';

const defaultState = {
  loading: true,
  page1: []
}

export const reducer =  (state = defaultState, action) => {
  switch (action.type) {
    case PAGE1.LOADING:
      return {
        ...state,
        loading: true,
      };
    case PAGE1.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        page1: action.page1
      };
    default:
      return state;
  }
}

/*  REDUCER FOR POST DETAIL   */
const defaultStatePostDetail = {
  loading: true,
  dataPost:{},
  dataComments:[]
}

export const reducer_post_detail =  (state = defaultStatePostDetail, action) => {
  switch (action.type) {
    case POST_DETAIL.LOADING:
      return {
        ...state,
        loading: true,
      };
    case POST_DETAIL.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        dataPost: action.dataPost.data,
        dataComments: action.dataComments.data
      };
    default:
      return state;
  }
}
