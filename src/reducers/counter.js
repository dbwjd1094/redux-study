import * as types from '../actions/ActionTypes';

//리듀서의 초기상태 저장
const initialState = {
  number : 0
};

export default function counter(state = initialState, action){

  switch (action.type) {
    case types.INCREMEMT:
      return {...state, number : state.number + 1};
    case types.DECREMENT:
      return {...state, number : state.number -1};
    default:
      return state;
  }
}
