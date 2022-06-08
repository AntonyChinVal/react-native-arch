import {configureStore} from '@reduxjs/toolkit';
import sessionReducer from './session/sessionSlice';
import createSagaMiddleware from 'redux-saga';
import saga from './rootSaga';

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(saga);
