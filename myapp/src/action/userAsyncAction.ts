import { ThunkAction } from 'redux-thunk';
import { AppDispatch } from '../store/store';
import { UserActions } from './userAction';
import { AppState } from '../reducer/rootReducer';





import { ThunkAction } from "redux-thunk";
import { RootState, AppDispatch } from "./store"; // Ensure RootState aligns with your store setup
import { UserActions } from "./types"; // Make sure UserActions includes all possible actions for users

// Define the User Action Types
interface UserRequestAction {
  type: "UserRequest";
}

interface UserSuccessAction {
  type: "UserSuc";
  payload: UserData[];
}

interface UserErrorAction {
  type: "UserError";
  payload: Error;
}

type UserActions = UserRequestAction | UserSuccessAction | UserErrorAction;

// Define the UserData type based on the API response structure
interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  // Add other user fields as needed
}

// The ThunkAction for fetching user data
export const fetchUserData = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  UserActions
> => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: "UserRequest" });
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data: any[] = await response.json();
      dispatch({ type: "UserSuc", payload: data });
    } catch (error) {
      dispatch({ type: "UserError", payload: error as any });
    }
  };
};
