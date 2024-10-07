import { CountActions } from "../action/counterAction";



type CountState = {
    count: number;
};

  const initialState: CountState = {
    count: 0
  };
export default (state = initialState,  action: CountActions) => {
  switch (action.type) {

  case 'INCREMENT':
    return { ...state, count : state.count+1 }

    case 'DECREMENT':
        return { ...state, count : state.count-1 }

  default:
    return state
  }
}
