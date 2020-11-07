import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import getSimilarRecommendations from '../api/recommendation';

const SearchBoxContainer = styled.div`
  width: 60%;
  height: 40px;
  // display: flex;
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
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearhResults] = useState([
    {
      Name: '',
      Type: '',
    },
  ]);

  const fetchSimilar = () => {
    getSimilarRecommendations(searchValue).then((response) =>
      setSearhResults(response),
    );
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
          searchResults.map((result, i) => {
            return (
              <p key={i}>
                {result.Name} ({result.Type})
              </p>
            );
          })}
      </SearchResults>
    </div>
  );
}

export default SearchBox;
