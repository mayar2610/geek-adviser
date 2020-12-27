import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { rootState } from '../store/rootReducer';

type ParamTypes = {
  title: string;
}

function RecommendationDetails(): JSX.Element {
  const { title } = useParams<ParamTypes>();
  const musicDetails = useSelector((state: rootState) => {
    return state.recommendations.recommendations.filter((recommendation) => {
      return recommendation.Name === title;
    });
  });

  return (
    <div>
      <p>{musicDetails[0].Name}</p>
      <p>{musicDetails[0].wTeaser}</p>
    </div>
  );
}

const mapStateToProps = (state: { recommendations: any }) => ({
  recommendations: state.recommendations,
});

export default connect(mapStateToProps)(RecommendationDetails);
