import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

//import getSimilarRecommendations from '../api/recommendation';

import { getRecommendations } from '../store/actions';
import { rootState } from '../store/rootReducer';

const SearchBoxContainer = styled.div`
  width: 60%;
  height: 40px;
  display: flex;
  border: 1px solid #000;
  margin: auto;
`;

const SearchIconStyled = styled(SearchIcon)`
  width: 10%;
  padding-top: 8px;
  padding-left: 14px;
  cursor: pointer;
`;

const SearchField = styled(InputBase)`
  width: 90%;
  padding-left: 20px;
`;

const SearchResults = styled.div`
  width: 60%;
  margin: 0 auto;
`;

function SearchBox(): JSX.Element {
  const recommendations = useSelector(
    (state: rootState) => state.recommendations.recommendations,
  );
  const [searchValue, setSearchValue] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const fetchSimilar = () => {
    dispatch(getRecommendations(searchValue));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && fetchSimilar();
  };

  return (
    <div>
      <SearchBoxContainer>
        <SearchField
          placeholder="Search..."
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <SearchIconStyled onClick={() => fetchSimilar()} />
      </SearchBoxContainer>
      <SearchResults>
        {searchValue &&
          recommendations.map((result, i) => {
            const title = result.Name;

            return (
              <p
                key={i}
                onClick={(): void => history.push(`/recommendation/${title}`)}
              >
                {result.Name}
              </p>
            );
          })}
      </SearchResults>
    </div>
  );
}

const mapStateToProps = (state: { recommendations: any }) => ({
  recommendations: state.recommendations,
});
const mapDispatchToProps = { getRecommendations };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
