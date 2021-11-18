import { createStore, applyMiddleware } from 'redux';
import imageEditorReducer from './services/ImageEditor/reducer';
import imageEditorSaga from './services/ImageEditor/sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  imageEditorReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(imageEditorSaga)
