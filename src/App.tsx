import React from 'react';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';

import SearchBox from './components/SearchBox';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

function App(): JSX.Element {
  return (
    <Wrapper>
      <HashRouter>
        <Route path="/" exact>
          <SearchBox />
        </Route>
        <Route path="/details" exact />
        <Redirect to="/" />
      </HashRouter>
    </Wrapper>
  );
}

export default App;
