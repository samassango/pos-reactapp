
export const loginRequest = (email, passsword) => {
  return function (dispatch){
    let requestUrl = "url";
      try{
          dispatch({
            type:'LOGIN_REQUEST_INITIATED',
          });

          return fetch(requestUrl, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
          }).then((response) => response.json())
               .then((responseJson)=>{
          // console.log("historyReport",responseJson)
               dispatch(successfullAuthenticated(responseJson));
           });

        }catch(error){
           dispatch(errorAuthentication(error));
        }
  }

}

export const successfullAuthenticated =(responseJson) =>{
  return{type:'SUCCESSFULL_AUTHENTICATION',responseJson}
}

export const errorAuthentication = (error)=>{
  return{type:'FAIL_AUTHENTICATION',error}
}
