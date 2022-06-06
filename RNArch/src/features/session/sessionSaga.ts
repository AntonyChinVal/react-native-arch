import {call, put, takeLatest} from 'redux-saga/effects';
import {User} from 'entity/UserEntity';
import {error, request, success} from './sessionSlice';
import {authService, userService} from 'services';

export enum SessionSagaActions {
  REQUEST_LOGIN = 'REQUEST_LOGIN',
}

export function* requestLogin() {
  try {
    yield put(request());
    const token: string = yield call(authService.signin, {
      username: 'admin',
      password: 'admin',
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
