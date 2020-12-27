import { combineReducers } from 'redux';

import { RecommendationsReducer } from './reducer';

export const rootReducer = combineReducers({
  recommendations: RecommendationsReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
