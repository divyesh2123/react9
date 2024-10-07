

export interface IUserAction {
    readonly type: 'UserRequest';
    
}
export interface IUserActionSuc {
    readonly type: 'UserSuc';
    payload: []
    
}

export interface IUserActionError {
    readonly type: 'UserError';
    payload: {}
    
}
export type UserActions =
| IUserAction
| IUserActionSuc
|IUserActionError

