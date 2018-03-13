const initialState = {
  currentUser:null,
}

export default function login(state=initialState, action){
  switch (action.type) {
  case 'SUCCESSFULL_AUTHENTICATION':
    return {...state,
    currentUser:action.responseJson,
  isAuthenticated:true};
  case 'FAIL_AUTHENTICATION':
    return {...state,
       authenticationFail:action.error,
      isAuthenticated:false};
  default:
    return state
}
}
