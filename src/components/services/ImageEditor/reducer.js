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

const initialState = {
  filters: {
    flip: 0,
    orient: 0,
    rot: 0,
    bri: 0,
    con: 0,
    exp: 0,
    gam: 0,
    high: 0,
    hue: 0,
    invert: false,
    sat: 0,
    shad: 0,
    sharp: 0,
    usm: 0,
    usmrad: 0,
  },
  filtersHistory: [{}],
  historyIndex: 0,
  images: [],
  imagesError: null,
  imagesLoading: false,
};

export default function imageEditorReducer(state = initialState, { type, payload }) {
  switch(type) {
    case CLEAN_IMAGE_FILTER:
      return {
        ...state,
        filters: {
          flip: 0,
          orient: 0,
          rot: 0,
          bri: 0,
          con: 0,
          exp: 0,
          gam: 0,
          high: 0,
          hue: 0,
          invert: false,
          sat: 0,
          shad: 0,
          sharp: 0,
          usm: 0,
          usmrad: 0,
        },
        filtersHistory: [{}],
        historyIndex: 0,
      };

    case GET_IMAGES:
      return {
        ...state,
        imagesLoading: true,
      };

    case GET_IMAGES_FAIL:
      return {
        ...state,
        imagesLoading: false,
        imagesError: payload.error,
      };

    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        imagesLoading: false,
        images: payload.response,
      };

    case SET_IMAGE_FILTER:
      const { name, value } = payload.filter;
      const filters = { ...state.filters, [name]: value };

      return {
        ...state,
        filters,
      };

    case UNDO_FILTER:
      return {
        ...state,
        historyIndex: state.historyIndex - 1,
        filters: state.filtersHistory[state.historyIndex - 1],
      }

    case REDO_FILTER:
      return {
        ...state,
        historyIndex: state.historyIndex + 1,
        filters: state.filtersHistory[state.historyIndex + 1],
      };

    case SET_FILTER_HISTORY:
      const filtersHistory = state.filtersHistory;
      filtersHistory.push(payload.filter);

      return {
        ...state,
        filtersHistory,
        historyIndex: state.historyIndex + 1,
      };

    default:
      return state;
  };
}
