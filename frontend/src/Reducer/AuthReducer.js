const authReducer = (state = {
  authData: null,
  loading: false,
  error: false,
  updateLoading: false
}, action) => {

  switch (action.type) {
    case "AUTH_START" :
      return {...state, loading: true, error: false};

    case "AUTH_SUCCESS":
      return {...state, authData: action.data, loading: false, error: false};

    case "LOG_OUT" :
      console.log("LOG_OUT")
      localStorage.clear();
      return {...state, authData: null, loading: false, error: false, updateLoading: false}

    default:
      return state;


  }


}

export default authReducer;