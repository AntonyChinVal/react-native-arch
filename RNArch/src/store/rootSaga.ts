import { all } from 'redux-saga/effects';
import { watchRequestLogin } from 'store/session/sessionSaga';

export default function* rootSaga() {
  yield all([watchRequestLogin()]);
}
