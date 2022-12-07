import * as PostApi from '../API/PostRequest'

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START"})
  
  try {
    const {data} = await PostApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data})
  } catch (e) {
    dispatch({ type: "RETREIVING_FAIL"})
    console.log(e);
  }
};

export const commentPost = (id, userId, comment) => async (dispatch) => {
  dispatch({type: "COMMENT_START"})
  
  try {
    const { data } = await PostApi.commentPost(id, userId, comment);
    dispatch({ type: "COMMENT_SUCCESS", data: data})
  } catch (e) {
    console.log(e);
    dispatch({type: "COMMENT_FAIL"})
  }
}

export const getCommentsPost = (id) => async (dispatch) => {
  dispatch({type: "GET_COMMENTS_START"})
  
  try {
    const { data } = await PostApi.getCommentsPost(id);
    dispatch({ type: "GET_COMMENTS_SUCCESS", data: data})
  } catch (e) {
    console.log(e);
    dispatch({type: "GET_COMMENTS_FAIL"})
  }
}

export const deleteCommentsPost = (id, commendId, userId) => async (dispatch) => {
  dispatch({type: "DELETE_COMMENT_START"})
  
  try {
    const { data } = await PostApi.deleteCommentPost(id, commendId, userId);
    dispatch({ type: "DELETE_COMMENT_SUCCESS", data: data})
  } catch (e) {
    console.log(e);
    dispatch({type: "DELETE_COMMENT_FAIL"})
  }
}
