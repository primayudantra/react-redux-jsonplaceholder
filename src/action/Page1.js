import axios from 'axios';
import { PAGE1, POST_DETAIL } from './_ActionTypes';
import Config from '../config/config';

const fetchSuccess = (data) => ({
  type: PAGE1.FETCH_SUCCESS,
  page1: data,
  loading: false
})

const fetchFailed = () => ({
  type: PAGE1.FETCH_FAILED
})

const fetchSuccessPostDetail = (dataPosts,dataComments) =>({
  type: POST_DETAIL.FETCH_SUCCESS,
  dataPost:dataPosts,
  dataComments: dataComments,
  loading: false
})
const fetchFailedPostDetail = () =>({
  type: POST_DETAIL.FETCH_FAILED
})

export function fetchPage1(){
  return (dispatch) => {
    axios.get(`${Config.apiUrl}/posts`).then((res)=>{
      if(res.status === 200){
        dispatch(fetchSuccess(res.data))
      }else{
        dispatch(fetchFailed())
      }
    })
  }
}


export function fetchPagePostDetailComment(id){
  return(dispatch) => {
    const getPostById = () =>  axios.get(`${Config.apiUrl}/posts/${id}`);
    const getCommentsById = () =>  axios.get(`${Config.apiUrl}/posts/${id}/comments`);
    axios.all([getPostById(),getCommentsById()])
      .then(axios.spread((dataPost,dataComments)=>(
        dispatch(fetchSuccessPostDetail(dataPost,dataComments))
      )))
      .catch((err)=>{
        dispatch(fetchFailedPostDetail());
      })
  }
}
