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