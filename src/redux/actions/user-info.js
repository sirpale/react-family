export const GET_USER_INFO_REQUEST = "user-info/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "user-info/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FALL = "user-info/GET_USER_INFO_FALL";

function getUserInfoRequest() {
  return{
    type: GET_USER_INFO_REQUEST
  }
}

function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userInfo
  }
}

function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FALL
  }
}


export function getUserInfo() {
  // return function (dispatch) {
  //   dispatch(getUserInfoRequest());
  //
  //   return fetch('http://localhost:3000/api/user.json')
  //     .then((response => {
  //       return response.json()
  //     }))
  //     .then((json) => {
  //       dispatch(getUserInfoSuccess(json))
  //     })
  //     .catch(
  //       () => {
  //         dispatch(getUserInfoFail());
  //       }
  //     )
  // }

  return {
    types: [GET_USER_INFO_REQUEST,GET_USER_INFO_SUCCESS,GET_USER_INFO_FALL],
    promise: client => client.get('http://localhost:3000/api/user.json'),
    // afterSuccess : (dispatch, getState, response) => {
    //   // 请求成功后的执行函数
    //
    // },
    // otherData: {}
  }
}