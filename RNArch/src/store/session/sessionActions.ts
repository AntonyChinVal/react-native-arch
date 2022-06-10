export enum SessionSagaActions {
  REQUEST_LOGIN = 'REQUEST_LOGIN',
}

export interface RequestLoginAction {
  type: typeof SessionSagaActions.REQUEST_LOGIN;
  username: string;
  password: string;
}
