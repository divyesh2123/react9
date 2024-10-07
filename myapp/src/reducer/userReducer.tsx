import { UserActions } from "../action/userAction";

type UserState = {
    isLoading: boolean;
    data: any[];
    error:any;
};

const initialState : UserState = {

    isLoading: false,
    data:[],
    error: {}
}

export default (state = initialState, d: UserActions) => {
  switch (d.type) {

  case 'UserRequest':
    return { ...state, isLoading: true }

    case 'UserSuc':
        return { ...state, isLoading: false,data: d.payload }

        case 'UserError':
    return { ...state, isLoading: false,error:d.payload }

  default:
    return state
  }
}
