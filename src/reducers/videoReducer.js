import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.videos, action) {
  switch(action.type) {
    case types.SHUTTER_VIDEOS_SUCCESS:
      return [...state, action.videos];
    case types.SELECTED_VIDEO:
      return {...state, selected_video: action.video};
    default:
      return state;
  }
}