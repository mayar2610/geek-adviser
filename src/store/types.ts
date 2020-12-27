export type Recommendation = {
  Name: string | null;
  Type: string | null;
  wTeaser: string | null;
  wUrl: string | null;
  yID: string | null;
  yUrl: string | null;
};

export type RecommendationState = {
  recommendations: Recommendation[];
};

export const GET_RECOMMENDATIONS_REQUEST =
  '@recommendation/GET_RECOMMENDATIONS_REQUEST';

type GetRecommendationsRequest = {
  type: typeof GET_RECOMMENDATIONS_REQUEST;
  payload: Recommendation[];
};

export type RecommendationActionTypes = GetRecommendationsRequest;
