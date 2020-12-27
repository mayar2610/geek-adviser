import {
  RecommendationActionTypes,
  RecommendationState,
  GET_RECOMMENDATIONS_REQUEST,
} from './types';

const initialState: RecommendationState = {
  recommendations: [],
};

export function RecommendationsReducer(
  state = initialState,
  action: RecommendationActionTypes,
): RecommendationState {
  switch (action.type) {
    case GET_RECOMMENDATIONS_REQUEST:
      return {
        ...state,
        recommendations: action.payload,
      };
    default:
      return state;
  }
}
