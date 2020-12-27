import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import getSimilarRecommendations from '../api/recommendation';

import {
  RecommendationActionTypes,
  Recommendation,
  GET_RECOMMENDATIONS_REQUEST,
} from './types';
import { rootState } from './rootReducer';

export function GetRecommendations(
  newRecommendation: Recommendation[],
): RecommendationActionTypes {
  return {
    type: GET_RECOMMENDATIONS_REQUEST,
    payload: newRecommendation,
  };
}

export const getRecommendations = (
  searchValue: string,
): ThunkAction<void, rootState, unknown, Action<string>> => async (
  dispatch,
) => {
  getSimilarRecommendations(searchValue).then((response) => {
    dispatch(GetRecommendations(response));
  });
};
