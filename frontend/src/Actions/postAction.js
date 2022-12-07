import * as PostApi from '../API/PostRequest'

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START"})
  
  try {
    const {data} = await PostApi.getTimelinePosts(id);
    dispatch({ type: "RETRIEVING_SUCCESS", data: data})
  } catch (e) {
    dispatch({ type: "RETRIEVING_FAIL"})
    console.log(e);
  }
};

export const updatePost = (id, data) => async (dispatch) => {
  dispatch({type: "UPDATE_START"})
  
  try {
    const updatePost = await PostApi.updatePost(id, data);
    dispatch({ type: "UPDATE_SUCCESS", data: updatePost.data})
  } catch (e) {
    console.log(e);
    dispatch({type: "UPDATE_FAIL"})
  }
}

export const deletePost = (id) => async (dispatch) => {
  dispatch({type: "DELETE_COMMENT_START"})
  
  try {
    const { data } = await PostApi.deletePost(id);
    dispatch({ type: "DELETE_COMMENT_SUCCESS", data: data })
  } catch (e) {
    console.log(e);
    dispatch({type: "DELETE_COMMENT_FAIL"})
  }
}
