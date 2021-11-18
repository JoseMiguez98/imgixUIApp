import {
  CLEAN_IMAGE_FILTER,
  GET_IMAGES_FAIL,
  GET_IMAGES_SUCCESS,
  GET_IMAGES,
  REDO_FILTER,
  SET_FILTER_HISTORY,
  SET_IMAGE_FILTER,
  UNDO_FILTER,
} from './actionTypes';


export function getImages() {
  return {
    type: GET_IMAGES,
  };
}

export function getImagesFail(error) {
  return {
    type: GET_IMAGES_FAIL,
    payload: { error },
  };
}

export function getImagesSuccess(response) {
  return {
    type: GET_IMAGES_SUCCESS,
    payload: { response },
  };
}

export function setImageFilter(filter) {
  return {
    type: SET_IMAGE_FILTER,
    payload: { filter },
  }
}

export function cleanImageFilter() {
  return {
    type: CLEAN_IMAGE_FILTER,
  };
}

export function undoFilter() {
  return {
    type: UNDO_FILTER,
  };
}

export function redoFilter() {
  return {
    type: REDO_FILTER,
  };
}

export function setFilterHistory(filter) {
  return {
    type: SET_FILTER_HISTORY,
    payload: { filter },
  }
}
