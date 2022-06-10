import {call, put, takeLatest} from 'redux-saga/effects';
import {User} from 'entity/userEntity';
import {error, request, success} from './sessionSlice';
import {authService, userService} from 'services';
import {RequestLoginAction, SessionSagaActions} from './sessionActions';

export function* requestLogin({username, password}: RequestLoginAction) {
  try {
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
