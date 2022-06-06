import {all} from 'redux-saga/effects';
import {watchRequestLogin} from 'features/session/sessionSaga';

export default function* rootSaga() {
  yield all([watchRequestLogin()]);
}
