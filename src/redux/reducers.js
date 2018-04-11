import {combineReducers} from 'redux';

import counter from 'reducers/counter';
import userInfo from 'reducers/user-info';


// export default function combineReducer(state = {}, action) {
//   return {
//     counter: counter(state.counter,action),
//     userInfo: userInfo(state.userInfo, action)
//   }
// }

export default combineReducers({
  counter,
  userInfo
})

