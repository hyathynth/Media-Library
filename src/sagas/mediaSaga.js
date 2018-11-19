import { put, call } from 'redux-saga/effects';
import { shutterStockImages, shutterStockVideos } from '../api/api';
import * as types from '../constants/actionTypes';

export function* searchMediaSaga({payload}) {
  try {
    const videos = yield call(shutterStockVideos, payload);
    const images = yield call(shutterStockImages, payload);

    yield [
      put({type: types.SHUTTER_VIDEOS_SUCCESS, videos}),
      put({type: types.SELECTED_VIDEO, video: videos[0]}),
      put({type: types.SHUTTER_IMAGES_SUCCESS, images}),
      put({type: types.SELECTED_IMAGE, image: images[0]})
    ];
  } catch(error) {
    yield put({type: types.SEARCH_MEDIA_ERROR, error});
  }
}