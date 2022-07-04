import { SessionSagaActions, RequestLoginAction } from './sessionActions';

export function requestLogin(username: string, password: string): RequestLoginAction {
  return {
    type: SessionSagaActions.REQUEST_LOGIN,
    username,
    password,
  };
}
