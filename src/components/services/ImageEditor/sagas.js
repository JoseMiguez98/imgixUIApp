import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_IMAGES } from './actionTypes';
import {
  getImagesFail,
  getImagesSuccess,
} from './actions';
import { getImages } from './api';

function* imageEditorWorker() {
  try {
    const response = yield call(getImages);
    yield put(getImagesSuccess(response));
  } catch(error) {
    yield put(getImagesFail(error.message));
  }
}

export default function* imageEditorWatcher() {
  yield takeLatest(GET_IMAGES, imageEditorWorker);
}