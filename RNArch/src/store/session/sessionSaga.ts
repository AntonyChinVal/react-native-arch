import { call, put, takeLatest } from 'redux-saga/effects';
import { User } from 'entity/userEntity';
import { error, request, success } from './sessionSlice';
import { RequestLoginAction, SessionSagaActions } from './sessionActions';
import { AuthService, AUTH_SERVICE_TYPE } from 'services/authService/authService';
import { UserService, USER_SERVICE_TYPE } from 'services/userService/userService';
import { container } from 'container';

export function* requestLogin({ username, password }: RequestLoginAction) {
  try {
    const authService = container.get<AuthService>(AUTH_SERVICE_TYPE);
    const userService = container.get<UserService>(USER_SERVICE_TYPE);
    yield put(request());
    const token: string = yield call(authService.signing, {
      username,
      password,
    });
    console.log('Token', token);
    const user: User = yield call(userService.getUser);
    yield put(success(user));
  } catch (e) {
    yield put(error('Error'));
  }
}

export function* watchRequestLogin() {
  yield takeLatest(SessionSagaActions.REQUEST_LOGIN, requestLogin);
}
